(() => {
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = 'site-shell.css';
  document.head.appendChild(stylesheet);

  const header = document.querySelector('.site-header');
  const footer = document.querySelector('footer');
  if (header) header.innerHTML = `<a class="brand" href="index.html" aria-label="UNAMIS, inicio"><img src="assets/unamis-logo.jpeg" alt="UNAMIS — Unidad de Atención Médica e Investigación en Salud"></a><button class="menu-button" type="button" aria-expanded="false" aria-controls="navigation">Menú</button><nav id="navigation" class="navigation" aria-label="Navegación principal"><a href="patrocinadores-cro.html">Patrocinadores y CRO</a><a href="participantes.html">Participantes</a><a href="contacto.html">Contacto</a><a href="privacidad.html">Aviso de privacidad</a></nav>`;
  if (footer) footer.innerHTML = `<div class="footer-grid"><div><img src="assets/unamis-logo-transparent.png" alt="UNAMIS"><p class="footer-name">Unidad de Atención Médica e Investigación en Salud</p><p>Grupo UNAMIS, S.C.P.</p></div><div><h2>Contacto</h2><p>Calle 6 No. 489 A, entre calles 17 y 19<br>Col. García Ginerés, C.P. 97070<br>Mérida, Yucatán, México</p><p><a href="tel:+529992110094">+52 (999) 211 0094</a><br><a href="mailto:admin@unamis.com.mx">admin@unamis.com.mx</a></p></div><div><h2>Información institucional</h2><p><a href="investigacion.html">Investigación clínica</a></p><p><a href="instalaciones.html">Instalaciones</a></p><p><a href="equipo.html">Equipo de investigación</a></p><p><a href="experiencia.html">Experiencia clínica</a></p></div><div><h2>Legal</h2><p><a href="privacidad.html">Aviso de privacidad</a></p><p><a href="cookies.html">Política de cookies</a></p><p>© ${new Date().getFullYear()} UNAMIS.<br>Todos los derechos reservados.</p></div></div>`;

  const institutionalPages = new Set(['/', '/index.html', '/investigacion.html', '/instalaciones.html', '/equipo.html', '/experiencia.html']);
  if (institutionalPages.has(location.pathname)) {
    const current = location.pathname === '/' ? '/index.html' : location.pathname;
    const items = [
      ['/investigacion.html', '⌁', 'Investigación clínica'],
      ['/instalaciones.html', '⌂', 'Instalaciones y recursos'],
      ['/equipo.html', '◫', 'Equipo clínico'],
      ['/experiencia.html', '▦', 'Experiencia terapéutica']
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
})();
