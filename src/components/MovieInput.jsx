import { useState } from "react";
import { addMovie } from "../movieSlice";
import { useDispatch } from "react-redux";

export const MovieInput = () => {
  const [newMovie, setNewMovie] = useState("");

  const dispatch = useDispatch();

  const handleAddMovie = () => {
    if (newMovie) {
      dispatch(addMovie(newMovie));
      setNewMovie("");
    }
  };

  return (
    <>
      <input onChange={(e) => setNewMovie(e.target.value)} value={newMovie} />
      <button onClick={handleAddMovie}> Add Movie</button>
    </>
  );
};
