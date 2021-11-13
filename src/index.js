import './sass/main.scss';
import 'material-design-icons';
import { debounce } from 'debounce';
import getImages from './apiService';
import * as basicLightbox from 'basiclightbox';

const inputValueRef = document.querySelector('[name="query"]');
const button = document.querySelector('.button');
const cardList = document.querySelector('.gallery');

const onSearchImage = function () {
  getImages(inputValueRef.value);
};


const onNewSearch = function () {
  button.textContent = 'Шукати';
  cardList.innerHTML = '';
  
}
// const onModalOpen = function (elem) {
  
//   if(!elem.target.classList.contains('photo')) {
//     return;
//   } else {
//     cardList.insertAdjacentHTML('beforebegin', `<div class="big-photo" style="background-image: url(${elem.target.href});"></div>`);
//   };
// };

button.addEventListener('click', onSearchImage);

// cardList.addEventListener('click', onModalOpen);

inputValueRef.addEventListener('input', debounce(onNewSearch, 500));