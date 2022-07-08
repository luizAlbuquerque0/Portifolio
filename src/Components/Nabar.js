import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"

const Nabar = () => {
  return (
    <nav id="nav">
        <NavLink to="/"><img src={logo} alt="123" className="logo" /></NavLink>
        <ul className="links_list">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Portifolio</NavLink></li>   
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
        
    </nav>
  )
}

export default Nabar