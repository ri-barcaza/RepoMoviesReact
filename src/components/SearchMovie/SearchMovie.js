import React, { useState, useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Row, Col, Input } from "antd";
import queryString from "query-string";
import { API_URL, API_KEY } from "../../utils/constants";
import MovieCatalog from "../MovieCatalog";
import Footer from "../Footer";
import "./SearchMovie.scss";

export default function SearchMovie(props) {
  const [listMovies, setListMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    (async () => {
      const search = queryString.parseUrl(location.search);
      const { s } = search.query;

      const response = await fetch(
        s
          ? `${API_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${s}&page=1`
          : `${API_URL}/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=${1}`
      );

      const movies = await response.json();
      setListMovies(movies);
      setSearchValue(s);
    })();
  }, [location.search]);

  const onChangeSearch = (e) => {
    const urlParams = queryString.parse(location.search);
    urlParams.s = e.target.value;
    setSearchParams(`?${queryString.stringify(urlParams)}`);
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Row className="search">
        <Col className="search__title" span={24}>
          <h1>Buscar Película</h1>
        </Col>
        <Col className="search__input" span={12} offset={6}>
          <Input value={searchValue} onChange={onChangeSearch} />
        </Col>
      </Row>

      <Row style={{ justifyContent: "center" }}>
        {listMovies.results && <MovieCatalog movies={listMovies} />}
      </Row>

      <Row>
        <Col span={24}>
          <Footer />
        </Col>
      </Row>
    </>
  );
}
