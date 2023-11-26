import axios from 'axios';
axios.defaults.baseURL =
  'https://pixabay.com/api/?key=11809160-30735c542d1a44d0753f02a93&image_type=photo&orientation=horizontal&safesearch=true&q=';
axios.defaults.headers.common['key'] = '11809160-30735c542d1a44d0753f02a93';



export async function searchElemenets(search) { 
   try {
       const { data } = await axios.get(
         `https://pixabay.com/api/?key=11809160-30735c542d1a44d0753f02a93&image_type=photo&orientation=horizontal&safesearch=true&q=${search}`
       );
        return data;
   } catch (error) {
    console.log(error);
   }
   
    
    
   
    
    }
    



