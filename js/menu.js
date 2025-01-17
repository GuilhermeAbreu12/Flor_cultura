let menu_lateral = document.getElementById('menu-lateral-box');
let menu_btn = document.getElementById('button-menu')
let menu_btn_open = document.getElementById('button-menu--open')

/* Função para abrir o menu */
menu_btn.addEventListener('click', ()=>{
    menu_lateral.classList.toggle('visible');
    menu_btn.style.display = 'none';
    menu_btn_open.style.display = 'flex';
});

/* Função para fechar o menu */
menu_btn_open.addEventListener('click', ()=>{
    menu_lateral.classList.toggle('visible')
    menu_btn.style.display = 'flex';
    menu_btn_open.style.display = 'none';
})