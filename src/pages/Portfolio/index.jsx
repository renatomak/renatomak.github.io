import React from "react";
import Caminho from "../components/Caminho";
import data from './data';
import Card from '../components/Card';

function Portfolio() {
  {console.log(data);}
  return (
    <>
      <Caminho page="Portfolio" />
      <div className="main">
        <h1>Portfolio</h1>
        {data.map((item) => <Card item={ item }/>)
          }
        <br />
        <a className="back-link" href="index.html">
          &larr; Voltar ao início
        </a>
      </div>
    </>
  );
}

export default Portfolio;
