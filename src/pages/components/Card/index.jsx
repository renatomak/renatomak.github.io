import React from "react";
import appRecipes from '../../../img/app-recipes.png'

function Card(props) {
  const { title1, title2, image, moreInfo} = props.item;
  return (
    <div >
      <a href={moreInfo}>
        <img src={image}alt='Imagem do projeto' />
        <div >
          <div >
            <h1>{title1}</h1>
            <h2>{title2}</h2>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
