import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss";

export default function Error() {
  return (
    <div className="error">
      <h1>Error404</h1>
      <h2>Página no encontrada</h2>
      <Link to="/">
        <h3>
          <u>Volver al inicio</u>
        </h3>
      </Link>
    </div>
  );
}
