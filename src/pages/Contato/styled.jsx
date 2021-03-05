import styled from "styled-components";

export const ContatoContainer = styled.div`
  margin-left: 150px;
  margin-bottom: 3rem;
  line-height: 50px;

  animation-name: conteudo;
  animation-duration: 2s;
  
  h3 {
    color: #f27609;
    text-transform: uppercase;
  }

  p {
    color: #e7e2e2;
    font-weight: 300;
    font-size: 2rem;
  }

  .social-img {
    margin: 20px;
    font-size: 3rem;
  }

  @keyframes conteudo {
  0% {
    opacity: 0;
    transform: translate(-20px, 0px);
  }
  100% {
    opacity: 1;
    transform: translate(0px, 0px);
  }
}
`;
