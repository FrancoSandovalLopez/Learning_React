import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

type Props = {
  category: string
}

interface gif {
  id: string,
  title: string,
  url: string
}

export const GifGrid = ({ category }: Props) => {
  const {images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {
        isLoading && ( <h2>Loading...</h2> )
      }

      <div className="card-grid">
        {images?.map((image: gif) => {
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
