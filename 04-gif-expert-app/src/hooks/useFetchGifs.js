import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGif";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [0],
    loading: true,
  });
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);
  return state; //{data:[], loading:true}
};
