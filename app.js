const menuButton=document.querySelector('.menu-button');const navigation=document.querySelector('.navigation');menuButton?.addEventListener('click',()=>{const open=navigation.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.navigation a').forEach(link=>link.addEventListener('click',()=>{navigation.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
const banner=document.getElementById('cookie-banner');if(!localStorage.getItem('unamis-cookie-consent'))banner.hidden=false;banner?.addEventListener('click',event=>{const choice=event.target.dataset.cookie;if(!choice)return;localStorage.setItem('unamis-cookie-consent',choice);banner.hidden=true;});
const feasibilityForm=document.getElementById('feasibility-form');
if(feasibilityForm){
  const trap=document.createElement('input'); trap.type='text'; trap.name='website'; trap.tabIndex=-1; trap.autocomplete='off'; trap.setAttribute('aria-hidden','true'); trap.style.cssText='position:absolute;left:-10000px;width:1px;height:1px;opacity:0'; feasibilityForm.appendChild(trap);
  const human=document.createElement('label'); human.className='consent human-check'; human.innerHTML='<input required type="checkbox" name="human_check"><span>Confirmo que soy una persona y no un sistema automatizado.</span>'; feasibilityForm.insertBefore(human,feasibilityForm.querySelector('button'));
  feasibilityForm.addEventListener('submit',event=>{event.preventDefault();const status=document.getElementById('form-status');if(trap.value){status.textContent='No fue posible validar la solicitud.';return;}if(!feasibilityForm.checkValidity()){feasibilityForm.reportValidity();return;}status.textContent='Gracias. Su solicitud fue validada; nuestro equipo dará seguimiento por correo electrónico.';});
}
