import React from "react";
import Header from "./header";

const CardMaker = () => {
  return (
    <main className="card-maker">
      <Header />
      <label htmlFor="sender" className="card-maker__label">
        What’s your name ?
      </label>
      <input type="text" name="" id="sender" className="card-maker__input" />
      <label htmlFor="receiver" className="card-maker__label">
        What’s the receiver name ?
      </label>
      <input type="text" name="" id="receiver" className="card-maker__input" />
      <label htmlFor="message" className="card-maker__label">
        What’s the special message ?
      </label>
      <textarea
        type="text"
        name=""
        id="message"
        className="card-maker__input"
      />
    </main>
  );
};

export default CardMaker;
