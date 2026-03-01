import React from 'react'
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <Outlet />
      <p>Clique aqui se deseja voltar a página inicial:</p>
      <Link to="/">Home</Link>
    </div>
  )
}

export default Contact;