// import useFetch hook
import { useFetch } from "../hooks/useFetch";

import { useParams, Link } from "react-router-dom";

const Product = () => {
    
    const { id } = useParams();

    const url = "http://localhost:3000/products/" + id;

    const { data: product } = useFetch(url);

    if(!product) return <p>Carregando....</p>

  return (
    <div className="productID">
      <p>ID do produto: {id}</p>
      <h1>{product.name}</h1>
      <p>R$ {product.price}</p>

      {/* 8 - nested route ou links/rotas aninadas  */}
      <Link to={`/products/${product.id}/info`}>Mais informações</Link>
      <p>Voltar para a página principal:</p>
      <Link to="/">Voltar para a Home</Link>
    </div>
  );
};

export default Product;