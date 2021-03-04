import React from "react";
import { Link } from "react-router-dom";
import { UlCaminho } from './styled';

function Caminho(props) {
  const { page } = props;
  return (
    <UlCaminho>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>{">"}</li>
      <li>{page}</li>
    </UlCaminho>
  );
}

export default Caminho;
