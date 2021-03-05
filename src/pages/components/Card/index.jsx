import React from "react";
import { CardImg, ContainerCard } from "./styled";

function Card(props) {
  const { title1, title2, image, moreInfo, tipo } = props.item;
  return (
    <ContainerCard>
      <a href={moreInfo}>
        <CardImg className='card-img'>
          <img src={image} alt="Imagem do projeto" />
          <div className='text-houver'>
            <h1>{title1}</h1>
            <h2>{title2}</h2>
            <h3>{tipo}</h3>
          </div>
        </CardImg>
      </a>
    </ContainerCard>
  );
}

export default Card;
