import React, { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../utils/constants";
import RenderMovies from "../components/RenderMovies";

export default function Popular() {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${API_URL}/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`
      );

      const movies = await response.json();
      setMovieList(movies);
    })();
  }, [page, movieList]);

  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <RenderMovies
      movieList={movieList}
      onChangePage={onChangePage}
      title="Películas Populares"
    />
  );
}
