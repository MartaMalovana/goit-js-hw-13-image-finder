import './sass/main.scss';
import 'material-design-icons';
import { debounce } from 'debounce';

const inputValueRef = document.querySelector('[name="query"]');
const myKey = '24296809-9b93a2a7fdd6c9a326bbfa052';
let pageNumber = 1;

const searchImage = function () {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${inputValueRef.value}&page=${pageNumber}&per_page=12&key=${myKey}`;
    fetch(url).then(result => {
      console.log(result.json(''));
    });
};

inputValueRef.addEventListener('input', debounce(searchImage, 1000));