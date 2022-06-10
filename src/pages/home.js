import React from "react";
import { Row, Col } from "antd";
import useFetch from "../hooks/useFetch";
import { API_URL, API_KEY } from "../utils/constants";
import SliderMovies from "../components/SliderMovies";
import ListMovies from "../components/ListMovies";
import Footer from "../components/Footer";

export default function Home() {
  const newMovies = useFetch(
    `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=es-CL&page=1`
  );

  const popularMovies = useFetch(
    `${API_URL}/movie/popular?api_key=${API_KEY}&language=es-CL&page=1`
  );

  const topRatedMovies = useFetch(
    `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=es-CL&page=1`
  );

  return (
    <div>
      <SliderMovies movies={newMovies} />
      <Row>
        <Col span={12}>
          <ListMovies title="Películas Populares" movies={popularMovies} />
        </Col>
        <Col span={12}>
          <ListMovies title="Top Películas" movies={topRatedMovies} />
        </Col>
      </Row>

      <Footer />
    </div>
  );
}
