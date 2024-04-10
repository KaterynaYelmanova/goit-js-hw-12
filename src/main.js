import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

export const galleryList = document.querySelector('ul.gallery');
let query = '';

let page = 1;
let maxPage = 0;
const pageSize = 15;

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
    page = 1;

    try {
      const data = await fetchImages(query, page);
      maxPage = Math.ceil(data.totalHits / pageSize);
      renderImages(data);
      const cardHeight = document.querySelector('.gallery-item');
      const domRect = cardHeight.getBoundingClientRect();
      window.scrollBy({
        top: domRect.height * 2,
        behavior: 'smooth',
      });

      inputQuery.value = '';

      checkBtnStatus();
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

const loadMoreButton = document.querySelector('.next-page-btn');
loadMoreButton.addEventListener('click', async () => {
  page += 1;

  try {
    const data = await fetchImages(query, page);
    renderImages(data);
    inputQuery.value = '';
    checkBtnStatus();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Sorry, there are no images matching your search query. Please try again!`,
      position: 'topRight',
    });
    inputQuery.value = '';
  }
});

function showLoadMore() {
  loadMoreButton.classList.remove('hidden');
}
function hideLoadMore() {
  loadMoreButton.classList.add('hidden');
}

function checkBtnStatus() {
  if (page >= maxPage) {
    hideLoadMore();
    iziToast.info({
      title: 'Info',
      message: `We're sorry, but you've reached the end of search results.`,
      position: 'topRight',
    });
  } else {
    showLoadMore();
  }
}
