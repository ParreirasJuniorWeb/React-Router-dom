// import Navbar component
import Navbar from "../components/Navbar";

// import Search Form Component
import SearchForm from "../components/SearchForm";

// import useFetch hook
import { useFetch } from "../hooks/useFetch";

import { Link, useSearchParams } from "react-router-dom";

const Search = () => {

  const [ searchParams ] = useSearchParams();

  const url = "http://localhost:3000/products?" + searchParams;
  
  const { data: items } = useFetch(url);
  
  if(!items) return <p>Carregando...</p>

  if(items.lenght < 0) return <p>Não encontrado o item mencionado na barra de pesquisa.</p>

  return (
    <div>
      <Navbar />
      <SearchForm />
      <h1>Resultado de pesquisa</h1>
      <ul className="products">
          {items && items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$ {item.price}</p>

              {/* 7 - Rota dinâmica  */}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Search;