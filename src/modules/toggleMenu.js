'use strict';

const toggleMenu = () => {
    const popupDialogMenu = document.querySelector('.popup-dialog-menu');

    const checkResponse = () => {
        const widthWindow = document.documentElement.clientWidth;

        if (widthWindow < 576) {
            popupDialogMenu.style.transform = 'translate3d(0,-1000px,0)';
        } else {
            popupDialogMenu.style.display = 'none';
            popupDialogMenu.style.transform = 'translate3d(1000px,0,0)';
        }

        document.body.addEventListener('click', event => {
            popupDialogMenu.style.display = 'block';
            if (event.target.matches('.menu__icon')) {
                popupDialogMenu.style.transform = 'translate3d(0px,0,0)';
            } else if (event.target.matches('.close-menu') ||
                !event.target.closest('.popup-dialog-menu') ||
                (event.target.closest('.popup-menu-main div > a'))) {
                if (widthWindow < 576) {
                    popupDialogMenu.style.transform = 'translate3d(0,-1000px,0)';
                } else {
                    popupDialogMenu.style.transform = 'translate3d(1000px,0,0)';
                }
            }
        });
    };
    checkResponse();
    window.addEventListener('resize', checkResponse);
};

export default toggleMenu;