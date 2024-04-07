export function fetchImages(query) {
  query = encodeURIComponent(query);

  return fetch(
    `https://pixabay.com/api/?key=43144570-5608d834234b71965ee211368&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .catch(error => {
      console.error('Помилка запиту:', error.message);
    });
}
