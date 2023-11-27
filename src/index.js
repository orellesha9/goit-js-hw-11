import axios from 'axios';
import Notiflix from 'notiflix';
import { searchElements } from './search-api';
import { createMarkup } from './search-api';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a', {
         captionsData: 'alt', // атрибут значення якого буде показано
          captionDelay: 250, // затримка перед тим як показувати текст
   });


const refs = {
  btnSubmit: document.querySelector(`#search-form`),
  gallery: document.querySelector(`.gallery`),
  input: document.querySelector(`.search`),
  loadMoreBtn: document.querySelector(`.load-more`),
};
refs.loadMoreBtn.style.display = 'none';
refs.btnSubmit.addEventListener('submit', handleSubmit);
let page = 1;
let hits = 40;
function handleSubmit(event) {
  event.preventDefault();
  currentInput = refs.input.value;
  // console.log(currentInput);

  searchElements(currentInput, page=1)
    .then(data => {
      if (data.total === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        refs.gallery.innerHTML = createMarkup(data);
        refs.loadMoreBtn.style.display = 'block';
        refs.loadMoreBtn.addEventListener('click', handleLoadMore);
        Notiflix.Notify.success(`Hooray! We found ${data.total} images`);
        lightbox.refresh();
        
      }
    })
    .catch(error => {
      console.log(error);
    });
}


function handleLoadMore() {
  hits += 40;
  page += 1;
  // console.log(hits);
   currentInput = refs.input.value;
  // refs.loadMoreBtn.disabled = true
  searchElements(currentInput, page)
    .then(data => {
      refs.gallery.insertAdjacentHTML(
        'beforeend',
        createMarkup(data)
        
      );
 lightbox.refresh();
      if (hits >= data.totalHits) {
        refs.loadMoreBtn.style.display = 'none';
        Notiflix.Notify.failure(
          "We're sorry, but you've reached the end of search results."
        );
        refs.loadMoreBtn.removeEventListener('click', handleLoadMore);
        return;
      }

      refs.loadMoreBtn.style.display = 'block';
    })
    .catch(err => {
      console.log(err);
    });
}