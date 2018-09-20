;(function(){
    'use scrict';
    var btn = document.querySelector('.header-nav__hamburgger')
    var html = document.querySelector('html');
    var menuOpened = false;

    btn.addEventListener('click',toggleMenu);
    function toggleMenu(e){
        if(menuOpened){
            closeMenu();
            return
        }
        openMenu();
    }
    function closeMenu(){
        menuOpened = false;
        html.classList.remove('menu-opened')
    }

    function openMenu(){
        menuOpened = true;
        html.classList.add('menu-opened')
    }
})()