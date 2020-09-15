import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
//

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category);
  /*   const [images, setImages] = useState([]);
  // const [count, setCount] = useState(0);
  */

  //   getGifs();
  console.log(data);
  console.log(loading);
  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading</p>}
      <div className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
