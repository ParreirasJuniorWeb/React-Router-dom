// import useFetch hook
import { useFetch } from "../hooks/useFetch";

const url = "http://localhost:3000/products";

// 7 - rota dinâmica 
import { Link } from "react-router-dom";

const Home = () => {

  const {data: items} = useFetch(url);

  if(!items) return <p>Carregando...</p>

  return (
    <div className="Home">
        <h1>Home!</h1>

        {/* Carregamento de dados */}
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

export default Home;