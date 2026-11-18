/* S Poddar authentication foundation. Development branch only.
 * Load supabase-config.js and Supabase JS v2 before this file.
 * Client-side role checks are for UI only; database RLS must enforce access.
 * Do not enable financial screens until financial tables and policies are verified.
 */
(function () {
  'use strict';
  const cfg = window.SPODDAR_SUPABASE_CONFIG;
  const sdk = window.supabase;
  if (!cfg?.url || !cfg?.publishableKey || !sdk?.createClient) {
    console.warn('S Poddar: Supabase configuration or SDK not loaded.');
    return;
  }
  const client = sdk.createClient(cfg.url, cfg.publishableKey, {
    auth: { autoRefreshToken: true, persistSession: true, detectSessionInUrl: true }
  });
  let activeChannel = null;
  async function getIdentity() {
    const { data: { user }, error } = await client.auth.getUser();
    if (error || !user) return { user: null, role: null };
    const result = await client.from('app_roles').select('role').eq('user_id', user.id).maybeSingle();
    if (result.error) throw result.error;
    return { user, role: result.data?.role ?? null };
  }
  async function signIn(email, password) {
    const { error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return getIdentity();
  }
  async function signOut() {
    if (activeChannel) {
      await client.removeChannel(activeChannel);
      activeChannel = null;
    }
    const { error } = await client.auth.signOut();
    if (error) throw error;
  }
  async function subscribeOperationalChanges(onChange) {
    const identity = await getIdentity();
    if (!identity.user || !identity.role) throw new Error('Authorized account required');
    if (activeChannel) await client.removeChannel(activeChannel);
    activeChannel = client.channel('spoddar-operations')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'vessels' }, onChange)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'buyers' }, onChange)
      .subscribe();
    return activeChannel;
  }
  window.SPODDAR_AUTH = Object.freeze({ client, getIdentity, signIn, signOut, subscribeOperationalChanges });
})();
