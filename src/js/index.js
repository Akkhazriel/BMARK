import menuActive from "./modules/menu-button";
import activeLink from "./modules/menu-inputs";
import { autoCompleteJs } from "./modules/menu-inputs";
import { select } from "./modules/menu-inputs";
import Swiper from 'swiper/bundle';
import { slideToggle } from "./modules/slider-img";

select();

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    
    keyboard: {
        enable: true,
    },

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
});