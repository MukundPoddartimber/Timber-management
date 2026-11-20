let publishedBuyerAllocations=null;

const poddarOwnVessels=[{name:'MV DRAKE WELL',origin:'Argentina',cargoCBM:26111.50,pieces:82520,entries:[["DW/KDL/1A","17","Banarsi Dass and Sons",1620,473.971],["DW/KDL/1AA","78","SIPL Plywood Pvt. Ltd.",1031,386.304],["DW/KDL/1B","92","Bhagwati Lumbers Pvt Ltd",2354,328.571],["DW/KDL/1C","6","Vikas Timber Traders",1617,477.121],["DW/KDL/1D","2, 29","Shree Shankar Vijay Saw Mill",2068,661.65],["DW/KDL/1E","7, 93","Pine Exporters",3792,712.268],["DW/KDL/1F","32","Matrukrupa Timber",1171,411.62],["DW/KDL/1G","8","Krishna Globetrade Pvt Ltd",1249,377.244],["DW/KDL/1H","62","Ashok Aggarwal and Sons",1712,473.786],["DW/KDL/1J","12, 13","Shyam Commex Pvt Ltd",3091,919.497],["DW/KDL/1K","30, 63","Hindwood Forestry Products LLP",1986,661.074],["DW/KDL/1L","11, 64, 66","Zircon Exports Pvt Ltd",5281,1515.997],["DW/KDL/1M","4","MPS Wood Products Pvt. Ltd.",1578,495.55],["DW/KDL/1N","10, 14, 15, 16","Shanker International Pvt Ltd",6782,1993.766],["DW/KDL/1P","1, 3","Tirupati Tradelinks Pvt Ltd",3800,1154.068],["DW/KDL/1Q","5, 65","Tirupati Tradelinks Pvt Ltd",4023,1161.207],["DW/KDL/1R","94","ISPK Timber Pvt Ltd",2247,320.052],["DW/KDL/1S","72, 81","Tribeca Panel India LLP",2394,910.453],["DW/KDL/1T","73","Magnus Plywood Pvt Ltd",1409,445.881],["DW/KDL/1U","74","Russaka Ply India Ltd",1805,572.078],["DW/KDL/1V","75","Rajkripal Exim Pvt Ltd",1664,519.356],["DW/KDL/1W","76","Dolby Plyboards Pvt Ltd",1220,395.975],["DW/KDL/1X","77","Gandhidham Woods Pvt Ltd",1381,464.313],["DW/KDL/1Y","79","Valora Plywood Pvt Ltd",602,221.235],["DW/KDL/1Z","79, 80","Gandhidham Woods Pvt Ltd",1794,624.005],["DW/KDL/2A","48","Ambikashree Packing Pvt Ltd",880,365.361],["DW/KDL/2B","25","Dembla Timber Company Pvt. Ltd.",1256,384.302],["DW/KDL/2C","50","Soft Wood Products",2613,848.009],["DW/KDL/2D","19","Radhe Sham Ravi Prakash Timbers Pvt Ltd",1331,389.433],["DW/KDL/2E","44, 47","Shyam Commex Pvt Ltd",2398,1019.495],["DW/KDL/2F","46, 58","Zircon Exports Pvt Ltd",1965,793.99],["DW/KDL/2G","55","NBS Forest Products",1240,418.191],["DW/KDL/2H","41, 45, 56","Shanker International Pvt Ltd",4577,2040.933],["DW/KDL/2J","42, 43","Tirupati Timber Industries Pvt. Ltd.",2663,1000.865],["DW/KDL/2K","49","Tirupati Timber Industries Pvt. Ltd.",1284,538.815],["DW/KDL/2L","18, 20","Inder Sen Pradeep Kumar",3015,916.054],["DW/KDL/2M","52","ISPK Timber Pvt Ltd",1576,674.579],["DW/KDL/2N","78","SIPL Plywood Pvt. Ltd.",51,44.433]]}];

const historicalBuyerDetails={
'MV CORESKY':[['CO/KDL/1A','Laxman Timbers Pvt Ltd.',527.951],['CO/KDL/1R','Gandhidham Woods Private Limited',499.241],['CO/KDL/1S','Lrb Wood Industry',469.286],['CO/KDL/2A','Gupta Timbertrader Private Limited',1409.617],['CO/KDL/2B','Bala Ji Timber',469.861],['CO/KDL/1B & CO/KDL/2C','ISPK Timber Private Limited',2021.763],['CO/KDL/1P & CO/KDL/2F','SHRI BAJRANG TIMBER TRADERS',869.444],['CO/KDL/2T','Lrb Wood Industry',199.897],['CO/KDL/2K','S. PODDAR INTERNATIONAL (INDIA) PRIVATE LIMITED',310.704]],
'MV ZHE HAI':[['ZH/KDL/2C','Gupta Timbertrader Private Limited',1716.604],['ZH/KDL/2G','Laxman Timbers Pvt Ltd.',449.981],['ZH/KDL/1R','Laxman Timbers Pvt Ltd.',516.195],['ZH/KDL/2A','Aggarwal and Company',520.407],['ZH/KDL/2E','Shyam Impex',614.421],['ZH/KDL/1C','Rangoli Wood Pvt. Ltd.',407.148]],
'MV DRAKE WELL — LATEST SHIPMENT':[['DW/KDL/1B','Bhagwati Lumbers Private Limited',328.571],['DW/KDL/1H','ASHOK AGGARWAL AND SONS',473.786],['DW/KDL/1L','Zircon Exports Private Limited',1515.997],['DW/KDL/2F','Zircon Exports Private Limited',793.990],['DW/KDL/1N','Shanker International Private Limited',1993.766],['DW/KDL/2H','Shanker International Private Limited',2040.933],['DW/KDL/1P','Tirupati Tradelinks Private Limited',1154.068],['DW/KDL/1Q','Tirupati Tradelinks Private Limited',1161.207],['DW/KDL/2J','Tirupati Timber Industries Pvt. Ltd.',1000.865],['DW/KDL/2K','Tirupati Timber Industries Pvt. Ltd.',538.815],['DW/KDL/1R','ISPK Timber Private Limited',320.052],['DW/KDL/2L','Inder Sen Pradeep Kumar',916.054],['DW/KDL/2M','ISPK Timber Private Limited',674.579],['DW/KDL/2C','SOFT WOOD PRODUCTS',848.009],['DW/KDL/1V','RAJKRIPAL EXIM PVT. LTD.',519.356]]
};
const drakeEucalyptusBLs=new Set(['DW/KDL/1AA','DW/KDL/1S','DW/KDL/1T','DW/KDL/1U','DW/KDL/1V','DW/KDL/1W','DW/KDL/1X','DW/KDL/1Y','DW/KDL/1Z','DW/KDL/2N']);

const dpaTimberSnapshot=[{"name":"African Peacock","cbm":36926,"origin":"Australia","cargo":"Pine logs","eta":"10-31 02:06","etb":"11-09"},{"name":"Enshi","cbm":33134,"origin":"Australia","cargo":"Pine logs","eta":"11-05 00:18","etb":"11-09"},{"name":"Drake Well","cbm":26112,"origin":"Argentina","cargo":"Pine logs","eta":"11-05 13:30","etb":"11-17"},{"name":"ML Egret","cbm":42886,"origin":"New Zealand","cargo":"Pine logs","eta":"11-06 15:00","etb":"11-18"},{"name":"Uni Blossom","cbm":34870,"origin":"Uruguay","cargo":"Pine logs","eta":"11-09 01:00","etb":"11-20"},{"name":"AG Varvara","cbm":39113,"origin":"Australia","cargo":"JAS pine logs","eta":"11-12 00:00","etb":"11-26"},{"name":"CD Glory","cbm":29158,"origin":"Malaysia","cargo":"Hardwood logs","eta":"11-15 12:00","etb":"11-28"},{"name":"Dariya Priya","cbm":44968,"origin":"New Zealand","cargo":"Pine logs","eta":"11-16 08:00","etb":"12-03"},{"name":"African Tiger","cbm":36328,"origin":"—","cargo":"Pine logs","eta":"11-18 00:00","etb":""},{"name":"Paiwan Ace","cbm":null,"origin":"Uruguay","cargo":"Pine logs","eta":"11-21 21:00","etb":"12-05"},{"name":"Erna Oldendorff","cbm":null,"origin":"Australia","cargo":"Pine logs","eta":"11-23 15:00","etb":"12-10"},{"name":"African Pheasant","cbm":null,"origin":"New Zealand","cargo":"Logs","eta":"11-23 16:30","etb":"12-12"},{"name":"Paiwan Wisdom","cbm":null,"origin":"USA","cargo":"Logs","eta":"11-26","etb":"12-20"}];
// Preserve every saved call when merging later Timber board updates.
const dpaArrivalArchive=[{"name":"African Peacock","arrival":"2026-10-31 02:06","status":"Completed"},{"name":"Enshi","arrival":"2026-11-05 00:18","status":"Completed"},{"name":"Drake Well","arrival":"2026-11-05 15:00","status":"Completed"},{"name":"ML Egret","arrival":"2026-11-06 14:24","status":"At berth"},{"name":"Uni Blossom","arrival":"2026-11-09 11:36","status":"Waiting"},{"name":"AG Varvara","arrival":"2026-11-12 07:06","status":"Waiting"},{"name":"CD Glory","arrival":"2026-11-15 06:42","status":"Waiting"},{"name":"Dariya Priya","arrival":"2026-11-16 09:00","status":"Waiting"},{"name":"African Tiger","arrival":"2026-11-18 06:30","status":"Waiting"},{"name":"Lanna Naree","arrival":"2026-10-27 12:54","status":"Completed","cbm":29222,"origin":"Malaysia","cargo":"Hardwood logs"},{"name":"African Quail","arrival":"2026-10-27 00:15","status":"Completed","cbm":34758,"origin":"Argentina","cargo":"Pine logs"},{"name":"Centurion Buyo","arrival":"","status":"Completed","cbm":29852,"origin":"","cargo":"Pine logs"},{"name":"AC Kathryn","arrival":"","status":"Completed","cbm":29068,"origin":"Australia","cargo":"JAS logs"}];
function monthlyTimberRows(rows){
  const groups=new Map();
  for(const [record,cells] of rows){
    const key=record.month;
    if(!groups.has(key))groups.set(key,[]);
    groups.get(key).push(cells);
  }
  const monthName=key=>new Intl.DateTimeFormat('en-GB',{month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(key+'-01T00:00:00Z'));
  const headings=['Vessel','Source / supplier','Origin','Cargo','Arrival / ETA','Status','IGM'];
  const labels={expected:'Expected vessels',undated:'Arrival date unavailable',manual:'Manual entries'};
  return [...groups.keys()].sort((a,b)=>b.localeCompare(a)).sort((a,b)=>Number(a in labels)-Number(b in labels)).map(key=>{
    const entries=groups.get(key);
    const label=(labels[key]||monthName(key))+' · '+entries.length+(key in labels?' vessels':' arrivals');
    return '<tr><td><details><summary>'+esc(label)+'</summary><div class="tablewrap"><table><thead><tr>'+
      headings.map(heading=>'<th>'+heading+'</th>').join('')+'</tr></thead><tbody>'+
      entries.map(cells=>'<tr>'+cells.map((cell,index)=>'<td>'+(index===6?cell:esc(cell??'—'))+'</td>').join('')+'</tr>').join('')+
      '</tbody></table></div></details></td></tr>';
  }).join('');
}
function renderTimberArrivals(){
  const igm=name=>`<button data-igm="${esc(name)}">View IGM</button>`;
  const source='DPA timber board';
  const boardRows=dpaArrivalArchive.map(call=>{
    const snapshot=dpaTimberSnapshot.find(entry=>entry.name===call.name);
    const quantity=call.cbm??snapshot?.cbm;
    const cargo=(call.cargo??snapshot?.cargo??'Logs')+(quantity?' · '+quantity.toLocaleString('en-US')+' CBM':'');
    return [{month:call.arrival?call.arrival.slice(0,7):'undated'},[call.name,source,call.origin??snapshot?.origin,cargo,call.arrival||'—',call.status,igm(call.name)]];
  });
  const expected=dpaTimberSnapshot.filter(entry=>!dpaArrivalArchive.some(call=>call.name===entry.name)).map(entry=>
    [{month:'expected'},[entry.name,source,entry.origin,entry.cargo,entry.eta+' (2026)',entry.etb?'Expected · ETB '+entry.etb:'Expected',igm(entry.name)]]);
  const manual=db.other.map(entry=>[{month:'manual'},[entry.name,entry.supplier,'—',entry.cargo,entry.eta,entry.status,igm(entry.name)]]);
  const search=$('#search').value.trim().toLowerCase();
  const rows=[...boardRows,...expected,...manual].filter(([record,cells])=>[record.month,...cells.slice(0,6)].join(' ').toLowerCase().includes(search));
  $('thead').innerHTML='<tr><th>Kandla timber arrivals by month</th></tr>';
  $('tbody').innerHTML=monthlyTimberRows(rows)||'<tr><td>No matching vessels.</td></tr>';
  $('#tableNote').textContent='Arrivals are grouped by reported Kandla arrival date. Latest archive source: DPA Timber board, 20 Nov 2026. Historical coverage depends on available arrival records.';
}

const $=s=>document.querySelector(s),money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:2}).format(n),today=new Date().toISOString().slice(0,10),day=s=>Date.parse(s+'T00:00:00Z')/86400000,esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const demo={demo:true,vessels:[{id:'v1',name:'MV Forest Pioneer',origin:'Gabon',eta:'2026-11-24',status:'In transit'},{id:'v2',name:'MV Atlantic Cedar',origin:'Cameroon',eta:'2026-11-08',status:'Discharged'}],stock:[{id:'t1',species:'Okoume',vessel:'v1',volume:1250,cost:420},{id:'t2',species:'Azobe',vessel:'v2',volume:840,cost:680},{id:'t3',species:'Padouk',vessel:'v2',volume:560,cost:760}],sales:[{id:'s1',customer:'Northwood Industries',stock:'t2',volume:180,price:890,date:'2026-10-01',due:'2026-10-31'},{id:'s2',customer:'Harbor Timber Co.',stock:'t3',volume:120,price:980,date:'2026-10-15',due:'2026-11-14'},{id:'s3',customer:'Evergreen Trading',stock:'t1',volume:250,price:560,date:'2026-11-02',due:'2026-12-02'}],payments:[{id:'p1',sale:'s1',amount:60000,date:'2026-11-05',reference:'Bank transfer 001'},{id:'p2',sale:'s2',amount:40000,date:'2026-11-10',reference:'Bank transfer 002'}]};
let db;const emptyData=()=>({demo:false,vessels:[],stock:[],sales:[],payments:[],igm:[],other:[]});try{db=JSON.parse(localStorage.getItem('spoddar-v1'))||emptyData()}catch{db=emptyData()}if(!db||typeof db!=='object')db=emptyData();for(const key of ['vessels','stock','sales','payments','igm','other'])if(!Array.isArray(db[key]))db[key]=[];const dummyIds=new Set(db.vessels.filter(v=>['MV Forest Pioneer','MV Atlantic Cedar'].includes(v.name)).map(v=>v.id));if(dummyIds.size){const dummyStockIds=new Set(db.stock.filter(t=>dummyIds.has(t.vessel)).map(t=>t.id));const dummySaleIds=new Set(db.sales.filter(x=>dummyStockIds.has(x.stock)).map(x=>x.id));db.vessels=db.vessels.filter(v=>!dummyIds.has(v.id));db.stock=db.stock.filter(t=>!dummyStockIds.has(t.id));db.sales=db.sales.filter(x=>!dummySaleIds.has(x.id));db.payments=db.payments.filter(p=>!dummySaleIds.has(p.sale));db.igm=db.igm.filter(x=>!dummyIds.has(x.vessel));try{localStorage.setItem('spoddar-v1',JSON.stringify(db))}catch{}}db.demo=false;let view='vessels',editing=null;$('#asof').value=today;
function save(){try{localStorage.setItem('spoddar-v1',JSON.stringify(db))}catch{alert('Storage unavailable. Export a backup before leaving.')}render()}
function financial(s,asof=$('#asof').value){const total=s.volume*s.price,cut=day(asof),start=day(s.due);let balance=total,cost=0,last=start;const payments=db.payments.filter(p=>p.sale===s.id&&day(p.date)<=cut).sort((a,b)=>a.date.localeCompare(b.date));for(const p of payments){const d=day(p.date);if(d>start){cost+=balance*.09*Math.max(0,d-last)/365;last=d}balance=Math.max(0,balance-p.amount)}cost+=balance*.09*Math.max(0,cut-Math.max(start,last))/365;return{total,balance,cost,overdue:balance>0?Math.max(0,cut-start):0}}
const names={vessels:'Current vessels',buyers:'Buyers list',finance:'Finance',other:'Other Supplier Vessels',containers:'Containers'},icons=['♙','▦','▣','◉','＄'];
function available(id,exclude){return db.stock.find(t=>t.id===id).volume-db.sales.filter(s=>s.stock===id&&s.id!==exclude).reduce((a,s)=>a+s.volume,0)}

let cloudLedger=null;
let cloudError='';
let cloudLoading=false;
let cloudShipment='';
const cloudViews=new Set(['buyers','vessels']);
const cloudQty=n=>Number(n||0).toLocaleString('en-US',{minimumFractionDigits:3,maximumFractionDigits:3});
const cloudName=v=>String(v||'').trim().toUpperCase();
async function fetchCloudRows(client,table,columns){
  const all=[];
  const pageSize=500;
  for(let from=0;;from+=pageSize){
    const {data,error}=await client.from(table).select(columns).order('id').range(from,from+pageSize-1);
    if(error)throw error;
    all.push(...data);
    if(data.length<pageSize)return all;
  }
}
async function refreshCloudLedger(){
  if(cloudLoading)return;
  cloudLoading=true;
  try{
    const auth=window.SPODDAR_AUTH;
    const identity=await auth.getIdentity();
    if(identity.role!=='owner')throw Error('Owner access required');
    const [vessels,buyers,sales,payments]=await Promise.all([
      fetchCloudRows(auth.client,'vessels','id,vessel_name,arrival_date,discharge_completed_at,total_cbm'),
      fetchCloudRows(auth.client,'buyers','id,buyer_name'),
      fetchCloudRows(auth.client,'vessel_sales','id,vessel_id,buyer_id,invoice_number,bl_number,sale_cbm,sale_rate_usd,invoice_amount_usd,payment_terms,due_date,acceptance_date,historical_paid'),
      fetchCloudRows(auth.client,'vessel_sale_payments','id,sale_id,payment_date,amount_received_usd')
    ]);
    const buyerNames=new Map(buyers.map(b=>[b.id,b.buyer_name]));
    const vesselNames=new Map(vessels.map(v=>[v.id,v]));
    const receipts=new Map();
    for(const p of payments){
      const list=receipts.get(p.sale_id)||[];
      list.push(p);
      receipts.set(p.sale_id,list);
    }
    const entries=sales.map(s=>({...s,buyer:buyerNames.get(s.buyer_id)||'—',vessel:vesselNames.get(s.vessel_id)?.vessel_name||'—',arrival:vesselNames.get(s.vessel_id)?.arrival_date,receipts:receipts.get(s.id)||[]}));
    cloudLedger={vessels,entries};
    cloudError='';
  }catch(error){cloudError=error.message||'Cloud records unavailable';}
  finally{
    cloudLoading=false;
    if(cloudViews.has(view))render();
  }
}
function estimatedDaAcceptance(s,arrival,receipts){
  if(String(s.payment_terms||'').trim().toUpperCase()!=='DA'||s.acceptance_date||receipts.length||!arrival)return null;
  const date=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(arrival));
  return {due:date,end:new Date((day(date)+5)*86400000).toISOString().slice(0,10)};
}
function buyerInvoiceDelayCost(s,asOf){
  const estimate=estimatedDaAcceptance(s,s.arrival,s.receipts);
  if(estimate){
    const days=Math.max(0,Math.min(5,day(asOf)-day(estimate.due)));
    return Number(s.invoice_amount_usd??Number(s.sale_cbm)*Number(s.sale_rate_usd))*days*.09/365;
  }
  if(s.historical_paid)return 0;
  if(!s.due_date)return null;
  const isLc=/\bLC\b|LETTER OF CREDIT/.test(String(s.payment_terms||'').toUpperCase());
  const cutoff=!isLc&&s.acceptance_date&&s.acceptance_date<asOf?s.acceptance_date:asOf;
  const receipts=s.receipts.filter(p=>p.payment_date<=cutoff).sort((a,b)=>a.payment_date.localeCompare(b.payment_date));
  let balance=Number(s.invoice_amount_usd??Number(s.sale_cbm)*Number(s.sale_rate_usd));
  let last=day(s.due_date),cost=0;
  for(const payment of receipts){
    if(payment.payment_date>s.due_date){
      const paidOn=day(payment.payment_date);
      cost+=Math.max(0,balance)*.09*Math.max(0,paidOn-last)/365;
      last=paidOn;
    }
    balance-=Number(payment.amount_received_usd);
  }
  return cost+Math.max(0,balance)*.09*Math.max(0,day(cutoff)-last)/365;
}
function delayCostTotal(costs){
  return costs.every(cost=>cost===null)?'—':money(costs.reduce((total,cost)=>total+(cost??0),0));
}
function buyerVesselDelayDetails(entries,delayCosts,asOf){
  const shipments=new Map();
  entries.forEach((invoice,index)=>{
    if(!shipments.has(invoice.vessel_id))shipments.set(invoice.vessel_id,{invoices:[],costs:[]});
    const shipment=shipments.get(invoice.vessel_id);
    shipment.invoices.push(invoice);
    shipment.costs.push(delayCosts[index]);
  });
  const rows=[...shipments.values()].sort((a,b)=>a.invoices[0].vessel.localeCompare(b.invoices[0].vessel));
  return '<details><summary aria-label="Vessel-wise delay cost for '+esc(entries[0].buyer)+': '+delayCostTotal(delayCosts)+'">'+delayCostTotal(delayCosts)+'</summary>'+
    '<div class="tablewrap"><table><thead><tr><th>Vessel</th><th>9% delay cost (USD)</th></tr></thead><tbody>'+
    rows.map(({invoices,costs})=>'<tr><td><details><summary>'+esc(invoices[0].vessel)+'</summary>'+cloudInvoiceTable(invoices,asOf)+'</details></td><td>'+delayCostTotal(costs)+'</td></tr>').join('')+
    '</tbody></table></div></details>';
}
function cloudInvoiceTable(entries,delayAsOf=null){
  if(!entries.length)return '<p>No cloud invoices recorded for this shipment.</p>';
  const headers=['Buyer','Shipment','BL','Invoice','CBM','Invoice USD','Terms','Due date','Acceptance','Payment status','Recorded receipts'];
  if(delayAsOf)headers.push('9% delay cost (USD)');
  return '<div class="tablewrap"><table><thead><tr>'+headers.map(h=>'<th>'+h+'</th>').join('')+'</tr></thead><tbody>'+entries.map(s=>{
    const invoice=Number(s.invoice_amount_usd??Number(s.sale_cbm)*Number(s.sale_rate_usd));
    const actual=s.receipts.filter(p=>p.payment_date<=today);
    const received=actual.reduce((sum,p)=>sum+Number(p.amount_received_usd),0);
    const status=s.historical_paid||received>=invoice?'Paid':received>0?'Part paid':s.acceptance_date?'Accepted':'Acceptance pending';
    const receipts=actual.map(p=>p.payment_date+' · '+money(Number(p.amount_received_usd))).join(', ');
    const cells=[s.buyer,s.vessel,s.bl_number||'—',s.invoice_number||'—',cloudQty(s.sale_cbm),money(invoice),s.payment_terms||'—',s.due_date||'—',s.acceptance_date||(estimatedDaAcceptance(s,s.arrival,s.receipts)?.end?estimatedDaAcceptance(s,s.arrival,s.receipts).end+' (estimated DA)':'—'),status,receipts||'—'];
    if(delayAsOf){const cost=buyerInvoiceDelayCost(s,delayAsOf);cells.push(cost===null?'—':money(cost));}
    return '<tr>'+cells.map(x=>'<td>'+esc(x)+'</td>').join('')+'</tr>';
  }).join('')+'</tbody></table></div>';
}
const kandlaDate=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'});
const kandlaTime=new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Kolkata',dateStyle:'medium',timeStyle:'short',hourCycle:'h23'});
function renderLaytime(vessel){
  const rate=3500,freeHours=12,demurrageRate=20000,despatchRate=10000;
  const cargo=Number(vessel.total_cbm);
  const elapsed=(Date.parse(vessel.discharge_completed_at)-Date.parse(vessel.arrival_date))/86400000;
  const heading='<details class="laytime-details"><summary>Laytime, Demurrage &amp; Despatch</summary>';
  if(!Number.isFinite(elapsed)||elapsed<0||!(cargo>0))return heading+'<p>Calculation requires cargo volume and valid arrival and discharge completion times.</p></details>';
  const allowed=cargo/rate+freeHours/24;
  const difference=elapsed-allowed;
  const rows=[
    ['Kandla arrival',kandlaTime.format(new Date(vessel.arrival_date))+' IST'],
    ['Discharge completed',kandlaTime.format(new Date(vessel.discharge_completed_at))+' IST'],
    ['Cargo',cloudQty(cargo)+' CBM'],
    ['Unloading rate','3,500 CBM/day'],
    ['Free time','12 hours'],
    ['Elapsed time',elapsed.toFixed(4)+' days'],
    ['Allowed laytime',allowed.toFixed(4)+' days'],
    ['Overtime',Math.max(0,difference).toFixed(4)+' days'],
    ['Time saved',Math.max(0,-difference).toFixed(4)+' days'],
    ['Demurrage · USD 20,000/day',money(Math.max(0,difference)*demurrageRate)],
    ['Despatch · USD 10,000/day',money(Math.max(0,-difference)*despatchRate)]
  ];
  return heading+'<div class="tablewrap"><table><tbody>'+rows.map(([label,value])=>'<tr><th scope="row">'+esc(label)+'</th><td>'+esc(value)+'</td></tr>').join('')+'</tbody></table></div><p>Estimate based on continuous elapsed time, prorated by the day.</p></details>';
}
function renderDrakeAllocation(vesselName){
  const v=poddarOwnVessels[0];
  if(cloudName(vesselName)!==cloudName(v.name))return '';
  return '<details><summary>Drake Well cargo allocation and buyer complaints · '+v.pieces.toLocaleString()+' pieces</summary><div class="tablewrap"><table><thead><tr><th>BL No.</th><th>Lot No.</th><th>Buyer</th><th>Product</th><th>Pieces</th><th>CBM</th></tr></thead><tbody>'+v.entries.map(x=>'<tr>'+x.slice(0,3).map(y=>'<td>'+esc(y)+'</td>').join('')+'<td><strong>'+(drakeEucalyptusBLs.has(x[0])?'Eucalyptus Logs':'Pine Logs')+'</strong></td>'+x.slice(3).map(y=>'<td>'+esc(y)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div><section class="complaints-section"><h3>Buyer Complaints — MV DRAKE WELL</h3><table><thead><tr><th>Buyer</th><th>BL No.</th><th>Product</th><th>Complaint</th><th>Status</th></tr></thead><tbody><tr><td>SIPL Plywood Pvt. Ltd.</td><td>DW/KDL/1AA, DW/KDL/2N</td><td>Eucalyptus Logs</td><td>Buyer reported that the quality of this shipment is slightly poor and the logs have more cracks than expected.</td><td>Reported — review pending</td></tr></tbody></table><p>Buyer feedback recorded; no inspection findings or claim amount provided.</p></section></details>';
}
const shipmentRegister=new Map([
  ["MV CHINTANA NAREE",{"order":0,"pieces":113889,"company":"SURBHI","cargo":33263.717}],
  ["MV CORESKY",{"order":1,"pieces":123466,"company":"SURBHI"}],
  ["MV ZHE HAI",{"order":2,"pieces":102720,"company":"SURBHI"}],
  ["MV LIGNUM WEB",{"order":3,"pieces":130534,"company":"SURBHI"}],
  ["MV RUBY CONFIDENCE",{"order":4,"pieces":113650,"company":"SURBHI"}],
  ["MV PAIWAN ACE",{"order":5,"pieces":128627,"company":"SURBHI"}],
  ["MV LIGNUM WEB — SECOND SHIPMENT",{"order":6,"pieces":140795,"company":"SURBHI","cargo":38741.383,"label":"MV LIGNUM GRID"}],
  ["MV AFRICAN MERLIN",{"order":7,"pieces":115224,"company":"SURBHI"}],
  ["MV LOWLANDS CORSO",{"order":8,"pieces":124757,"company":"SURBHI"}],
  ["MV SUNNY HONG",{"order":9,"pieces":112029,"company":"SURBHI"}],
  ["MV PAIWAN ACE — SECOND SHIPMENT",{"order":10,"pieces":118568,"company":"SURBHI"}],
  ["MV ALLEGRA",{"order":11,"pieces":127325,"company":"SURBHI"}],
  ["MV BUNUN RESPECT",{"order":12,"pieces":134240,"company":"SURBHI"}],
  ["MV BILLION STAR",{"order":13,"pieces":105046,"company":"SURBHI"}],
  ["MV AFRICAN PIPER",{"order":14,"pieces":121396,"company":"SURBHI"}],
  ["MV FIORA TOPIC",{"order":15,"pieces":102164,"company":"SURBHI"}],
  ["MV ALBERTO TOPIC",{"order":16,"pieces":100259,"company":"SURBHI"}],
  ["MV DRAKE WELL — EARLIER SHIPMENT",{"order":17,"pieces":94574,"company":"S PODDAR"}],
  ["MV KIBO",{"order":18,"pieces":108129,"company":"S PODDAR"}],
  ["MV AFRICAN QUAIL",{"order":19,"pieces":100095,"company":"S PODDAR"}],
  ["MV DRAKE WELL — LATEST SHIPMENT",{"order":20,"pieces":82520,"company":"S PODDAR"}]
]);
function renderCloudLedger(){
  const q=$('#search').value.trim().toLowerCase();
  $('#add').style.display=view==='vessels'?'':'none';
  if(view==='vessels')$('#add').textContent='+ Add vessel';
  $('#dataStatus').textContent=cloudLoading?'● Refreshing cloud shipment records':cloudError?'● Cloud refresh failed':'● LIVE CLOUD SHIPMENT RECORDS';
  $('#dataStatus').title=cloudError;
  const grouped=new Map();
  if(view==='buyers'){
    const delayAsOf=kandlaDate.format(new Date());
    for(const s of cloudLedger.entries){
      const key=cloudName(s.buyer).replace(/\bPRIVATE\b/g,'PVT').replace(/\bLIMITED\b/g,'LTD').replace(/[^A-Z0-9]/g,'')||s.buyer_id;
      if(!grouped.has(key))grouped.set(key,[]);
      grouped.get(key).push(s);
    }
    $('#tableTitle').textContent='Buyers list · cumulative CBM';
    $('thead').innerHTML='<tr><th>Buyer</th><th>Purchased CBM</th><th>Shipments</th><th>Invoice / BL entries</th><th>Cumulative 9% Delay Cost (USD)</th></tr>';
    const rows=[...grouped.values()].map(entries=>({entries,total:entries.reduce((n,s)=>n+Number(s.sale_cbm),0),delayCosts:entries.map(s=>buyerInvoiceDelayCost(s,delayAsOf))})).sort((a,b)=>b.total-a.total);
    $('tbody').innerHTML=rows.filter(({entries})=>entries.some(s=>[s.buyer,s.vessel,s.bl_number,s.invoice_number].some(x=>String(x||'').toLowerCase().includes(q)))).map(({entries,total,delayCosts})=>'<tr><td><details><summary>'+esc(entries[0].buyer)+'</summary>'+cloudInvoiceTable(entries,delayAsOf)+'</details></td><td>'+cloudQty(total)+'</td><td>'+new Set(entries.map(s=>s.vessel_id)).size+'</td><td>'+entries.length+'</td><td>'+buyerVesselDelayDetails(entries,delayCosts,delayAsOf)+'</td></tr>').join('')||'<tr><td colspan="5">No matching buyers.</td></tr>';
    $('#tableNote').textContent=cloudLedger.entries.length+' cloud invoice / BL entries. Delay cost uses the Finance rules through '+delayAsOf+' (IST). Invoices without a due date are excluded. Select a cumulative delay cost for vessel-wise details. Expand a vessel or buyer for invoice-level costs.';
    return;
  }
  for(const s of cloudLedger.entries){
    if(!grouped.has(s.vessel_id))grouped.set(s.vessel_id,[]);
    grouped.get(s.vessel_id).push(s);
  }
  $('#tableTitle').textContent='All vessels · cloud shipments and local operations';
  $('thead').innerHTML='<tr><th>Vessel</th><th>Arrival</th><th>PCS</th><th>Cargo CBM</th><th>Invoice CBM</th><th>Company</th><th>Details</th></tr>';
  const vessels=[...cloudLedger.vessels];
  if(!vessels.some(v=>cloudName(v.vessel_name)==='MV CHINTANA NAREE')){
    vessels.push({vessel_name:'MV CHINTANA NAREE',total_cbm:shipmentRegister.get('MV CHINTANA NAREE').cargo});
  }
  const rank=v=>shipmentRegister.get(cloudName(v.vessel_name))?.order??Infinity;
  vessels.sort((a,b)=>(rank(b)-rank(a))||String(b.arrival_date||'').localeCompare(String(a.arrival_date||''))||a.vessel_name.localeCompare(b.vessel_name));
  const cloudRows=vessels.flatMap(v=>{
    const entries=grouped.get(v.id)||[];
    const register=shipmentRegister.get(cloudName(v.vessel_name));
    const label=register?.label||v.vessel_name;
    const matches=[label,v.vessel_name,...entries.flatMap(s=>[s.buyer,s.bl_number,s.invoice_number])].some(x=>String(x||'').toLowerCase().includes(q));
    if(!matches)return [];
    const details=v.id?'<button data-cloud-shipment="'+esc(v.id)+'">View Details</button>':'PDF pending';
    const values=[label,v.arrival_date?kandlaDate.format(new Date(v.arrival_date)):'—',register?.pieces?.toLocaleString('en-US')||'—',v.total_cbm==null?'—':cloudQty(v.total_cbm),v.id?cloudQty(entries.reduce((n,s)=>n+Number(s.sale_cbm),0)):'—',register?.company||'—'];
    return '<tr>'+values.map(x=>'<td>'+esc(x)+'</td>').join('')+'<td>'+details+'</td></tr>';
  });
  const localRows=db.vessels.filter(v=>v.name.toLowerCase().includes(q)).map(v=>'<tr><td>'+esc(v.name)+' <small>· Local operations</small></td><td>'+esc(v.eta||'—')+'</td><td>—</td><td>—</td><td>—</td><td>—</td><td><button data-edit="'+esc(v.id)+'">Edit details</button></td></tr>');
  $('tbody').innerHTML=[...cloudRows,...localRows].join('')||'<tr><td colspan="7">No matching vessels.</td></tr>';
  const chosen=cloudLedger.vessels.find(v=>v.id===cloudShipment);
  $('#tableNote').innerHTML=chosen?'<strong>'+esc(shipmentRegister.get(cloudName(chosen.vessel_name))?.label||chosen.vessel_name)+'</strong>'+renderLaytime(chosen)+renderDrakeAllocation(chosen.vessel_name)+cloudInvoiceTable(grouped.get(chosen.id)||[]):'Select View Details to see buyer, invoice and payment details.';
}
function render(){document.querySelector('nav').innerHTML=Object.keys(names).map((k,i)=>`<button data-view="${k}" class="${view===k?'active':''}"><span>${icons[i]}</span>${k==='overview'?'Overview':k[0].toUpperCase()+k.slice(1)}</button>`).join('');$('#title').textContent=names[view];$('#crumb').textContent=view.toUpperCase();$('#dataStatus').textContent=db.demo?'● DEMO DATA · Saved in this browser':'● YOUR RECORDS · Saved in this browser';const sales=db.sales.filter(s=>s.date<=$('#asof').value),fs=sales.map(s=>financial(s)),sum=k=>fs.reduce((a,f)=>a+f[k],0),stockValue=db.stock.reduce((a,t)=>a+available(t.id)*t.cost,0);$('#metrics').style.display='none';$('#metrics').innerHTML=[['Stock value',money(stockValue),'Current unsold inventory · at cost'],['Sales value',money(sum('total')),'Invoices through selected date'],['Outstanding',money(sum('balance')),'Unpaid principal · through selected date'],['Financial cost',money(sum('cost')),'9% p.a. · overdue principal · ACT/365']].map(x=>`<div class="metric"><div class="label">${x[0]}</div><strong>${x[1]}</strong><small>${x[2]}</small></div>`).join('');$('#overview').innerHTML=view==='overview'?`<div class="overviewgrid"><div class="panel"><span class="eyebrow">INVENTORY MIX</span><h2>Timber on hand</h2>${db.stock.map(t=>`<div class="barrow"><span>${esc(t.species)}</span><b>${available(t.id).toLocaleString()} m³</b></div><div class="bar"><i style="width:${Math.min(100,available(t.id)/Math.max(1,...db.stock.map(x=>available(x.id)))*100)}%"></i></div>`).join('')||'<p>No stock yet. Add your first lot.</p>'}</div><div class="panel"><span class="eyebrow">COLLECTIONS WATCH</span><h2>${fs.filter(f=>f.overdue>0).length} overdue invoices</h2><div class="callout">${money(fs.filter(f=>f.overdue>0).reduce((a,f)=>a+f.balance,0))} overdue principal<br>${Math.max(0,...fs.map(f=>f.overdue))} days · oldest unpaid invoice</div><p>Use Sales to record invoices and Payments to track collections.</p></div></div>`:'';
const financeFrame=$('#secureFinanceFrame');
const recordsPanel=$('#recordsPanel');
if(view==='finance'&&financeFrame&&recordsPanel){
  recordsPanel.hidden=true;
  financeFrame.hidden=false;
  if(!financeFrame.getAttribute('src'))financeFrame.src='finance-preview.html';
  $('#dataStatus').textContent='● LIVE CLOUD FINANCE';
  return;
}
if(recordsPanel)recordsPanel.hidden=false;
if(financeFrame)financeFrame.hidden=true;
if(cloudViews.has(view)&&cloudLedger){renderCloudLedger();return;}
if(cloudViews.has(view)&&cloudError){
  $('#dataStatus').textContent='● Cloud records unavailable · historical or local records shown';
  $('#dataStatus').title=cloudError;
}
const kind=view==='finance'?'sales':view==='overview'?'sales':view;$('#tableTitle').textContent=names[view]||names[kind];$('#add').style.display=['buyers','delayed','finance'].includes(view)?'none':'';$('#add').textContent='+ Add '+({vessels:'vessel',stock:'stock lot',sales:'sale',payments:'payment',igm:'IGM entry',other:'other supplier vessel'}[kind]||'record');let heads,rows;if(kind==='containers'){const shipments=[["ONEYRICGF0187600","MV ONE MAGNIFICENCE",15,415.08,"Shyam Commex"],["ONEYRICGF0198800","SAN FRANCISCO BRIDGE",11,310.142,"House of Trading"],["ONEYRICGN7362700","ONE MAXIM",11,306.171,"Rudraksh Lumber"],["RICGS3450600","ONE MARVEL",14,378.94,"RUDRAKSH"],["OOLU2333374840","CMA CGM CONGO",9,245.753,"SHYAMDECOR"],["OOLU2333375000","CMA CGM GANGES",14,380.55,"Rudraksh Lumber"],["OOLU2333375001","APL ANTWERP",5,132.274,"Rudraksh Lumber"],["MEDUADDB51834","MSC AGAMEMNON VIII",9,245.525,"Tirupati timber"],["","MV CONTI MAKALU",17,459.263,"Tirupati Timber"],["","MV CAP ANDREAS",10,278.263,"House of Trading"],["","MV CAP ANDREAS",13,364.632,"Zircon Export"],["","MV CAP ANDREAS",12,331.304,"ISPK"]];$('#tableTitle').textContent='Container shipments · SYP Logs';$('#add').style.display='none';const chosen=window.sypSelected;const fmt=n=>Number(n).toLocaleString('en-US',{maximumFractionDigits:3});$('thead').innerHTML='<tr><th>Vessel / BL</th><th>Containers</th><th>Quantity (MT)</th><th>Buyer</th></tr>';$('tbody').innerHTML=shipments.map((x,i)=>'<tr><td><button data-syp="'+i+'">'+x[1]+'</button><div style="font-size:12px">'+x[0]+'</div></td><td>'+x[2]+'</td><td>'+fmt(x[3])+'</td><td>'+x[4]+'</td></tr>').join('');$('#tableNote').innerHTML='<strong>Historical SYP:</strong> 12 shipment entries · 140 containers · 3,847.897 MT · All 140 containers fully paid · Outstanding $0. Click a vessel to view shipment details.<br><strong>Africa Logs:</strong> No shipments entered yet.'+(chosen!==undefined&&shipments[chosen]?'<div style="margin-top:16px;padding:16px;border:1px solid #aaa;border-radius:8px"><strong>'+shipments[chosen][1]+'</strong><p>BL Number: '+(shipments[chosen][0]||'Not supplied')+'<br>Containers: '+shipments[chosen][2]+'<br>Quantity: '+fmt(shipments[chosen][3])+' MT<br>Buyer: '+shipments[chosen][4]+'<br>Payment: '+'Fully paid · Outstanding $0'+'</p><p>Financial rates, sale amounts and margins require owner/accounts authentication before being published on this website.</p></div>':'');return;}const find=(a,id,k)=>db[a].find(x=>x.id===id)?.[k]||'—';if(view==='vessels'){const history=[['MV CORESKY','2 coresky.pdf'],['MV ZHE HAI','3 zhe hai.pdf'],['MV LIGNUM WEB','4 lignum web.pdf'],['MV RUBY CONFIDENCE','5 Ruby Confidence.pdf'],['MV PAIWAN ACE','6 paiwan ace.pdf'],['MV LIGNUM WEB — SECOND SHIPMENT','7 lignum web.pdf'],['MV AFRICAN MERLIN','african web.pdf'],['MV LOWLANDS CORSO','9 Lowmand Corsow.pdf'],['MV SUNNY HONG','10 sunny hong.pdf'],['MV PAIWAN ACE — SECOND SHIPMENT','11 paiwan ace.pdf'],['MV ALLEGRA','12 allegra.pdf'],['MV BUNUN RESPECT','13 bunun respaect.pdf'],['MV BILLION STAR','14 billion star.pdf'],['MV AFRICAN PIPER','15 African Piper.pdf'],['MV FIORA TOPIC','16 fiora topic.pdf'],['MV ALBERTO TOPIC','17 alberto topic.pdf'],['MV DRAKE WELL — EARLIER SHIPMENT','sp 1 drake well.pdf'],['MV KIBO','sp 2 kibo.pdf'],['MV AFRICAN QUAIL','sp 3 african.pdf'],['MV DRAKE WELL — LATEST SHIPMENT','SP 4 drake well.pdf']];const q=$('#search').value.toLowerCase();$('#tableTitle').textContent='All vessels · current list and shipment history';$('#add').style.display='';$('thead').innerHTML='<tr><th>Vessel</th><th>Section</th><th>Information</th></tr>';$('tbody').innerHTML=[...db.vessels.map(v=>'<tr><td>'+esc(v.name)+'</td><td>Current vessel</td><td><button data-edit="'+esc(v.id)+'">Edit details</button></td></tr>'),...history.filter(x=>x[0].toLowerCase().includes(q)).map((x,i)=>'<tr><td>'+esc(x[0])+'</td><td>Historical shipment</td><td><button data-history="'+esc(x[0])+'">View Details</button></td></tr>')].join('');const h=history.find(x=>x[0]===window.historySelected);const shipmentKeys=['Core Sky','Zhe Hai','Lignum Web — 1','Ruby Confidence','Paiwan Ace — 1','Lignum Web — 2','African Merlin','Lowlands Corso','Sunny Hong','Paiwan Ace — 2','Allegra','Bunun Respect','Billion Star','African Piper','Fiora Topic','Alberto Topic','Drake Well — 1','Kibo','African Quail','Drake Well — 2'];const shipmentIndex=h?history.indexOf(h):-1;const fullEntries=h&&publishedBuyerAllocations?publishedBuyerAllocations.filter(x=>x.vessel===shipmentKeys[shipmentIndex]):null;const entries=fullEntries||((h&&historicalBuyerDetails[h[0]])||[]).map(x=>({bl:x[0],buyer:x[1],cbm:x[2]}));const fmtCBM=n=>Number(n).toLocaleString('en-US',{minimumFractionDigits:3,maximumFractionDigits:3});$('#tableNote').innerHTML=h?'<strong>'+esc(h[0])+'</strong><p>Source: '+esc(h[1])+'.</p>'+(entries.length?'<p><strong>'+entries.length+' buyer / BL entries · '+fmtCBM(entries.reduce((sum,x)=>sum+Number(x.cbm),0))+' CBM</strong></p><div class="tablewrap"><table><thead><tr><th>BL Number</th><th>Buyer Name</th><th>CBM</th></tr></thead><tbody>'+entries.map(x=>'<tr><td>'+esc(x.bl)+'</td><td>'+esc(x.buyer)+'</td><td>'+fmtCBM(x.cbm)+'</td></tr>').join('')+'</tbody></table></div>':'<p>Buyer-wise allocations are loading or unavailable.</p>')+(fullEntries?'':'<p>Complete shipment data is loading; partial entries may be shown temporarily.</p>')+'<p>No financial data is publicly displayed.</p>':'Select View Details to see all buyer and BL allocations for a shipment. Repeated vessel names are separate shipments.';return;}if(view==='finance'){const vessels=db.vessels;const chosen=window.financeSelected;$('#tableTitle').textContent='Vessel-wise Finance';$('#add').style.display='none';$('thead').innerHTML='<tr><th>Vessel</th><th>Origin</th><th>Buyers</th><th>Details</th></tr>';$('tbody').innerHTML=vessels.filter(v=>v.name.toLowerCase().includes($('#search').value.toLowerCase())).map(v=>{const ids=new Set(db.stock.filter(t=>t.vessel===v.id).map(t=>t.id));const sales=db.sales.filter(x=>ids.has(x.stock));return '<tr><td>'+esc(v.name)+'</td><td>'+esc(v.origin)+'</td><td>'+new Set(sales.map(x=>x.customer)).size+'</td><td><button data-finance-vessel="'+esc(v.id)+'">View Details</button></td></tr>'}).join('')||'<tr><td colspan="4">No vessels found.</td></tr>';const v=vessels.find(x=>x.id===chosen);if(v){const lots=db.stock.filter(t=>t.vessel===v.id),ids=new Set(lots.map(t=>t.id)),sales=db.sales.filter(x=>ids.has(x.stock)),purchase=lots.reduce((a,t)=>a+t.volume*t.cost,0),sold=sales.reduce((a,x)=>a+x.volume*x.price,0),buyers=[...new Set(sales.map(x=>x.customer))];$('#tableNote').innerHTML='<div style="margin-top:16px;padding:16px;border:1px solid #aaa;border-radius:8px"><strong>'+esc(v.name)+'</strong><p>Purchase value (recorded lots): '+money(purchase)+'<br>Sales value: '+money(sold)+'<br>Buyers: '+buyers.length+'</p><p>Buyers: '+(buyers.map(esc).join(', ')||'Not recorded')+'</p><p>Purchase value is based on recorded lot quantities and rates; it is not necessarily the cost of goods sold.</p></div>'}else $('#tableNote').textContent='Select a vessel for its own purchase, sales and buyer details. No combined overall totals. Financial records are currently browser-local demo data; do not enter confidential figures until secure authentication is implemented.';return;} if(kind==='buyers'){const normalizeBuyer=n=>String(n).trim().toUpperCase().replace(/\bPRIVATE\b/g,'PVT').replace(/\bLIMITED\b/g,'LTD').replace(/[^A-Z0-9]/g,'');const totals=new Map();const imported=publishedBuyerAllocations;const seen=new Set();const add=(name,cbm,vessel,bl)=>{const key=normalizeBuyer(name);if(!key||!Number.isFinite(Number(cbm)))return;let t=totals.get(key);if(!t){t={name,cbm:0,vessels:new Map(),bls:0};totals.set(key,t)}const dedupKey=vessel+'|'+String(bl||'').trim().toUpperCase();if(seen.has(dedupKey))return;seen.add(dedupKey);const qty=Number(cbm);t.cbm+=qty;t.bls++;let v=t.vessels.get(vessel);if(!v){v={cbm:0,entries:[]};t.vessels.set(vessel,v)}v.cbm+=qty;v.entries.push({bl:bl||'Not recorded',cbm:qty})};if(imported){for(const x of imported)add(x.buyer,x.cbm,x.vessel,x.bl)}else{for(const [vessel,entries] of Object.entries(historicalBuyerDetails))for(const x of entries)add(x[1],x[2],vessel,x[0]);if(!Object.keys(historicalBuyerDetails).some(v=>v.includes('DRAKE WELL')&&v.includes('LATEST')))for(const x of poddarOwnVessels[0].entries)add(x[2],x[4],'MV DRAKE WELL — LATEST SHIPMENT',x[0]);}const result=[...totals.values()].sort((a,b)=>b.cbm-a.cbm);const q=$('#search').value.toLowerCase();$('#tableTitle').textContent='Buyers list · cumulative CBM';$('#add').style.display='none';$('thead').innerHTML='<tr><th>Buyer (click to expand)</th><th>Total purchased CBM</th><th>Vessel shipments</th><th>BL entries</th></tr>';const fmt=n=>n.toLocaleString('en-US',{minimumFractionDigits:3,maximumFractionDigits:3});$('#tableNote').textContent=imported?'Complete published allocations: '+seen.size+' unique shipment/BL entries across '+new Set(imported.map(x=>x.vessel)).size+' shipments. Existing legacy entries are not added again. Quantities only; no financial data.':'Historical allocations are loading; totals below may be partial until the published data arrives.';const body=$('tbody');body.innerHTML=result.filter(x=>x.name.toLowerCase().includes(q)).map((x,i)=>{const detail=[...x.vessels.entries()].map(([v,d])=>'<details style="margin:7px 0"><summary>'+esc(v)+' — '+fmt(d.cbm)+' CBM ('+d.entries.length+' entries)</summary><table style="margin:8px 0"><thead><tr><th>BL number</th><th>CBM</th></tr></thead><tbody>'+d.entries.map(e=>'<tr><td>'+esc(e.bl)+'</td><td>'+fmt(e.cbm)+'</td></tr>').join('')+'</tbody></table></details>').join('');return '<tr><td><details><summary style="cursor:pointer;font-weight:600">'+esc(x.name)+'</summary><div style="padding:12px 0"><strong>Vessel-wise purchase breakdown</strong>'+detail+'</div></details></td><td>'+fmt(x.cbm)+'</td><td>'+x.vessels.size+'</td><td>'+x.bls+'</td></tr>'}).join('')||'<tr><td colspan="4">No buyers found.</td></tr>';return;} if(kind==='buyers'){heads=['Buyer','Invoices','Total CBM','Sales USD','Outstanding USD','Overdue USD','Actions'];const buyers=[...new Set(db.sales.map(s=>s.customer))];rows=buyers.map(name=>{const a=db.sales.filter(s=>s.customer===name),f=a.map(s=>financial(s));return[{id:'readonly'},[name,a.length,a.reduce((n,s)=>n+s.volume,0).toFixed(2),money(f.reduce((n,x)=>n+x.total,0)),money(f.reduce((n,x)=>n+x.balance,0)),money(f.filter(x=>x.overdue>0).reduce((n,x)=>n+x.balance,0))]]})}if(kind==='other'){renderTimberArrivals();return;}if(kind==='igm'){heads=['Vessel','IGM number','IGM date','Port','Notes','Actions'];rows=db.igm.map(r=>[r,[find('vessels',r.vessel,'name'),r.number,r.date,r.port,r.notes]])}if(kind==='vessels'){heads=['Vessel name','Actions'];rows=db.vessels.map(r=>[r,[r.name]])}if(kind==='stock'){heads=['Species','Vessel','Received m³','Available m³','Cost / m³','Stock value','Actions'];rows=db.stock.map(r=>[r,[r.species,find('vessels',r.vessel,'name'),r.volume,available(r.id),money(r.cost),money(available(r.id)*r.cost)]])}if(kind==='sales'){heads=['Customer','Invoice date','Due date','Sale value','Outstanding','Overdue days','Finance cost','Actions'];rows=db.sales.filter(s=>s.date<=$('#asof').value).map(r=>{let f=financial(r);return[r,[r.customer,r.date,r.due,money(f.total),money(f.balance),f.overdue,money(f.cost)]]})}if(kind==='payments'){heads=['Customer','Payment date','Reference','Amount','Actions'];rows=db.payments.filter(p=>p.date<=$('#asof').value).map(r=>[r,[find('sales',r.sale,'customer'),r.date,r.reference,money(r.amount)]])}const q=$('#search').value.toLowerCase();$('thead').innerHTML='<tr>'+heads.map(h=>`<th>${h}</th>`).join('')+'</tr>';$('tbody').innerHTML=rows.filter(([r,c])=>c.join(' ').toLowerCase().includes(q)).map(([r,c])=>'<tr>'+c.map((v,i)=>`<td>${kind==='other'&&i===5?v:esc(v)}</td>`).join('')+(kind==='other'?'':`<td>${r.id==='readonly'?'—':`<button class="action" data-edit="${r.id}">Edit</button><button class="action" data-delete="${r.id}">Delete</button>`}</td>`)+ '</tr>').join('')||`<tr><td colspan="${heads.length}">No records found.</td></tr>`;$('#tableNote').textContent=view==='other'?'Kandla timber vessel reference: https://kangadmt-art.github.io/berth-board/ (Timber vessels tab). DPA timber desk snapshot dated 15 Nov 2026; berth/arrival status must be confirmed on the live board. Manual entries appear below. Not automatically synced.':view==='vessels'?'Current vessels: names only. All financial summaries are in Finance.':kind==='stock'?'Inventory is current and includes all recorded sales. Units: cubic metres (m³).':'Sales and payments are shown through the selected date. All monetary amounts are USD.'}
const schemas={other:[['name','Vessel name'],['supplier','Supplier / agent'],['cargo','Timber cargo / CBM'],['eta','ETA Kandla','date'],['status','Status'],['source','Source URL']],igm:[['vessel','Vessel','vessels'],['number','IGM number'],['date','IGM date','date'],['port','Port'],['notes','Notes']],vessels:[['name','Vessel name'],['origin','Origin'],['eta','ETA','date'],['status','Status','select',['Planned','In transit','Arrived','Discharged']]],stock:[['species','Species / lot'],['vessel','Vessel','vessels'],['volume','Received volume (m³)','number'],['cost','Unit cost (USD / m³)','number']],sales:[['customer','Customer'],['stock','Stock lot','stock'],['volume','Sold volume (m³)','number'],['price','Sale price (USD / m³)','number'],['date','Invoice date','date'],['due','Due date','date']],payments:[['sale','Invoice','sales'],['amount','Amount (USD)','number'],['date','Payment date','date'],['reference','Reference']]};
function open(id){const k=view==='overview'?'sales':view;if(!schemas[k])return;editing=id||null;const r=db[k].find(x=>x.id===id)||{};$('#dialogTitle').textContent=(id?'Edit ':'Add ')+({vessels:'vessel',stock:'stock lot',sales:'sale',payments:'payment',other:'other supplier vessel'}[k]);$('#error').textContent='';$('#fields').innerHTML=schemas[k].map(([key,label,type,options])=>{let field;if(['select','vessels','stock','sales'].includes(type)){let opts=type==='select'?options.map(x=>[x,x]):db[type].map(x=>[x.id,x.name||x.species||`${x.customer} · ${x.date} · ${money(x.volume*x.price)}`]);field=`<select name="${key}" required><option value="">Choose…</option>${opts.map(([v,t])=>`<option value="${esc(v)}" ${r[key]===v?'selected':''}>${esc(t)}</option>`).join('')}</select>`}else field=`<input required name="${key}" type="${type||'text'}" ${type==='number'?'min="0.01" step="0.01"':''} value="${esc(r[key]??(type==='date'?today:''))}">`;return`<label>${label}${field}</label>`}).join('');$('dialog').showModal()}
$('#form').onsubmit=e=>{e.preventDefault();const k=view==='overview'?'sales':view,r=Object.fromEntries(new FormData(e.target));for(const[key,,type]of schemas[k])if(type==='number')r[key]=Number(r[key]);r.id=editing||crypto.randomUUID();let error='';if(k==='sales'){if(r.due<r.date)error='Due date must be on or after invoice date.';if(r.volume>available(r.stock,r.id))error='Sale exceeds available stock.';const paid=db.payments.filter(p=>p.sale===r.id).reduce((a,p)=>a+p.amount,0);if(paid>r.volume*r.price)error='Sale value cannot be less than payments already received.';if(db.payments.some(p=>p.sale===r.id&&p.date<r.date))error='Invoice date cannot be after its payments.'}if(k==='stock'&&r.volume<db.sales.filter(s=>s.stock===r.id).reduce((a,s)=>a+s.volume,0))error='Received volume cannot be less than sold volume.';if(k==='payments'){const sale=db.sales.find(s=>s.id===r.sale);if(r.date<sale.date)error='Payment cannot precede the invoice.';const paid=db.payments.filter(p=>p.sale===r.sale&&p.id!==r.id).reduce((a,p)=>a+p.amount,0);if(paid+r.amount>sale.volume*sale.price)error='Payment exceeds the remaining invoice balance.'}if(error){$('#error').textContent=error;return}const i=db[k].findIndex(x=>x.id===r.id);if(i<0)db[k].push(r);else db[k][i]=r;save();$('dialog').close()};
document.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.cloudShipment!==undefined){cloudShipment=b.dataset.cloudShipment;render();return}if(b.dataset.history!==undefined){window.historySelected=b.dataset.history;render();return}if(b.dataset.igm!==undefined){const vessel=b.dataset.igm;const record=db.igm.find(x=>db.vessels.some(v=>v.id===x.vessel&&v.name.toLowerCase()===vessel.toLowerCase()));const url=record?.url||(/https:\/\/[^\s]+/i.exec(record?.notes||'')||[])[0];if(url&&/^https:\/\//i.test(url))window.open(url,'_blank','noopener,noreferrer');else alert('IGM document for '+vessel+' has not been uploaded or linked yet. Please provide its IGM PDF or URL.');return}if(b.dataset.financeVessel!==undefined){window.financeSelected=b.dataset.financeVessel;render();return}if(b.dataset.syp!==undefined){window.sypSelected=Number(b.dataset.syp);render();return}if(b.dataset.view){view=b.dataset.view;$('#search').value='';render()}if(b.dataset.edit)open(b.dataset.edit);if(b.dataset.delete){const k=view==='overview'?'sales':view,id=b.dataset.delete;if((k==='vessels'&&(db.stock.some(x=>x.vessel===id)||db.igm.some(x=>x.vessel===id)))||(k==='stock'&&db.sales.some(x=>x.stock===id))||(k==='sales'&&db.payments.some(x=>x.sale===id))){alert('Remove linked records first.');return}if(confirm('Delete this record?')){db[k]=db[k].filter(x=>x.id!==id);save()}}};$('#add').onclick=()=>open();$('#close').onclick=$('#cancel').onclick=()=>$('dialog').close();$('#search').oninput=render;$('#asof').onchange=()=>{if($('#asof').value)render()};$('#clear').onclick=()=>{if(confirm('Remove all records from this browser and start empty? Export a backup first.')){db={demo:false,vessels:[],stock:[],sales:[],payments:[],igm:[],other:[]};save()}};$('#export').onclick=()=>{const url=URL.createObjectURL(new Blob([JSON.stringify(db,null,2)],{type:'application/json'})),a=document.createElement('a');a.href=url;a.download='s-poddar-backup-'+today+'.json';a.click();URL.revokeObjectURL(url)};$('#import').onclick=()=>$('#file').click();
function validate(d){for(const k of Object.keys(schemas)){if(['igm','other'].includes(k)&&!Array.isArray(d[k]))d[k]=[];if(!Array.isArray(d[k]))throw Error('Missing '+k);const ids=new Set();for(const r of d[k]){if(typeof r.id!=='string'||ids.has(r.id))throw Error('Invalid record ID');ids.add(r.id);for(const[key,,type]of schemas[k]){if(type==='number'){if(!Number.isFinite(r[key])||r[key]<=0)throw Error('Invalid amount or volume')}else if(typeof r[key]!=='string'||!r[key].trim()||(type==='date'&&(!/^\d{4}-\d{2}-\d{2}$/.test(r[key])||!Number.isFinite(day(r[key])))))throw Error('Invalid '+key)}}}for(const t of d.stock){if(!d.vessels.some(v=>v.id===t.vessel)||d.sales.filter(s=>s.stock===t.id).reduce((a,s)=>a+s.volume,0)>t.volume)throw Error('Invalid stock linkage or volume')}for(const s of d.sales){if(!d.stock.some(t=>t.id===s.stock)||s.due<s.date)throw Error('Invalid sale');if(d.payments.filter(p=>p.sale===s.id).reduce((a,p)=>a+p.amount,0)>s.volume*s.price)throw Error('Overpaid invoice')}for(const p of d.payments){const s=d.sales.find(s=>s.id===p.sale);if(!s||p.date<s.date)throw Error('Invalid payment')}return d}
$('#file').onchange=async e=>{try{if(!e.target.files[0])return;const d=validate(JSON.parse(await e.target.files[0].text()));if(confirm('Replace browser records with this backup?')){db=d;save()}}catch(e){alert('Cannot import: '+e.message)}finally{$('#file').value=''}};render();
fetch('./data/historical-buyer-allocations.json').then(r=>{if(!r.ok)throw Error('Allocation data unavailable');return r.json()}).then(d=>{if(!Array.isArray(d)||d.length!==794||new Set(d.map(x=>x.vessel+'|'+x.bl.trim().toUpperCase())).size!==d.length||new Set(d.map(x=>x.vessel)).size!==20||Math.round(d.reduce((a,x)=>a+Number(x.cbm),0)*1000)!==651714148)throw Error('Published allocation reconciliation mismatch');publishedBuyerAllocations=d;if(!cloudLedger&&cloudViews.has(view))render()}).catch(e=>{console.error('Historical buyer allocations:',e);});

refreshCloudLedger();
window.addEventListener('focus',refreshCloudLedger);
