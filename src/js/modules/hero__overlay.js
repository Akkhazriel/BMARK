export let select = function () {
    let selectHeader = document.querySelectorAll('.form__type-header');
    let selectItem = document.querySelectorAll('.form__body-item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('_active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.form__category-type'),
            currentText = select.querySelector('.form__header-value');
        currentText.innerText = text;
        select.classList.remove('_active');

    }
};

const links = document.querySelectorAll('.form__info-link');

export const toggleLinks = links.forEach(link => {
    link.addEventListener('click', () => {
        const isActive = link.classList.contains('_active');

        links.forEach(link => link.classList.remove('_active'));
        if(!isActive) {
            link.classList.add('_active');
        }
    })
})