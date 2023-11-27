import axios from 'axios';





let page = 1;
export async function searchElements(arg,page) {
  const { data } = await axios.get(
    `https://pixabay.com/api/?key=11809160-30735c542d1a44d0753f02a93&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&q=${arg}&page=${page}`
  );
  // console.log(data);
  return data;
}



export function createMarkup(arr) {
  return arr.hits
    .map(
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
         <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
        <div class="info">
          <p class="info-item"><b>Likes ${likes}</b></p>
          <p class="info-item"><b>Views ${views}</b></p>
          <p class="info-item"><b>Comments ${comments}</b></p>
          <p class="info-item"><b>Downloads ${downloads}</b></p>
        </div>
      </div>`
    )
    .join('');
}

