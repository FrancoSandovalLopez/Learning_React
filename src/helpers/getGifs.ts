import axios from "axios";

interface gif {
    id: string,
    title: string,
    url: string
  }

export const getGifs = async (category: string) => {
    const url = 'https://api.giphy.com/v1/gifs/search';
    const apiKey = 'njrfdCpWy1Rsw7snvMz13EtAZW24oYjS';

    

    const result = await axios.get(url, {
        params: {
            api_key: apiKey,
            q: category,
            limit: 10
        }
    }).then((images) => {
        const data: gif[] = images.data.data.map((img: any) => {
           return{
            title: img.title,
            id: img.id,
            url: img.images.downsized_medium.url
           };
        });

        return data;
    });
    return result;
}