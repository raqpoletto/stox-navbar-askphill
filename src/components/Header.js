import React, { useState } from "react";
import Accordion from "./Accordion";
import logo from "./logo.svg";
import bag from "./bag.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
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
            <img src={bag} alt="shopping bag" />
          </div>
        </ul>
      </nav>
      {isMenuOpen && <Accordion />}
    </>
  );
}

export default Header;
