'use strict';

const showPopupRepair = () => {
    document.body.addEventListener('click', event => {
        const popupRepairTypes = document.querySelector('.popup-repair-types');
        if (event.target.closest('.link-list-menu') ||
            event.target.closest('.link-list-repair')) {
                popupRepairTypes.style.visibility = 'visible';
        } else if (!event.target.closest('.popup-dialog-repair-types')) {
            popupRepairTypes.style.visibility = 'hidden';
        }
    });
};

export default showPopupRepair;