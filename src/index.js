import axios from 'axios';
import Notiflix from 'notiflix';
import { searchElements } from './search-api';

const refs = {
  btnSubmit: document.querySelector(`#search-form`),
  gallery: document.querySelector(`.gallery`),
};




searchElements(["котики"])
  .then(data => {
    console.log('Отримані дані:', data);
  })
  .catch(error => {
    console.error('Sorry, there are no images matching your search query. Please try again.');
  });
// console.log(searchElemenets(`котики`));



