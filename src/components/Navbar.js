import React from 'react';
import {Link} from "gatsby";
import {FiAlignJustify} from "react-icons/fi";
import logo from "../assets/img/logo.png";

const Navbar = () => {
const [show, setShow]=React.useState(true);
  return (
    <nav className="navbar">
        <div className="nav-center">
            <div className="nav-header">
            <Link to="/"><img src={logo} alt="recipes"></img></Link>
            <button className="btn nav-btn" onClick={()=> setShow(!show)}>
            <FiAlignJustify style={{fontSize: "1.2rem"}}></FiAlignJustify></button>
            </div>
            <div className={show ? "nav-links show-links" : "nav-links"}>
                  <Link to="/" className="nav-link vlink" activeClassName="active-link">Home</Link>
                  <Link to="/recipes" className="nav-link vlink" activeClassName="active-link">Recipes</Link>
                  <Link to="/tags" className="nav-link vlink" activeClassName="active-link">Tags</Link>
                  <Link to="/about" className="nav-link vlink" activeClassName="active-link">About</Link>
              <div className="contact-link">
                <Link to="/contact" className="btn contact-btn">Contact</Link>
              </div>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
