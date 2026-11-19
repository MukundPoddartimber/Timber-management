(async()=>{'use strict';const $=id=>document.getElementById(id),fmt=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(n),num=n=>Number(n)||0,day=s=>Date.parse(s+'T00:00:00Z')/86400000,escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),today=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());const historicalVessels=["MV CORESKY","MV ZHE HAI","MV LIGNUM WEB","MV RUBY CONFIDENCE","MV PAIWAN ACE","MV LIGNUM WEB — SECOND SHIPMENT","MV AFRICAN MERLIN","MV LOWLANDS CORSO","MV SUNNY HONG","MV PAIWAN ACE — SECOND SHIPMENT","MV ALLEGRA","MV BUNUN RESPECT","MV BILLION STAR","MV AFRICAN PIPER","MV FIORA TOPIC","MV ALBERTO TOPIC","MV DRAKE WELL — EARLIER SHIPMENT","MV KIBO","MV AFRICAN QUAIL","MV DRAKE WELL — LATEST SHIPMENT"];const drakeLots=[["DW/KDL/1A","17","Banarsi Dass and Sons",1620,473.971],["DW/KDL/1AA","78","SIPL Plywood Pvt. Ltd.",1031,386.304],["DW/KDL/1B","92","Bhagwati Lumbers Pvt Ltd",2354,328.571],["DW/KDL/1C","6","Vikas Timber Traders",1617,477.121],["DW/KDL/1D","2, 29","Shree Shankar Vijay Saw Mill",2068,661.65],["DW/KDL/1E","7, 93","Pine Exporters",3792,712.268],["DW/KDL/1F","32","Matrukrupa Timber",1171,411.62],["DW/KDL/1G","8","Krishna Globetrade Pvt Ltd",1249,377.244],["DW/KDL/1H","62","Ashok Aggarwal and Sons",1712,473.786],["DW/KDL/1J","12, 13","Shyam Commex Pvt Ltd",3091,919.497],["DW/KDL/1K","30, 63","Hindwood Forestry Products LLP",1986,661.074],["DW/KDL/1L","11, 64, 66","Zircon Exports Pvt Ltd",5281,1515.997],["DW/KDL/1M","4","MPS Wood Products Pvt. Ltd.",1578,495.55],["DW/KDL/1N","10, 14, 15, 16","Shanker International Pvt Ltd",6782,1993.766],["DW/KDL/1P","1, 3","Tirupati Tradelinks Pvt Ltd",3800,1154.068],["DW/KDL/1Q","5, 65","Tirupati Tradelinks Pvt Ltd",4023,1161.207],["DW/KDL/1R","94","ISPK Timber Pvt Ltd",2247,320.052],["DW/KDL/1S","72, 81","Tribeca Panel India LLP",2394,910.453],["DW/KDL/1T","73","Magnus Plywood Pvt Ltd",1409,445.881],["DW/KDL/1U","74","Russaka Ply India Ltd",1805,572.078],["DW/KDL/1V","75","Rajkripal Exim Pvt Ltd",1664,519.356],["DW/KDL/1W","76","Dolby Plyboards Pvt Ltd",1220,395.975],["DW/KDL/1X","77","Gandhidham Woods Pvt Ltd",1381,464.313],["DW/KDL/1Y","79","Valora Plywood Pvt Ltd",602,221.235],["DW/KDL/1Z","79, 80","Gandhidham Woods Pvt Ltd",1794,624.005],["DW/KDL/2A","48","Ambikashree Packing Pvt Ltd",880,365.361],["DW/KDL/2B","25","Dembla Timber Company Pvt. Ltd.",1256,384.302],["DW/KDL/2C","50","Soft Wood Products",2613,848.009],["DW/KDL/2D","19","Radhe Sham Ravi Prakash Timbers Pvt Ltd",1331,389.433],["DW/KDL/2E","44, 47","Shyam Commex Pvt Ltd",2398,1019.495],["DW/KDL/2F","46, 58","Zircon Exports Pvt Ltd",1965,793.99],["DW/KDL/2G","55","NBS Forest Products",1240,418.191],["DW/KDL/2H","41, 45, 56","Shanker International Pvt Ltd",4577,2040.933],["DW/KDL/2J","42, 43","Tirupati Timber Industries Pvt. Ltd.",2663,1000.865],["DW/KDL/2K","49","Tirupati Timber Industries Pvt. Ltd.",1284,538.815],["DW/KDL/2L","18, 20","Inder Sen Pradeep Kumar",3015,916.054],["DW/KDL/2M","52","ISPK Timber Pvt Ltd",1576,674.579],["DW/KDL/2N","78","SIPL Plywood Pvt. Ltd.",51,44.433]];const firstProfitShipment='MV DRAKE WELL — EARLIER SHIPMENT';
const profitStartDate='2026-07-12';
const historicalProfitExclusions=new Set(historicalVessels.slice(0,historicalVessels.indexOf(firstProfitShipment)));
function inProfitScope(vessel){
  const name=String(vessel.vessel_name||vessel.name||'').trim().toUpperCase();
  const arrival=vessel.arrival_date?new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(vessel.arrival_date)):null;
  return !historicalProfitExclusions.has(name)&&(!arrival||arrival>=profitStartDate);
}
let data;try{const auth=window.SPODDAR_AUTH;if(!auth)throw Error('Supabase client unavailable');const identity=await auth.getIdentity();if(identity.role!=='owner')throw Error('Owner login required. Sign in on the main dashboard first.');const client=auth.client;async function load(){const names=['vessels','buyers','vessel_finance','vessel_sales','vessel_sale_payments'];const records={};for(const name of names){const rows=[];
for(let from=0;;from+=500){
  const {data,error}=await client.from(name).select('*').order('id').range(from,from+499);
  if(error)throw Error(name+': '+error.message);
  rows.push(...data);
  if(data.length<500)break;
}
records[name]=rows;}data=records;const select=$('vessel'),previous=select.value;select.replaceChildren();for(const v of records.vessels)select.add(new Option(v.vessel_name||v.name||v.id,v.id));const cloudNames=new Set(records.vessels.map(v=>String(v.vessel_name||v.name||'').trim().toUpperCase()));for(const [i,name] of historicalVessels.entries())if(!cloudNames.has(name))select.add(new Option(name+' (history · finance not yet synced)','history:'+i));if([...select.options].some(o=>o.value===previous))select.value=previous;renderOverallProfit();render();$('dashboard').hidden=false;$('status').textContent='Cloud finance records loaded';$('error').textContent=''}function render(){if(!data)return;const id=$('vessel').value;if(id==='history:19'){const key='spoddar-drake-well-rate-draft-v1';let rates={};try{rates=JSON.parse(localStorage.getItem(key)||'{}')}catch{}const draw=()=>{let total=0,priced=0;$('sales').innerHTML=drakeLots.map((x,i)=>{const rate=rates[x[0]];const valid=rate!==undefined&&rate!==''&&Number.isFinite(Number(rate))&&Number(rate)>=0;const amount=valid?num(x[4])*Number(rate):null;if(valid){total+=amount;priced++}return '<tr><td>'+escape(x[2])+'</td><td>'+escape(x[0])+'</td><td>'+num(x[4]).toFixed(3)+'</td><td><label>USD/CBM <input aria-label="Rate for '+escape(x[0])+'" data-rate="'+i+'" type="number" min="0" step="0.01" value="'+(valid?escape(rate):'')+'" style="width:95px;padding:7px"></label></td><td>'+(valid?fmt(amount):'—')+'</td><td colspan="3">Draft · not invoiced</td></tr>'}).join('');$('summary').innerHTML='<div class="card">Drake Well latest shipment<strong>'+drakeLots.length+' BL / buyer entries</strong></div><div class="card">Allocated volume<strong>'+drakeLots.reduce((n,x)=>n+num(x[4]),0).toFixed(3)+' CBM</strong></div><div class="card">Priced BL entries<strong>'+priced+' / '+drakeLots.length+'</strong></div><div class="card">Draft sale value (priced BLs)<strong>'+fmt(total)+'</strong></div><div class="card">Rate entry status<strong>Saved in this browser only · not synced</strong></div>'};draw();$('sales').onchange=e=>{const el=e.target;if(!el.matches('input[data-rate]'))return;const lot=drakeLots[Number(el.dataset.rate)];if(!lot)return;if(el.value==='')delete rates[lot[0]];else if(Number.isFinite(Number(el.value))&&Number(el.value)>=0)rates[lot[0]]=el.value;else return;try{localStorage.setItem(key,JSON.stringify(rates));draw()}catch(err){$('error').textContent='Could not save draft: '+err.message}};return}if(id.startsWith('history:')){$('sales').innerHTML='<tr><td colspan="11">Historical vessel selected. Finance data is not yet synced for this shipment.</td></tr>';$('summary').innerHTML='<div class="card">Historical shipment<strong>Finance not yet available</strong></div>';return}const result=calculateShipment(id,true);
$('sales').innerHTML=result.rows.join('')||'<tr><td colspan="11">No sales recorded for this vessel</td></tr>';
const vessel=data.vessels.find(v=>v.id===id);
const scoped=vessel&&inProfitScope(vessel);
const cards=[
  ['Sales',fmt(result.total)],
  ['Received',fmt(result.received)],
  ['Outstanding',fmt(Math.max(0,result.total-result.received))],
  ['CFR purchase cost',result.cfr!==null?fmt(result.cfr):'—'],
  ['Purchase + recorded expenses',fmt(result.cfr===null?result.recordedExpenses:result.cfr+result.additionalExpenses)],
  ['Net profit / loss',!scoped?'Outside profit period':result.net===null?'Awaiting CFR and invoice data':fmt(result.net)],
  ['LC 150-day cost',fmt(result.lcCost)],
  ['DP cost',fmt(result.dpCost)],
  ['9% delay cost',fmt(result.interest)],
  ['Total finance cost',fmt(result.lcCost+result.dpCost+result.interest)]
];
$('summary').innerHTML=renderCards(cards);
}
function calculateShipment(id,includeRows=false){
const finance=data.vessel_finance.find(x=>x.vessel_id===id)||{},sales=data.vessel_sales.filter(x=>x.vessel_id===id),payments=data.vessel_sale_payments, buyers=new Map(data.buyers.map(x=>[x.id,x.buyer_name]));let total=0,received=0,interest=0,lcCost=0,dpCost=0;const rows=sales.map(s=>{const invoice=s.invoice_amount_usd!=null?num(s.invoice_amount_usd):num(s.sale_cbm)*num(s.sale_rate_usd),due=s.due_date,accepted=s.acceptance_date,settled=s.historical_paid===true,cutoff=accepted&&accepted<today?accepted:today,terms=String(s.payment_terms||'').trim().toUpperCase(),lc=/^(LC(?:\s|$)|LETTER OF CREDIT$)/.test(terms)?num(s.sale_cbm)*4:0,dp=/^DP(?:\s|$)/.test(terms)?num(s.sale_cbm)*2:0,ps=payments.filter(p=>p.sale_id===s.id&&p.payment_date<=today).sort((a,b)=>a.payment_date.localeCompare(b.payment_date)),paid=settled?invoice:ps.reduce((a,p)=>a+num(p.amount_received_usd),0);
let balance=invoice,cost=0,last=due&&!settled?day(due):null;
for(const p of ps){
  if(p.payment_date>cutoff)break;
  if(last!==null&&p.payment_date>due){
    const when=day(p.payment_date);
    cost+=Math.max(0,balance)*.09*Math.max(0,when-last)/365;
    last=when;
  }
  balance-=num(p.amount_received_usd);
}
if(last!==null)cost+=Math.max(0,balance)*.09*Math.max(0,day(cutoff)-last)/365;
const outstanding=Math.max(0,invoice-paid);
const finalReceipt=ps.at(-1)?.payment_date;
const delayEnd=outstanding===0&&finalReceipt&&finalReceipt<cutoff?finalReceipt:cutoff;
const delay=!settled&&due?Math.max(0,day(delayEnd)-day(due)):0;
const nextDay=accepted?new Date((day(accepted)+1)*86400000).toISOString().slice(0,10):'';
const status=settled?'Paid':outstanding===0?'Paid':accepted?'Accepted '+accepted+' · payment from '+nextDay:'Acceptance pending';
total+=invoice;received+=paid;interest+=cost;lcCost+=lc;dpCost+=dp;return !includeRows?'':'<tr><td>'+escape(buyers.get(s.buyer_id)||s.buyer_id)+'</td><td>'+escape(s.invoice_number||s.bl_number||'—')+ (s.bl_number&&s.invoice_number?'<br><small>'+escape(s.bl_number)+'</small>':'')+'</td><td>'+num(s.sale_cbm).toFixed(3)+'</td><td>'+fmt(invoice)+'</td><td>'+fmt(paid)+'</td><td>'+fmt(outstanding)+'</td><td>'+(settled?0:due?delay:'No due date')+'</td><td>'+(settled||due?fmt(cost):'—')+'</td><td>'+escape(status)+(ps.length?'<br><small>Received '+escape(ps.map(p=>p.payment_date).join(', '))+'</small>':'')+'</td><td>'+escape(s.payment_terms||'—')+(s.lc_received_date?'<br><small>LC received '+escape(s.lc_received_date)+'</small>':'')+'</td><td>'+fmt(lc+dp)+'</td></tr>'});
const additionalExpenses=['port_charges_usd','demurrage_usd','other_expenses_usd'].reduce((sum,key)=>sum+num(finance[key]),0);
const recordedExpenses=additionalExpenses+num(finance.purchase_amount_usd)+num(finance.freight_usd);
const cfr=num(finance.cfr_purchase_usd)>0?num(finance.cfr_purchase_usd):null;
const net=cfr===null||sales.length===0?null:total-cfr-additionalExpenses-lcCost-dpCost-interest;
return {rows,total,received,lcCost,dpCost,interest,cfr,net,recordedExpenses,additionalExpenses};
}
function renderCards(cards){
  return cards.map(([label,value])=>'<div class="card">'+escape(label)+'<strong>'+escape(value)+'</strong></div>').join('');
}
function renderOverallProfit(){
  const eligible=data.vessels.filter(inProfitScope).map(v=>calculateShipment(v.id));
  const included=eligible.filter(result=>result.net!==null);
  const net=included.reduce((sum,result)=>sum+result.net,0);
  $('overallProfit').innerHTML=renderCards([
    ['Overall net profit / loss',included.length?fmt(net):'Awaiting CFR and invoice data'],
    ['Shipments included',String(included.length)],
    ['Shipments awaiting CFR or invoices',String(eligible.length-included.length)]
  ]);
} $('vessel').onchange=render;$('reload').onclick=()=>load().catch(e=>$('error').textContent=e.message);let pending=[];const normalize=x=>String(x||'').trim().toUpperCase().replace(/\\s+/g,' ');$('previewSync').onclick=()=>{try{const raw=JSON.parse(localStorage.getItem('spoddar-v1')||'{}');const local=Array.isArray(raw.vessels)?raw.vessels:[];const cloud=new Set(data.vessels.map(v=>normalize(v.vessel_name||v.name)));pending=local.filter(v=>v&&typeof v.name==='string'&&v.name.trim()&&!cloud.has(normalize(v.name)));pending=[...new Map(pending.map(v=>[normalize(v.name),v])).values()];$('syncList').textContent=pending.length?pending.map(v=>v.name).join('\\n'):'No new browser-saved vessels found. Vessel names in built-in historical lists are not browser-saved records.';$('syncArea').hidden=false;$('confirmSync').disabled=!pending.length;$('syncStatus').textContent=local.length+' browser-saved vessel(s); '+pending.length+' eligible for import. No changes made.'}catch(e){$('syncStatus').textContent='Could not read local records: '+e.message}};$('confirmSync').onclick=async()=>{if(!pending.length)return;const list=pending.slice();$('confirmSync').disabled=true;$('syncStatus').textContent='Syncing '+list.length+' vessel(s)…';let count=0;try{for(const v of list){const name=v.name.trim();const {data:existing,error:lookupError}=await client.from('vessels').select('id,vessel_name').ilike('vessel_name',name).limit(10);if(lookupError)throw lookupError;if(existing.some(x=>normalize(x.vessel_name)===normalize(name)))continue;const payload={vessel_name:name};if(v.origin)payload.loading_port=String(v.origin);if(v.cargoCBM!=null&&Number.isFinite(Number(v.cargoCBM)))payload.total_cbm=Number(v.cargoCBM);const {error}=await client.from('vessels').insert(payload);if(error)throw Error(name+': '+error.message);count++}await load();$('syncStatus').textContent='Synced '+count+' vessel(s). No existing vessel or finance records overwritten.';$('syncArea').hidden=true;pending=[]}catch(e){$('syncStatus').textContent='Sync stopped after '+count+' vessel(s): '+e.message+' — review and retry.';await load().catch(()=>{})}finally{$('confirmSync').disabled=false}};await load()}catch(e){$('status').textContent='Finance preview unavailable';$('error').textContent=e.message}})();