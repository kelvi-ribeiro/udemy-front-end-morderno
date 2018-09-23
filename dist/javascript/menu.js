;(function(){
    'use scrict';
    var btn = document.querySelector('.header-nav__hamburgger');
    var html = document.querySelector('html');
    var menu = document.querySelector('#mainMenu');
    var classMenu = 'menu-opened';
    var menuOpened = false;

    html.addEventListener('click',function(e){
        if(e.target === this){
            closeMenu();
            return;
        }

        
    })

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
        html.classList.remove(classMenu);
        btn.blur();
        menu.setAttribute('aria-expanded',false)
        btn.setAttribute('aria-expanded',false)
    }

    function openMenu(){
        menuOpened = true;
        html.classList.add(classMenu)
        menu.setAttribute('aria-expanded',true)
        btn.setAttribute('aria-expanded',true)
    }
})()