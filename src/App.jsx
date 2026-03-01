import './App.css'

import { Outlet } from "react-router-dom";

// 5 - link entre páginas
import Navbar from "./components/Navbar";

// import Search Form Component
import SearchForm from "./components/SearchForm";

function App() {

  return (
    <>
      <header>
        <p>
          Navbar
        </p>
        <Navbar />
        <SearchForm />
        <hr />
        <h1>React Router Dom</h1>
        <p>Exemplo de uso do React Router Dom para criar rotas e renderizar elementos</p>
      </header>
      <main>
        <small> main </small>
        <Outlet />
      </main>
      <hr />
      <footer>
        <small>
          footer
        </small>
        <p>All rights reserved</p>
      </footer>
    </>
  )
}

export default App;