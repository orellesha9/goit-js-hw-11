import axios from 'axios';
axios.defaults.headers.common['Authorization'] =
  '11809160-30735c542d1a44d0753f02a93';





export async function searchElemenets(search) { 
   try {
       const { data } = await axios.get(
         `https://pixabay.com/api/?image_type=photo&orientation=horizontal&safesearch=true&q=котики`
       );
       return data;
   } catch (error) {
    console.log(error);
   }
    }
    



