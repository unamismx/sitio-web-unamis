const requestedArea=new URLSearchParams(location.search).get('area');
const currentArea=requestedArea||document.body.dataset.area||'Todas las áreas';
const table=document.getElementById('study-table');
const count=document.getElementById('catalogue-count');
const heading=document.getElementById('catalogue-title');
const relativePath=location.pathname.includes('/experiencia/')?'../studies.json':'studies.json';
fetch(relativePath).then(response=>response.json()).then(studies=>{
  const rows=currentArea==='Todas las áreas'?studies:studies.filter(study=>(study.areas||[study.area]).includes(currentArea));
  heading.textContent=currentArea==='Todas las áreas'?'Experiencia general':currentArea;
  count.textContent=`${rows.length} estudios y protocolos en este catálogo.`;
  table.innerHTML=rows.map(study=>`<tr><td>${study.indication}</td><td>${study.nct}<br><span>${study.protocol}</span></td><td>${study.title}</td><td>${study.year}</td><td>${study.status}</td></tr>`).join('');
}).catch(()=>{count.textContent='No fue posible cargar el catálogo en esta vista.';});
