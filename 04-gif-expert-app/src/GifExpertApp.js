import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  //   const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  const [category, setCategory] = useState(["Dragon Ball"]);
  /*   const handleAdd = () => {
    setcategory([...category, "Amazon Prime"]);
  };*/
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategory} />
      <hr />

      <ol>
        {category.map((category) => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </>
  );
};
