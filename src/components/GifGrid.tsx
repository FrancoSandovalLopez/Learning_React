import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";

type Props = {
  category: string
}

interface gif {
  id: string,
  title: string,
  url: string
}

export const GifGrid = ({ category }: Props) => {

  const [images, setImages] = useState<gif[]>([]);

  useEffect(() => {
    getGifs(category)
      .then((newImages: any) => setImages(newImages));
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map((image: gif) => {
          return (
            <GifItem
              key={image.id}
              { ...image }/>
          );
        })}

      </div>
    </>
  )
}
