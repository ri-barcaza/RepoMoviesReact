import React from "react";
import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuTop from "./components/MenuTop";
import Home from "./pages/home";
import NewMovies from "./pages/new-movies";
import Popular from "./pages/popular";
import Search from "./pages/search";
import Movie from "./pages/movie";
import Error404 from "./pages/error404";

function App() {
  const { Header, Content } = Layout;

  return (
    <Layout>
      <Router>
        <Header style={{ zIndex: 1 }}>
          <MenuTop />
        </Header>

        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-movies" element={<NewMovies />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie">
              <Route path=":id" element={<Movie />} />
            </Route>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Content>
      </Router>
    </Layout>
  );
}

export default App;
