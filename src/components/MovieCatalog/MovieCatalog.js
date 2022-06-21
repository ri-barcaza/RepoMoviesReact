import React from "react";
import { Col } from "antd";
import MovieCard from "./MovieCard";
import "./MovieCatalog.scss";

export default function MovieCatalog(props) {
  const {
    movies: { results },
  } = props;

  return results.map((movie, index) => (
    <Col key={index} className="movie-catalog">
      <MovieCard movie={movie} />
    </Col>
  ));
}
