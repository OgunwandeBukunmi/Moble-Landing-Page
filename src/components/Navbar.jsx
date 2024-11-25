import { useState } from "react";
import cross from "../assets/cross-small.svg";
import menu from "../assets/menu-burger.svg";
const Navabar = () => {
  const [showMenu, setShowMenu] = useState(false);

  function handleClick() {
    setShowMenu((previous) => !previous);
  }
  return (
    <header>
      <h1 className="text big">Landing</h1>
      <div className={showMenu ? "menu show" : "menu"}>
        <div>
          <a href="#" className="sec-text text">
            Home
          </a>
          <a href="#" className="sec-text text">
            About
          </a>
          <a href="#" className="sec-text text">
            Contact Us
          </a>
        </div>
        <a className=" action-button">Try Now</a>
      </div>
      <img
        src={showMenu ? cross : menu}
        alt="menu"
        className="icon hamburger"
        onClick={handleClick}
      ></img>
    </header>
  );
};

export default Navabar;
