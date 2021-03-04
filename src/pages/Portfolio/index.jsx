import React from "react";
import Caminho from "../components/Caminho";
import data from "./data";
import Card from "../components/Card";
import { ContainerCards } from "./styled";

function Portfolio() {
  return (
    <>
      <Caminho page="Portfolio" />
      <h1>Portfolio</h1>
      <ContainerCards className="main">
        {data.map((item) => (
          <Card item={item} />
        ))}
        <br />
      </ContainerCards>
      <a className="back-link" href="index.html">
        &larr; Voltar ao início
      </a>
    </>
  );
}

export default Portfolio;
