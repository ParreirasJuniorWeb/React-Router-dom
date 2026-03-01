import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <navbar>
      {/* <Link to="/">Home</Link>{" "}
        <Link to="/contact">Contatos</Link> */}
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/contact"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contact
      </NavLink>
    </navbar>
  );
};

export default Navbar;