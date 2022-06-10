import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

export default function Movie(props) {
  const {
    movie: { id, backdrop_path, title, overview },
  } = props;

  const backdropPath = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  console.log(backdropPath);

  return (
    <div
      className="slider-movies__movie"
      style={{ backgroundImage: `url('${backdropPath}')` }}
    >
      <div className="slider-movies__movie-info">
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <Link to={`/movie/${id}`}>
            <div className="slider-movies__movie-info-button">
              <Button type="primary">Ver más</Button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
