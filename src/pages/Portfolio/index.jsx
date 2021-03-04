import React from "react";
import Caminho from "../components/Caminho";
import data from "./data";
import Card from "../components/Card";
import { ContainerCards, ALink, PContainer } from "./styled";

function Portfolio() {
  return (
    <PContainer>
      <Caminho page="Portfolio" />
      <ContainerCards className="main">
        {data.map((item) => (
          <Card item={item} />
        ))}
        <br />
      </ContainerCards>
      <ALink className="back-link" href="index.html">
        &larr; Voltar ao início
      </ALink>
    </PContainer>
  );
}

export default Portfolio;
