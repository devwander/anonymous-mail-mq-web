import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  font-family: Arial, sans-serif;
  height: 100vh; /* Garante que o contêiner ocupe toda a altura da tela */
`;

const Sidebar = styled.div`
  background-color: #343a40;
  color: #fff;
  width: 250px;
  padding: 20px;
  // height: 100%; /* Garante que a sidebar ocupe toda a altura disponível */

  h1 {
    cursor: pointer;
    font-size: 1.8em;
    margin-bottom: 20px;
    text-align: center;

    &:hover {
      color: #007bff;
    }
  }

  nav {
    ul {
      list-style: none;
      padding: 0;

      li {
        margin: 15px 0;

        a {
          color: #fff;
          text-decoration: none;
          font-size: 1.2em;

          &:hover {
            color: #007bff;
          }
        }
      }
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    height: auto;

    h1 {
      font-size: 1.5em;
    }

    nav {
      ul {
        li {
          text-align: center;
        }
      }
    }
  }
`;

const Detail = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto; /* Adicionado para permitir rolagem se o conteúdo exceder a altura */
`;

const Message = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #e9ecef;
  border-radius: 4px;
  text-align: center;
  font-size: 1.5em;
  max-width: 600px;
`;

const Copyright = styled.footer`
  margin-top: auto; /* Faz o copyright ficar no final do container */
  padding: 10px;
  font-size: 0.9em;
  text-align: center;
  color: #666;
`;

export default function Root() {
  const location = useLocation();

  return (
    <Container>
      <Sidebar>
        <h1 onClick={() => (window.location.href = "/")}>Correio Anônimo</h1>
        <nav>
          <ul>
            <li>
              <a href={`/send`}>Enviar Mensagem</a>
            </li>
            <li>
              <a href={`/consume`}>Receber Mensagem</a>
            </li>
          </ul>
        </nav>
      </Sidebar>
      <Detail>
        {location.pathname === "/" && (
          <>
            <img
              src="src/assets/imgs/logo.png"
              alt="Correio Anônimo"
              style={{ width: "200px", marginBottom: "20px" }}
            />
            <Message>
              Esta aplicação permite enviar e receber mensagens anonimamente.
              Use o menu para navegar! Aproveite a experiência de compartilhar
              seus pensamentos de forma segura e discreta!
            </Message>
          </>
        )}
        <Outlet />
        <Copyright>
          &copy; {new Date().getFullYear()} devwander, pk-jhon, joao-firmino
        </Copyright>
      </Detail>
    </Container>
  );
}
