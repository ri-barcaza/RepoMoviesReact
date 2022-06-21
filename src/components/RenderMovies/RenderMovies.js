import React from "react";
import { Row, Col } from "antd";
import Loading from "../Loading";
import MovieCatalog from "../MovieCatalog";
import Pagination from "../PaginationMovies";
import Footer from "../Footer";

export default function RenderMovies(props) {
  const { movieList, onChangePage, title } = props;

  return (
    <Row>
      <Col span={24} style={{ textAlign: "center", marginTop: 25 }}>
        <h1 style={{ fontSize: 35, fontWeight: "bold" }}>{title}</h1>
      </Col>

      <Col span={24}>
        <Pagination
          currentPage={movieList.page}
          totalItems={movieList.total_results}
          onChangePage={onChangePage}
        />
      </Col>

      {movieList.results ? (
        <>
          <Col span={24}>
            <Row style={{ justifyContent: "center" }}>
              <MovieCatalog movies={movieList} />
            </Row>
          </Col>

          <Col span={24} style={{ marginTop: 50 }}>
            <Pagination
              currentPage={movieList.page}
              totalItems={movieList.total_results}
              onChangePage={onChangePage}
            />
          </Col>
        </>
      ) : (
        <Col span={24}>
          <Loading />
        </Col>
      )}

      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
}
