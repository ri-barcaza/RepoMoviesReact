import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { API_URL, API_KEY } from "../utils/constants";
import Loading from "../components/Loading";
import RenderMovie from "../components/Movie";

export default function Movie() {
  const { id } = useParams();

  const movieDetails = useFetch(
    `${API_URL}/movie/${id}?api_key=${API_KEY}&language=es-ES`
  );

  if (movieDetails.loading || !movieDetails.result) {
    return <Loading />;
  }

  return <RenderMovie movieDetails={movieDetails.result} />;
}
