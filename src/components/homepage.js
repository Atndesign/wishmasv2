import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import gsap from "gsap";

const HomePage = () => {
  useEffect(() => {
    gsap.from(".homepage__img", { x: 300, duration: 1, opacity: 0 });
    gsap.from(".left__content", {
      y: 200,
      duration: 1,
      delay: 1,
      ease: "sine",
      opacity: 0,
    }); //wait 1 second
    gsap.from(".button-container", {
      y: 200,
      duration: 2,
      delay: 1,
      ease: "sine",
      opacity: 0,
    }); //wait 1 second
  }, []);

  return (
    <main className="homepage col-12">
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
              <Link to="/create">Create my card</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
