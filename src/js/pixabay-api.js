import axios from 'axios';

let currentPage = 1;

export async function fetchImages(query) {
  query = encodeURIComponent(query);

  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=43144570-5608d834234b71965ee211368&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15`
    );
    currentPage++;
    if (response.data.totalHits === 0) {
      currentPage = 1;
    }

    return response.data;
  } catch (error) {
    console.error('Помилка запиту:', error.message);
  }
}
