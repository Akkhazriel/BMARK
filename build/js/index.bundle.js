(()=>{"use strict";const e=document.querySelector(".nav__menu"),t=document.querySelector(".nav"),c=document.querySelectorAll(".nav__link"),o=document.body;e.addEventListener("click",(()=>{t.classList.toggle("_active"),c.forEach((e=>{e.classList.toggle("_active")})),e.classList.toggle("_active"),o.classList.toggle("no-scroll")}));const s=document.querySelectorAll(".form__info-link");s.forEach((e=>{e.addEventListener("click",(()=>{const t=e.classList.contains("_active");s.forEach((e=>e.classList.remove("_active"))),t||e.classList.add("_active")}))})),function(){let e=document.querySelectorAll(".form__type-header"),t=document.querySelectorAll(".form__body-item");function c(){this.parentElement.classList.toggle("_active")}function o(){let e=this.innerText,t=this.closest(".form__category-type");t.querySelector(".form__header-value").innerText=e,t.classList.remove("_active")}e.forEach((e=>{e.addEventListener("click",c)})),t.forEach((e=>{e.addEventListener("click",o)}))}()})();