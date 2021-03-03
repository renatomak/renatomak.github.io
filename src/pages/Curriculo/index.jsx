import React from "react";
import { Link } from "react-router-dom";
import renatoProfile from '../../img/renato-profile.jpg';

function Curriculo() {
  return (
    <div class="main">
      <ul class="caminho">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>{">"}</li>
        <li>Currículo</li>
      </ul>
      <h1>Currículo</h1>
      <h2>Dados Pessoais</h2>
      <hr />
      <img
        class="cv-pic"
        src={renatoProfile}
        alt="Foto de Renato Marques"
      />
      <h3>Nome:</h3>
      <p>Renato Marques da Silva</p>
      <h3>Data de Nascimento:</h3>
      <p>24/05/1981</p>
      <h3>Residência:</h3>
      <p>Goiânia-GO, Brasil</p>
      <h3>Idiomas:</h3>contato
      <p>Português (Nativo)</p>
      <h2>Sobre Mim</h2>
      <hr />
      <p>
        Com a experiência obtida no RH da minha empresa, descobri que gosto de
        lidar com pessoas e ajudá-las a resolver suas demandas. Estou em
        transição para a área de tecnologia, a qual sou apaixonado. Estudo
        Desenvolvimento Web, com módulo de Front-end já concluído. Entre as
        tecnologias/ferramentas estudadas estão: HTML, CSS, JavaScript, React e
        seu ecossistema.
      </p>
      <h2>Educação</h2>
      <hr />
      <h3>data-Em andamento</h3>
      <p>Curso / Mestrado / Universidade</p>
      <h3>data-data</h3>
      <p>Curso / Mestrado / Universidade</p>
      <h3>data-data</h3>
      <p>Curso / Mestrado / Universidade</p>
      <h2>Habilidades</h2>
      <hr />
      <h3>Tema 1</h3>
      <p>Habilidade 1/Habilidade 2...</p>
      <h3>Tema 1</h3>
      <p>Habilidade 1/Habilidade 2...</p>
      <h3>Tema 1</h3>
      <p>Habilidade 1/Habilidade 2...</p>
      <h3>Tema 1</h3>
      <p>Habilidade 1/Habilidade 2...</p>
      <h2>Experiência de Trabalho</h2>
      <hr />
      <h3>data-data</h3>
      <p>Função - empresa - local</p>
      <h3>data-data</h3>
      <p>Função - empresa - local</p>
      <h3>data-data</h3>
      <p>Função - empresa - local</p>
      <h2>Contato</h2>
      <hr />
      <p>renato.mark.silva@gmail.com</p>
      <p>(062) 9 9464-4482</p>
      <a class="back-link" href="index.html">
        &larr; Voltar ao início
      </a>
    </div>
  );
}

export default Curriculo;
