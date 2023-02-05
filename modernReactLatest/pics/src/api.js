import axios from 'axios';

const searchImages = async (term) =>{
    // console.log('term' , term);
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers:{
            Authorization: 'Client-ID nk9Jz_AiUgvo5iFVCAM1Kgev9eXOf-AVmsr3n--GY_I',
        },
        params:{
            query : term,
        }
    })
    // console.log(response);
    return response.data.results;
}


export default searchImages;