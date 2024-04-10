import axios from 'axios';

export async function fetchImages(query, currentPage) {
  try {
    const params = {
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: currentPage,
      key: '43144570-5608d834234b71965ee211368',
    };

    const res = await axios.get('https://pixabay.com/api/?', { params });
    return res.data;
  } catch (error) {
    console.error('Помилка запиту:', error.message);
  }
}
