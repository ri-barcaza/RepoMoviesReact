import React from "react";
import { VideoCameraOutlined } from "@ant-design/icons";
import { Button } from "antd";
import moment from "moment";

export default function MovieInfo(props) {
  const {
    movieDetails: { id, title, release_date, overview, genres },
  } = props;

  return (
    <>
      <div className="movie__info-header">
        <h1>
          {title} <span>{moment(release_date).format("YYYY")}</span>
        </h1>
      </div>

      <div className="movie__info-content">
        <p>{overview}</p>
        <h3>Géneros:</h3>
        <ul>
          {genres.map((gender, index) => (
            <li key={index}>{gender.name}</li>
          ))}
        </ul>
      </div>

      <div className="movie__info-trailer">
        <Button type="primary" icon={<VideoCameraOutlined />} size="large">
          VER TRAILER
        </Button>
      </div>
    </>
  );
}
