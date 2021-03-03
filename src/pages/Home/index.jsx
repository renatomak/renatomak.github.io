import React from "react";
import renatoProfile from '../../img/renato-profile.jpg';

function Home() {
  return (
    <div class="capa">
      <div class="profile-pic">
        <img src={ renatoProfile } alt="Foto de Renato Marques" />
      </div>

      <div class="profile-title">
        <h1>
          Renato <span>Marques da Silva</span>
        </h1>
        <h2>Desenvolvedor Web | Front-end | HTML | CSS | React</h2>
      </div>
    </div>
  );
}

export default Home;
