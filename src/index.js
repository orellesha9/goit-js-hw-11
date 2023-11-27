import axios from 'axios';
import Notiflix from 'notiflix';
import { searchElements } from './search-api';
import { createMarkup } from './search-api';

const refs = {
  btnSubmit: document.querySelector(`#search-form`),
  gallery: document.querySelector(`.gallery`),
  input: document.querySelector(`.search`),
};

refs.btnSubmit.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  currentInput = refs.input.value;
  console.log(currentInput);

  searchElements(currentInput)
    .then(data => {
      if (data.total === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        refs.gallery.innerHTML = createMarkup(data);
        Notiflix.Notify.success(`Hooray! We found ${data.total} images`);
      }
    })
    .catch(error => {
      console.log(error);
    });
}