import React from "react";

const Header = (props) => {
  return (
    <header className="header">
      <a href="/">
        <img
          src="./img/christmas-tree.png"
          alt="Logo"
          srcSet="./img/christmas-tree.svg"
          width="40"
          height="40"
        />
      </a>
      <button className="header__btn" onClick={(e) => props.lastStep()}>
        Previous
      </button>
    </header>
  );
};

export default Header;
