import cardRender from './image_card.hbs';
import button from './index';


const myKey = '24296809-9b93a2a7fdd6c9a326bbfa052';
let pageNumber = 1;
const cardList = document.querySelector('.gallery');



export default function getImages (value) {
    const makeCard = function (arr) {
        cardList.insertAdjacentHTML('beforeend', cardRender(arr));
    };

    pageNumber += 1;

    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${value}&page=${pageNumber}&per_page=12&key=${myKey}`;
    return fetch(url).then(result => result.json('')).then(array => makeCard(array.hits));


} 
       
