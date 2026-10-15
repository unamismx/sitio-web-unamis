(() => {
const stylesheet=document.createElement('link'); stylesheet.rel='stylesheet'; stylesheet.href='../site-shell.css'; document.head.appendChild(stylesheet);
const header=document.querySelector('.site-header'), footer=document.querySelector('footer');
const page=location.pathname.split('/').pop()||'index.html';
if(header) header.innerHTML=`<a class="brand" href="index.html" aria-label="UNAMIS home"><img src="../assets/unamis-logo.jpeg" alt="UNAMIS — Unidad de Atención Médica e Investigación en Salud"></a><button class="menu-button" type="button" aria-expanded="false" aria-controls="navigation">Menu</button><nav id="navigation" class="navigation" aria-label="Main navigation"><a href="patrocinadores-cro.html">Sponsors and CROs</a><a href="participantes.html">Participants</a><a href="contacto.html">Contact</a><a href="calidad.html">Quality system</a><a href="privacidad.html">Privacy notice</a><a class="language-switch" href="../${page}">ES</a></nav>`;
if(footer) footer.innerHTML=`<div class="footer-grid"><div><img src="../assets/unamis-logo-transparent.png" alt="UNAMIS"><p class="footer-name">Unidad de Atención Médica e Investigación en Salud</p><p>Grupo UNAMIS, S.C.P.</p></div><div><h2>Contact</h2><p>Calle 6 No. 489 A, between streets 17 and 19<br>Col. García Ginerés, C.P. 97070<br>Mérida, Yucatán, Mexico</p><p><a href="tel:+529992110094">+52 (999) 211 0094</a><br><a href="mailto:admin@unamis.com.mx">admin@unamis.com.mx</a></p></div><div><h2>Institutional information</h2><p><a href="investigacion.html">Clinical research</a></p><p><a href="instalaciones.html">Facilities</a></p><p><a href="equipo.html">Research team</a></p><p><a href="experiencia.html">Clinical experience</a></p><p><a href="calidad.html">Quality system</a></p></div><div><h2>Legal</h2><p><a href="privacidad.html">Privacy notice</a></p><p><a href="cookies.html">Cookie policy</a></p><p><button class="cookie-preferences-link" type="button">Change cookie preferences</button></p><p>© ${new Date().getFullYear()} UNAMIS.<br>All rights reserved.</p></div></div>`;
const institutionalPages=new Set(['index.html','investigacion.html','instalaciones.html','equipo.html','experiencia.html','calidad.html']); if(institutionalPages.has(page)){const items=[['investigacion.html','⌁','Clinical research'],['instalaciones.html','⌂','Facilities and resources'],['equipo.html','◫','Research team'],['experiencia.html','▦','Therapeutic experience'],['calidad.html','✓','Quality system']]; const band=document.createElement('nav'); band.className='institutional-bar'; band.setAttribute('aria-label','UNAMIS sections'); band.innerHTML=`<div class="institutional-bar-inner"><p>UNAMIS <span>·</span> Clinical research</p><div>${items.map(([path,icon,label])=>`<a class="${page===path?'active':''}" href="${path}"><span aria-hidden="true">${icon}</span>${label}</a>`).join('')}</div></div>`; header.after(band);}
const button=document.querySelector('.menu-button'), nav=document.querySelector('.navigation'); button?.addEventListener('click',()=>{const open=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(open))}); nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const languageRefinements={
 'Clinical research with proven experience in southeastern Mexico.':'Clinical research with a proven track record in southeastern Mexico.',
 'UNAMIS combines medical care, a network of associated investigators and infrastructure for the conduct of multicenter clinical studies.':'UNAMIS combines medical care, an experienced investigator network and dedicated infrastructure to support multicenter clinical studies.',
 'Information organized around your needs':'Information organized around your priorities',
 'Operating model, capabilities, facilities and therapeutic areas.':'Operating model, capabilities, facilities and therapeutic focus.',
 'Institutional information and a dedicated feasibility contact form.':'Institutional information and a dedicated contact for feasibility discussions.',
 'Multidisciplinary clinical research experience by therapeutic area.':'Documented clinical research experience across key therapeutic areas.',
 'Explore the site →':'Explore our capabilities →',
 'Send an inquiry →':'Start a conversation →',
 'View the catalogue →':'Review our experience →',
 'Clinical execution for multicenter studies.':'Operational execution for multicenter clinical studies.',
 'Preparation, conduct and follow-up':'Study start-up, conduct and follow-up',
 'A multidisciplinary network of investigators, clinical coordinators and support staff.':'A multidisciplinary network of investigators, clinical coordinators and support professionals aligned to study requirements.',
 'Operational processes, Good Clinical Practice training and experience with clinical data platforms.':'Operational processes, Good Clinical Practice training and experience with clinical data and electronic study platforms.',
 'Multidisciplinary portfolio':'Multidisciplinary clinical portfolio',
 'Ready and willing to collaborate in clinical research.':'Available to collaborate on the proposed study.',
 'A team available to build solutions with you.':'A responsive partner throughout site selection and study delivery.',
 'We welcome your proposal.':'Let us explore the opportunity together.',
 'Share initial protocol information or tell us what you need. We will review the opportunity and suggest the best way to move forward.':'Share initial protocol information or tell us what you need. Our team will review the opportunity and suggest the most appropriate next step.',
 'Clinical expertise and dedicated operations.':'Clinical expertise and dedicated study operations.',
 'A multidisciplinary structure for each protocol.':'A multidisciplinary structure aligned to each protocol.',
 'Documented experience':'Documented clinical research experience',
 'Multidisciplinary clinical research experience.':'Multidisciplinary clinical research experience across therapeutic areas.',
 'Make an informed decision.':'Make an informed decision about participation.',
 'You remain in control.':'You remain in control throughout the process.',
 'How do clinical studies work?':'How are clinical studies designed and conducted?',
 'Safety, ethics and regulation.':'Participant safety, ethics and regulatory oversight.'
};
const replaceText=(node)=>{if(node.nodeType===Node.TEXT_NODE){let value=node.nodeValue;for(const [from,to] of Object.entries(languageRefinements)) value=value.split(from).join(to);if(value!==node.nodeValue) node.nodeValue=value;}else if(node.nodeType===Node.ELEMENT_NODE && !['SCRIPT','STYLE'].includes(node.tagName)) node.childNodes.forEach(replaceText);}; replaceText(document.body);
const cookieStyle=document.createElement('style'); cookieStyle.textContent='.unamis-cookie-banner{position:fixed;left:1rem;right:1rem;bottom:1rem;z-index:50;display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:1rem 1.2rem;background:#fff;border:1px solid #d9e3ea;border-radius:10px;box-shadow:0 14px 36px rgba(25,48,65,.2);font-size:.92rem}.unamis-cookie-banner p{margin:0;max-width:70ch}.unamis-cookie-banner a{color:#174d7b;font-weight:700}.unamis-cookie-actions{display:flex;gap:.6rem;flex-wrap:wrap;justify-content:flex-end}.unamis-cookie-actions button{cursor:pointer}@media(max-width:700px){.unamis-cookie-banner{display:block}.unamis-cookie-actions{margin-top:.75rem;justify-content:flex-start}}'; cookieStyle.textContent += '.cookie-preferences-link{padding:0;border:0;background:none;color:inherit;font:inherit;text-decoration:underline;cursor:pointer}'; document.head.appendChild(cookieStyle);

function readCookieConsent(){try{return localStorage.getItem('unamis-cookie-consent')}catch(error){return null}}
function saveCookieConsent(choice){try{localStorage.setItem('unamis-cookie-consent',choice)}catch(error){}}
function clearCookieConsent(){try{localStorage.removeItem('unamis-cookie-consent')}catch(error){}}
function showCookieBanner(){
  document.getElementById('cookie-banner')?.remove();
  document.querySelector('.unamis-cookie-banner')?.remove();
  const banner=document.createElement('aside');
  banner.id='cookie-banner';
  banner.className='unamis-cookie-banner';
  banner.setAttribute('role','region');
  banner.setAttribute('aria-label','Cookie preferences');
  banner.innerHTML='<p>We use essential cookies for this site to work. Optional measurement cookies are enabled only with your consent. <a href="cookies.html">Read the cookie policy</a></p><div class="unamis-cookie-actions"><button class="button button-secondary" data-cookie="essential">Essential only</button><button class="button button-primary" data-cookie="all">Accept optional cookies</button></div>';
  document.body.appendChild(banner);
  banner.addEventListener('click',event=>{const button=event.target.closest('[data-cookie]');if(!button)return;saveCookieConsent(button.dataset.cookie);banner.remove();});
}
if(!readCookieConsent()) showCookieBanner();
document.querySelector('.cookie-preferences-link')?.addEventListener('click',()=>{clearCookieConsent();showCookieBanner();});

})();
