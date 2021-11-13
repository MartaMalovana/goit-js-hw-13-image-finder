import './sass/main.scss';
import 'material-design-icons';
import { debounce } from 'debounce';
import getImages from './apiService';

const inputValueRef = document.querySelector('[name="query"]');
const button = document.querySelector('.button');

const searchImage = function () {
  getImages(inputValueRef.value);
  button.style.display = 'block';
};

inputValueRef.addEventListener('input', debounce(searchImage, 1000));

button.addEventListener('click', searchImage);