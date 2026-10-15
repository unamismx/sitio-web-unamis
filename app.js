const menuButton=document.querySelector('.menu-button');const navigation=document.querySelector('.navigation');menuButton?.addEventListener('click',()=>{const open=navigation.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.navigation a').forEach(link=>link.addEventListener('click',()=>{navigation.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const banner=document.getElementById('cookie-banner');let cookieChoice=null;try{cookieChoice=localStorage.getItem('unamis-cookie-consent');}catch(error){}if(banner){if(cookieChoice)banner.remove();else banner.hidden=false;}banner?.addEventListener('click',event=>{const button=event.target.closest('[data-cookie]');if(!button)return;try{localStorage.setItem('unamis-cookie-consent',button.dataset.cookie);}catch(error){}banner.remove();});
const feasibilityForm=document.getElementById('feasibility-form');
if(feasibilityForm){
  const isEnglish=document.documentElement.lang.startsWith('en');
  const status=document.getElementById('form-status');
  const submitButton=feasibilityForm.querySelector('button[type="submit"]');
  feasibilityForm.addEventListener('submit',event=>{
    if(!feasibilityForm.checkValidity()){
      event.preventDefault();
      feasibilityForm.reportValidity();
      if(status)status.textContent=isEnglish?'Please complete the required fields.':'Complete los campos obligatorios.';
      return;
    }
    submitButton.disabled=true;
    submitButton.setAttribute('aria-busy','true');
    submitButton.textContent=isEnglish?'Sending…':'Enviando…';
    if(status)status.textContent=isEnglish?'Securely sending your inquiry…':'Enviando su propuesta de forma segura…';
  });
}
