import './sass/main.scss';
import 'material-design-icons';
import { debounce } from 'debounce';
import getImages from './apiService';
import cardRender from './image_card.hbs';

const inputValueRef = document.querySelector('[name="query"]');
const cardList = document.querySelector('.gallery');

const createCard = function (card) {
  // cardList.insertAdjacentHTML('beforeend', cardRender(card.hits[0]));
  console.log(card);
} 

async function searchImage () {
   const imagesArray = await function () {
    const a= getImages(inputValueRef.value);
     return console.log(a);
   };

   const makeCard = await function (images) {
     return createCard(images);
   };

   imagesArray();
   makeCard(imagesArray);

};

inputValueRef.addEventListener('input', debounce(searchImage, 1000));