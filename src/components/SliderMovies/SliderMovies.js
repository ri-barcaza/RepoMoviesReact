import React from "react";
import { Carousel } from "antd";
import Movie from "./Movie";
import Loading from "../Loading";
import "./SliderMovies.scss";

export default function SliderMovies(props) {
  const { movies } = props;

  if (movies.loading || !movies.result) {
    return <Loading />;
  }

  const { results } = movies.result;

  return (
    <Carousel className="slider-movies" autoplay>
      {results.map((movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </Carousel>
  );
}
