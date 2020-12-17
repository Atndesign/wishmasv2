import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="homepage">
      <div className="row">
        <div className="col-lg-6">
          <div className="homepage__left">
            <img
              className="homepage__img"
              src="./img/christmas-tree.png"
              alt="Tree"
              srcset="./img/christmas-tree.svg"
            />
            <div className="left__content">
              <h1 className="homepage__title">Christmas</h1>
              <p className="homepage__subtitle">Card generator</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 homepage__right">
          <p className="homepage__text">
            Tell how much you love the persons close to you
          </p>
          <div className="button-container">
            <p className="homepage__button">
              <Link to="/create">Home</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
