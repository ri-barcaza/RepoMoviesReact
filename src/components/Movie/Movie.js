import React from "react";
import { Row, Col } from "antd";
import MoviePoster from "./MoviePoster";
import MovieInfo from "./MovieInfo";
import "./Movie.scss";

export default function Movie(props) {
  const {
    movieDetails: { backdrop_path, poster_path },
  } = props;

  const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <div
      className="movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="movie__dark"></div>

      <Row>
        <Col className="movie__poster" span={4} offset={1}>
          <MoviePoster image={poster_path} />
        </Col>

        <Col className="movie__info" span={17} offset={1}>
          <MovieInfo movieDetails={props.movieDetails} />
        </Col>
      </Row>
    </div>
  );
}
