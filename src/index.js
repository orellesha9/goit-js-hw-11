import axios from 'axios';
import Notiflix from 'notiflix';
import { searchElemenets } from './search-api';


searchElemenets()
// console.log(searchElemenets(`котики`));
const refs = {
  btnSubmit: document.querySelector(`#search-form`)
};


