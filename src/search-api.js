import axios from 'axios';






export async function searchElements(arg) {
  try {
    const {data} = await axios.get(
      'https://pixabay.com/api/?key=11809160-30735c542d1a44d0753f02a93&image_type=photo&orientation=horizontal&safesearch=true&q=${arg}'
    );
    return data;
  } catch (error) {
    console.error('Помилка:', error);
    throw new Error('Помилка отримання даних через axios');
  }
}


