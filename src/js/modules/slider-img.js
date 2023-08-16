let images = ['./../img/properties/01.jpg', './../img/properties/02.jpg', './../img/properties/02.jpg', './../img/benefits/01.jpg'];
let currentIndex = 0;

export const slideToggle = document.querySelector('.discover__row-btn').addEventListener('click', function(event) {
    event.preventDefault();

    let changeBlock = document.querySelector('.benefit__img');
    changeBlock.style.backgroundImage = 'url(' + images[currentIndex] + ')';

    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
});