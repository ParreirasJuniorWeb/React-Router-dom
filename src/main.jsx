import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// 1 - Importando o Router
// Componentes do React Router Dom para criar as rotas e renderizar os elementos
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

// importando elemento para ser renderizado quando a rota for acessada
import Contact from "./routes/Contact.jsx";

// importando elemento para ser renderizado quando a rota for acessada
// e caso haja um erro na rota
import ErrorPage from "./routes/ErrorPage.jsx";

import Home from "./routes/Home.jsx";

// 7 - rota dinâmica
import Product from "./routes/Product";

// 8 - rotas dinamicamente aninhadas
import Info from "./routes/Info";

// 9 - Search params
import Search from "./routes/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // 3 - Componente base para ser renderizado quando a rota for acessada
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  // 7 - rota dinâmica
  {
    path: "products/:id",
    element: <Product />,
  },
  // 8 - rotas aninhadas ou links dinâmicos aninhados
  {
    path: "/products/:id/info",
    element: <Info />,
  },
  // 9 - search
  {
    path: "search",
    element: <Search />,
  },
  // 10 - redirect
  {
    path: "teste",
    element: <Navigate to="/" />,
    // Redirect através de component 'Navigate', a nível de componente!
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);