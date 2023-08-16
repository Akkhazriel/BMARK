const checkbox = document.querySelectorAll('.properties__btn-radio');

export const toggleCheckboxes = checkbox.forEach(item => {
    item.addEventListener('click', () => {
        const isActive = item.checked == true;

        checkbox.forEach(item => item.checked == false);

        if(!isActive) {
            item.checked == true;
        }
    })
})