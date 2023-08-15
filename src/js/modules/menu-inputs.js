import autoComplete from "@tarekraafat/autocomplete.js";
import customSelect from 'custom-select';

let cityList = [
    "Austin", 
  "Boston", 
  "Chicago", 
  "Denver", 
  "El Paso", 
  "Fort Worth", 
  "Houston", 
  "Indianapolis", 
  "Jacksonville", 
  "Kansas City", 
  "Los Angeles", 
  "Miami", 
  "Nashville", 
  "New York", 
  "Oakland", 
  "Portland", 
  "Quincy", 
  "Raleigh", 
  "San Francisco", 
  "Tampa", 
  "Utica", 
  "Virginia Beach", 
  "Washington", 
  "Xenia", 
  "Yonkers", 
  "Zanesville"
];

export const autoCompleteJs = new autoComplete({
    selector: "#location",
    data: {
        src: cityList,
        cache: true,
    },
    resultItem: {
        hightlight: true,
    },
    events: {
        input: {
            selection: (event) => {
                const selection = event.detail.selection.value;
                autoCompleteJs.input.value = selection;
            },
        },
    },
    resultList: {
        maxResult: 15,
    },
    searchEngine: 'strict',
});


const links = document.querySelectorAll('.form__info-link');
const form = document.querySelector('.form__info');

if (links && form) {
    const activeLink = links.forEach(link => {
        link.addEventListener('click', () => {
            const isActive = link.classList.contains('_active');

            links.forEach(link => link.classList.remove('_active'));

            if(!isActive) {
                link.classList.add('_active');
            }
        })
    })
}

export default activeLink;

export let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

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
            select = this.closest('.form__select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('_active');
    }
};