import React from "react";
import { List } from "antd";
import RenderMovie from "./RenderMovie";
import Loading from "../Loading";
import "./ListMovies.scss";

export default function ListMovies(props) {
  const { title, movies } = props;

  if (movies.loading || !movies.result) {
    return <Loading />;
  }

  return (
    <List
      className="movie-list"
      size="default"
      header={<h2>{title}</h2>}
      bordered
      dataSource={movies.result.results}
      renderItem={(movie) => <RenderMovie movie={movie} />}
    />
  );
}
