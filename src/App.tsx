import { useState } from "react";
import { consumeMessageFromQueue, sendMessageToQueue } from "./lib/mq";

function App() {
  const [receivedMessage, setReceivedMessage] = useState("");

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

  const handleConsumeMessage = async () => {
    const response = await consumeMessageFromQueue();
    if (response) {
      setReceivedMessage(response.message);
    }
  };

  return (
    <div className="App">
      <h1>Anonymous Mail</h1>

      <textarea id="message" placeholder="Digite aqui sua mensagem." />

      <button onClick={handleSendMessage}>Send</button>
      <button onClick={handleConsumeMessage}>Consume</button>

      {receivedMessage && (
        <div>
          <h2>Mensagem Recebida:</h2>
          <p>{receivedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default App;
