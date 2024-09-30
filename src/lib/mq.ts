import axios, { AxiosInstance } from "axios";

export const mqSender: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_MQ_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const sendMessageToQueue = async (message: string): Promise<void> => {
  try {
    console.log("Enviando mensagem:", message);
    const response = await mqSender.post(`/send`, {
      message: message,
    });
    console.log("Mensagem enviada com sucesso:", response.data);
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
  }
};

export const mqConsumer: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_MQ_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const consumeMessageFromQueue = async (): Promise<{
  status: string;
  message: string;
} | null> => {
  try {
    const response = await mqConsumer.get(`/consume`);
    if (response.data) {
      console.log("Mensagem recebida:", response.data);
      return response.data;
    } else {
      console.log("Nenhuma mensagem disponível.");
      return null;
    }
  } catch (error) {
    console.error("Erro ao consumir mensagem:", error);
    return null;
  }
};
