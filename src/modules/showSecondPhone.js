'use strict';
const showSecondPhone = () => {
    const headerContactsArrow = document.querySelector('.header-contacts__arrow'),
    telTwoo = document.querySelector('.header-contacts__phone-number-accord'),
    aTelTwoo = telTwoo.querySelector('a');
    let count = 0;

    headerContactsArrow.addEventListener('click', () => {
        count++;
        if (count === 1) {
            telTwoo.style.position = 'relative';
            aTelTwoo.style.opacity = 1;
        } 
        if (count === 2) {
            count = 0;
            telTwoo.style.position = 'absolute';
            aTelTwoo.style.opacity = 0;
        }

    });
};
export default showSecondPhone;