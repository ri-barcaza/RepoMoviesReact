import React from "react";
import { Link } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";
import { Card } from "antd";

export default function MovieCard(props) {
  const {
    movie: { id, title, poster_path },
  } = props;

  const { Meta } = Card;
  const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;

  return (
    <Link to={`/movie/${id}`}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img src={posterPath} alt={title} />}
        actions={[<EyeOutlined />]}
      >
        <Meta title={title} />
      </Card>
    </Link>
  );
}
