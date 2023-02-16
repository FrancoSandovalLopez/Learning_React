import { getGifs } from "./../helpers/getGifs";
import { useEffect, useState } from "react";

interface gif {
  id: string;
  title: string;
  url: string;
}

export const useFetchGifs = (category: string) => {
  const [images, setImages] = useState<gif[]>();

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);
  

  return {
    images: images,
    isLoading: true,
  };
};
