import React from "react";
import { Link } from "react-router-dom";
import { ALink } from "./styled";

function LinkVoltar() {
  return (
    <ALink>
      <Link to="/">&larr; Voltar ao início</Link>
    </ALink>
  );
}

export default LinkVoltar;
