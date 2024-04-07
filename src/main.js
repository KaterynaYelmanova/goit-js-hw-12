import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

export const galleryList = document.querySelector('ul.gallery');
let query = '';

const displayLoader = () => {
  galleryList.innerHTML += '<span class="loader"></span>';
};

const inputQuery = document.getElementById('search-input');
inputQuery.addEventListener('input', e => {
  query = inputQuery.value.trim();
});

const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', async () => {
  if (query && query.length >= 3) {
    displayLoader();

    try {
      const data = await fetchImages(query);
      renderImages(data);
      inputQuery.value = '';
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message: `Sorry, there are no images matching your search query. Please try again!`,
        position: 'topRight',
      });
      inputQuery.value = '';
    }
  } else {
    iziToast.info({
      title: 'Info',
      message: 'Please enter a valid search query with at least 3 characters.',
      position: 'topRight',
    });
  }
});

inputQuery.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    searchButton.click();
  }
});
