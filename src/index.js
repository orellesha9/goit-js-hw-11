import axios from 'axios';
import Notiflix from 'notiflix';
import { searchElements } from './search-api';

const refs = {
  btnSubmit: document.querySelector(`#search-form`),
  gallery: document.querySelector(`.gallery`),
};




searchElements(["котики"])
  .then(data => {
  result =  data
     .map(
       ({
         webformatURL,
         largeImageURL,
         tags,
         likes,
         views,
         comments,
         downloads,
       }) => `<div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${downloads}</b>
    </p>
  </div>
</div>`
   )

     .join('');
  })
  .catch(error => {
    console.error('Sorry, there are no images matching your search query. Please try again.');
  });
// console.log(searchElemenets(`котики`));



console.log(searchElements(['котики']));