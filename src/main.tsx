import React from "react";
import ReactDOM from "react-dom/client";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./styles/index.css";

import { App } from "./App.tsx";
import { CHARACTER_PAGE, MAIN_PAGE } from "./routes/app.ts";
import { CharacterPage, MainPage } from "./pages";

const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
);
