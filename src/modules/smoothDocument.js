'use strict';

const smoothDocument = () => {
    let anchors = document.querySelectorAll('.popup-menu-nav__item > a');
    const buttonFooter = document.querySelector('.button-footer > a');
    anchors = [...anchors].concat(buttonFooter);
    anchors.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            const blockID = item.getAttribute('href').substr(1);
            if (blockID !== 'close') {
                document.getElementById(blockID).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
};

export default smoothDocument;