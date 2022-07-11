import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Nabar = () => {
  return (
    <nav id="nav">
      <NavLink to="/">
        <img src={logo} alt="123" className="logo" />
      </NavLink>
      <ul className="links_list">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/portifolio">Portifolio</NavLink>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/luiz-alberto-albuquerque/">
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/luizAlbuquerque0">
            <BsGithub />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nabar;
