import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from './styled';

const index = () => {
  return (
    <Navigation id="navigation" class="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/curriculo">Currículo</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
        <li id="threeline-icon" class="threeline-icon" onclick="openNav()">
          &#9776;
        </li>
      </ul>
    </Navigation>
  );
};

export default index;
