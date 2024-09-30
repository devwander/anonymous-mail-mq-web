import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.tsx";
import "./global.css";
import ConsumeMessage from "./pages/ConsumeMessage.tsx";
import SendMessage from "./pages/SendMessage.tsx";
import Root from "./routes/root.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "send",
        element: <SendMessage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "consume",
        element: <ConsumeMessage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
