'use strict';

import showSecondPhone from './modules/showSecondPhone';
import toggleMenu from './modules/toggleMenu';
import smoothDocument from './modules/smoothDocument';
import showPopupRepair from './modules/showPopupRepair';
import maskPhone from './modules/maskPhone';


showSecondPhone();

toggleMenu();

smoothDocument();

showPopupRepair();

maskPhone('input[name="phone"]');


