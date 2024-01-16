import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CHARACTER_PAGE, MAIN_PAGE } from "./routes/app.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: MAIN_PAGE,
        element: <h1>Characters</h1>,
      },
      {
        path: CHARACTER_PAGE(":id"),
        element: <h1>Character Page!</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
