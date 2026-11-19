/* Development-only sign-in gate. No app UI or app.js until verified owner session. */
(function () {
  'use strict';
  const gate = document.getElementById('loginGate');
  const shell = document.getElementById('appShell');
  const form = document.getElementById('loginForm');
  const message = document.getElementById('loginMessage');
  const button = document.getElementById('loginButton');
  const auth = window.SPODDAR_AUTH;
  let started = false;
  function status(text) { message.textContent = text; }
  async function enter(identity) {
    if (!identity?.user || identity.role !== 'owner') {
      status('Owner access required for this development preview.');
      return;
    }
    if (started) return;
    started = true;
    gate.hidden = true;
    gate.style.display = 'none';
    shell.hidden = false;
    const script = document.createElement('script');
    script.src = 'app.js?v=20261119-vessel-register';
    script.onerror = () => { shell.hidden = true; gate.hidden = false; gate.style.display = 'grid'; status('Unable to load app. Please refresh.'); started = false; };
    document.body.appendChild(script);
  }
  if (!auth) { status('Authentication service unavailable. Please refresh.'); return; }
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    button.disabled = true;
    status('Signing in…');
    try {
      const identity = await auth.signIn(document.getElementById('loginEmail').value.trim(), document.getElementById('loginPassword').value);
      document.getElementById('loginPassword').value = '';
      await enter(identity);
    } catch (error) { status(error?.message || 'Unable to sign in.'); }
    finally { button.disabled = false; }
  });
  status('Checking session…');
  auth.getIdentity().then(async identity => {
    if (identity.user && identity.role === 'owner') await enter(identity);
    else status(identity.user ? 'Owner access required for this development preview.' : 'Sign in with your confirmed owner account.');
  }).catch(error => status('Could not verify account: ' + (error?.message || 'Please try again.')));
})();
