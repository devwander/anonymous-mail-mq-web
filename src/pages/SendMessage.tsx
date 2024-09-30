import React from "react";
import styled from "styled-components";
import { sendMessageToQueue } from "../lib/mq";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 600px;
  margin: auto;

  h1 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  textarea {
    width: 100%;
    height: 150px;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: none;

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }

  button {
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.5em;
    }

    textarea {
      height: 100px;
    }

    button {
      width: 100%;
    }
  }
`;

const SendMessage: React.FC = () => {
  const handleSendMessage = () => {
    const messageElement = document.getElementById(
      "message"
    ) as HTMLTextAreaElement;

    if (messageElement) {
      const message = messageElement.value;

      if (message) {
        sendMessageToQueue(message);
        messageElement.value = "";
      } else {
        alert("Please enter a message.");
      }
    }
  };

  return (
    <Container>
      <h1>Enviar Mensagem</h1>
      <textarea id="message" placeholder="Digite aqui sua mensagem." />
      <button onClick={handleSendMessage}>Send</button>
    </Container>
  );
};

export default SendMessage;
