import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <Link to="/">
        <img
          src="./img/christmas-tree.png"
          alt="Logo"
          srcset="./img/christmas-tree.svg"
          width="40"
          height="40"
        />
      </Link>
      <button className="header__btn" onClick={(e) => props.lastStep()}>
        Previous
      </button>
    </header>
  );
};

export default Header;
