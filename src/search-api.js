import axios from 'axios';






export async function searchElements(arg) {
  const { data } = await axios.get(
    `https://pixabay.com/api/?key=11809160-30735c542d1a44d0753f02a93&image_type=photo&orientation=horizontal&safesearch=true&q=${arg}`
  );
  console.log(data);
  return data;
}



export function createMarkup(arr) {
  return arr.hits.map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <div class="photo-card">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
          <p class="info-item"><b>Likes ${likes}</b></p>
          <p class="info-item"><b>Views ${views}</b></p>
          <p class="info-item"><b>Comments ${comments}</b></p>
          <p class="info-item"><b>Downloads ${downloads}</b></p>
        </div>
      </div>`)
    .join('');
}

