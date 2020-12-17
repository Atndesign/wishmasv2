import React from "react";

const HomePage = () => {
  return (
    <main className="homepage">
      <div className="row">
        <div className="col-lg-6 text-center">
          <img
            className="homepage__img"
            src="./img/christmas-tree.png"
            alt="Tree"
            srcset="./img/christmas-tree.svg"
          />
          <h1 className="homepage__title">Christmas</h1>
          <p className="homepage__subtitle">Card generator</p>
        </div>
        <div className="col-lg-6">
          <div className="button-container">
            <a href="/create" className="homepage__button">
              Create my card
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
