(() => {
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = 'site-shell.css';
  document.head.appendChild(stylesheet);

  const header = document.querySelector('.site-header');
  const footer = document.querySelector('footer');
  if (header) header.innerHTML = `<a class="brand" href="index.html" aria-label="UNAMIS, inicio"><img src="assets/unamis-logo.jpeg" alt="UNAMIS — Unidad de Atención Médica e Investigación en Salud"></a><button class="menu-button" type="button" aria-expanded="false" aria-controls="navigation">Menú</button><nav id="navigation" class="navigation" aria-label="Navegación principal"><a href="patrocinadores-cro.html">Patrocinadores y CRO</a><a href="participantes.html">Participantes</a><a href="contacto.html">Contacto</a><a href="calidad.html">Calidad y SOP</a><a href="privacidad.html">Aviso de privacidad</a></nav>`;
  if (header) { const currentPage = location.pathname.split('/').pop() || 'index.html'; const languageLink = document.createElement('a'); languageLink.className = 'language-switch'; languageLink.href = `en/${currentPage}`; languageLink.textContent = 'EN'; languageLink.setAttribute('lang', 'en'); header.querySelector('.navigation')?.appendChild(languageLink); }
  if (footer) footer.innerHTML = `<div class="footer-grid"><div><img src="assets/unamis-logo-transparent.png" alt="UNAMIS"><p class="footer-name">Unidad de Atención Médica e Investigación en Salud</p><p>Grupo UNAMIS, S.C.P.</p></div><div><h2>Contacto</h2><p>Calle 6 No. 489 A, entre calles 17 y 19<br>Col. García Ginerés, C.P. 97070<br>Mérida, Yucatán, México</p><p><a href="tel:+529992110094">+52 (999) 211 0094</a><br><a href="mailto:admin@unamis.com.mx">admin@unamis.com.mx</a></p></div><div><h2>Información institucional</h2><p><a href="investigacion.html">Investigación clínica</a></p><p><a href="instalaciones.html">Instalaciones</a></p><p><a href="equipo.html">Equipo de investigación</a></p><p><a href="experiencia.html">Experiencia clínica</a></p><p><a href="calidad.html">Calidad y SOP</a></p></div><div><h2>Legal</h2><p><a href="privacidad.html">Aviso de privacidad</a></p><p><a href="cookies.html">Política de cookies</a></p><p>© ${new Date().getFullYear()} UNAMIS.<br>Todos los derechos reservados.</p></div></div>`;

  const institutionalPages = new Set(['/', '/index.html', '/investigacion.html', '/instalaciones.html', '/equipo.html', '/experiencia.html', '/calidad.html']);
  if (institutionalPages.has(location.pathname)) {
    const current = location.pathname === '/' ? '/index.html' : location.pathname;
    const items = [
      ['/investigacion.html', '⌁', 'Investigación clínica'],
      ['/instalaciones.html', '⌂', 'Instalaciones y recursos'],
      ['/equipo.html', '◫', 'Equipo clínico'],
      ['/experiencia.html', '▦', 'Experiencia terapéutica'],
      ['/calidad.html', '✓', 'Calidad y SOP']
    ];
    const band = document.createElement('nav');
    band.className = 'institutional-bar';
    band.setAttribute('aria-label', 'Secciones de UNAMIS');
    band.innerHTML = `<div class="institutional-bar-inner"><p>UNAMIS <span>·</span> Investigación clínica</p><div>${items.map(([path, icon, label]) => `<a class="${current === path ? 'active' : ''}" href="${path.slice(1)}"><span aria-hidden="true">${icon}</span>${label}</a>`).join('')}</div></div>`;
    header.after(band);
  }

  const menuButton = document.querySelector('.menu-button');
  const navigation = document.querySelector('.navigation');
  menuButton?.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navigation.classList.remove('open')));
  const cookieStyle = document.createElement('style');
  cookieStyle.textContent = '.unamis-cookie-banner{position:fixed;left:1rem;right:1rem;bottom:1rem;z-index:50;display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:1rem 1.2rem;background:#fff;border:1px solid #d9e3ea;border-radius:10px;box-shadow:0 14px 36px rgba(25,48,65,.2);font-size:.92rem}.unamis-cookie-banner p{margin:0;max-width:70ch}.unamis-cookie-banner a{color:#174d7b;font-weight:700}.unamis-cookie-actions{display:flex;gap:.6rem;flex-wrap:wrap;justify-content:flex-end}.unamis-cookie-actions button{cursor:pointer}@media(max-width:700px){.unamis-cookie-banner{display:block}.unamis-cookie-actions{margin-top:.75rem;justify-content:flex-start}}'; document.head.appendChild(cookieStyle);
  if (!document.getElementById('cookie-banner') && !localStorage.getItem('unamis-cookie-consent')) { const banner=document.createElement('aside'); banner.className='unamis-cookie-banner'; banner.setAttribute('role','region'); banner.setAttribute('aria-label','Preferencias de cookies'); banner.innerHTML='<p>Utilizamos cookies esenciales para el funcionamiento del sitio. Las cookies opcionales de medición solo se activarán con su consentimiento. <a href="cookies.html">Conocer la política de cookies</a></p><div class="unamis-cookie-actions"><button class="button button-secondary" data-cookie-choice="essential">Solo esenciales</button><button class="button button-primary" data-cookie-choice="all">Aceptar cookies opcionales</button></div>'; document.body.appendChild(banner); banner.addEventListener('click',event=>{const choice=event.target.dataset.cookieChoice;if(!choice)return;localStorage.setItem('unamis-cookie-consent',choice);banner.remove();}); }
})();
