import React from "react";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import { List, Avatar, Button } from "antd";

export default function RenderMovie(props) {
  const {
    movie: { id, title, poster_path },
  } = props;

  const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`;

  return (
    <List.Item>
      <List.Item.Meta
        avatar={<Avatar src={posterPath} />}
        title={<Link to={`/movie/${id}`}>{title}</Link>}
      />

      <Link to={`/movie/${id}`}>
        <Button type="primary" shape="circle" icon={<RightOutlined />}></Button>
      </Link>
    </List.Item>
  );
}
