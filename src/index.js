import './sass/main.scss';
import 'material-design-icons';
import { debounce } from 'debounce';
import getImages from './apiService';

const inputValueRef = document.querySelector('[name="query"]');

const searchImage = function () {
  getImages(inputValueRef.value);
};

inputValueRef.addEventListener('input', debounce(searchImage, 1000));