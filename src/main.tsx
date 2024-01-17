import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CHARACTER_PAGE, MAIN_PAGE } from "./routes/app.ts";
import { CharacterPage, MainPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: MAIN_PAGE,
        element: <MainPage />,
      },
      {
        path: CHARACTER_PAGE(":id"),
        element: <CharacterPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
