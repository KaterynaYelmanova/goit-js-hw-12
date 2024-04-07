import axios from 'axios';

export async function fetchImages(query) {
  query = encodeURIComponent(query);

  try {
    const response = await axios.get(
      `https://pixabay.com/api/?key=43144570-5608d834234b71965ee211368&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
    );

    return response.data;
  } catch (error) {
    console.error('Помилка запиту:', error.message);
  }
}
