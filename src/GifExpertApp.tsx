import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState<string[]>(['MACARONI']);
  const [value, setValue] = useState('');

  const onAddCategory = (newCategory: string) => {
    //console.log(newCategory);
    const newValue = newCategory.toUpperCase();
    if (categories.includes(newValue)) return;

    setCategories([newCategory.toUpperCase(), ...categories]);
  }

  return (
    <>
      <h1> Gif Expert App </h1>
      <AddCategory
        onNewCategory={onAddCategory}
      />
      {categories.map((data) => {
        return (
          <GifGrid key={data} category={ data } />
        );
      })}
    </>
  )
}
