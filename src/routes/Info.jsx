import { useParams } from "react-router-dom";

// import useFetch hook
import { useFetch } from "../hooks/useFetch";

import { Link } from 'react-router-dom';

const Info = () => {

    const { id } = useParams();

    const url = "http://localhost:3000/products/" + id;

    const { data: product } = useFetch(url);

    if(!product) return <p>Carregando....</p>

  return (
    <div>
      <h1>Mais detalhes sobre o produto: { id } - { product.name }</h1>
      <h3>Preço deste produto: R${ product.price }</h3>
      <p>Voltar para a página principal:</p>
      <Link to="/">Voltar para a Home</Link>
    </div>
  )
}

export default Info;