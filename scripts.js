const btn=document.getElementById('menu-btn')
const nav=document.getElementById('menu')
const hide=document.getElementById('navigation-right')
function navToggle(){
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    hide.classList.toggle('hide')
}
btn.addEventListener('click',navToggle)