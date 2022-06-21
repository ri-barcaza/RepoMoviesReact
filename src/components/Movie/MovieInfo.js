import React, { useState } from "react";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import moment from "moment";
import useFetch from "../../hooks/useFetch";
import { API_URL, API_KEY } from "../../utils/constants";
import ModalVideo from "../ModalVideo/ModalVideo";

export default function MovieInfo(props) {
  const {
    movieDetails: { id, title, release_date, overview, genres },
  } = props;

  const videoMovie = useFetch(
    `${API_URL}/movie/${id}/videos?api_key=${API_KEY}&language=es-ES`
  );

  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const openModal = () => setIsVisibleModal(true);
  const closeModal = () => setIsVisibleModal(false);

  const renderVideo = () => {
    if (videoMovie.result) {
      if (videoMovie.result.results.length > 0) {
        return (
          <>
            <Button
              type="primary"
              icon={<PlayCircleOutlined />}
              size="large"
              onClick={openModal}
            >
              VER TRAILER
            </Button>

            <ModalVideo
              videoKey={videoMovie.result.results[0].key}
              videoPlatform={videoMovie.result.results[0].site}
              isOpen={isVisibleModal}
              close={closeModal}
            />
          </>
        );
      }
    }
  };

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

      <div className="movie__info-trailer">{renderVideo()}</div>
    </>
  );
}
