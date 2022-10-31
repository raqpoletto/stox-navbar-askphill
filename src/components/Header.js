import React, { useState } from "react";
import logo from "../assets/logo.svg";
import bag from "../assets/bag.svg";
import "../style/Header.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <section className="navbar">
        <div className="navbar-hamburger">
          {isMenuOpen ? (
            <AiOutlineClose onClick={handleClick} />
          ) : (
            <AiOutlineMenu onClick={handleClick} />
          )}
        </div>

        <div className="navbar-logo">
          <img src={logo} alt="stox logo" />
        </div>
        <div className="navbar-bag">
          <img src={bag} className="shopping-bag" alt="shopping bag" />
        </div>
      </section>
    </>
  );
}

export default Header;
