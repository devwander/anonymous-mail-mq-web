import React, { useState } from "react";
import styled from "styled-components";
import { consumeMessageFromQueue } from "../lib/mq";

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

  button {
    padding: 10px 20px;
    font-size: 1em;
    color: #fff;
    background-color: #28a745;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #218838;
    }
  }

  .message-container {
    margin-top: 20px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    background-color: #f8f9fa;

    h2 {
      margin: 0 0 10px 0;
      font-size: 1.5em;
    }

    p {
      font-size: 1em;
      color: #333;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.5em;
    }

    button {
      width: 100%;
    }

    .message-container {
      padding: 5px;
    }
  }
`;

const ConsumeMessage: React.FC = () => {
  const [receivedMessage, setReceivedMessage] = useState<string | null>(null);

  const handleConsumeMessage = async () => {
    const message = await consumeMessageFromQueue();
    if (message) {
      setReceivedMessage(message.message); // Acesse a propriedade correta do objeto
    }
  };

  return (
    <Container>
      <h1>Receber Mensagem</h1>
      <button onClick={handleConsumeMessage}>Consume</button>
      {receivedMessage && (
        <div className="message-container">
          <h2>Mensagem Recebida:</h2>
          <p>{receivedMessage}</p>
        </div>
      )}
    </Container>
  );
};

export default ConsumeMessage;
