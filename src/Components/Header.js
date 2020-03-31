import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <header>
    <ul>
      <li>
        <Link to="/">movies</Link>
      </li>
      <li>
        <Link to="/tv">tv</Link>
      </li>
      <li>
        <Link to="/search">search</Link>
      </li>
    </ul>
  </header>
);
