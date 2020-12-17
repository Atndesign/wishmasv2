import React, { useState } from "react";
import Header from "./header";
import MultipleItems from "./cardPicler";

const CardMakerForm = (props) => {
  const [step, setStep] = useState(0);

  const nextStep = () => {};

  return (
    <main className="card-main col-lg-6">
      <div className="card-maker">
        <label htmlFor="sender" className="card-maker__label">
          What’s your name ?
        </label>
        <input type="text" name="" id="sender" className="card-maker__input" />
        <label htmlFor="receiver" className="card-maker__label">
          What’s the receiver name ?
        </label>
        <input
          type="text"
          name=""
          id="receiver"
          className="card-maker__input"
        />
        <label htmlFor="message" className="card-maker__label">
          What’s the special message ?
        </label>
        <textarea
          type="text"
          name=""
          id="message"
          className="card-maker__input --last"
        />
        <button className="card-maker__btn">Next step</button>
      </div>
      {(window.innerWidth < 995) & (step === 1) ? (
        <MultipleItems cardsList={props.cardsOption} />
      ) : (
        ""
      )}
    </main>
  );
};

export default CardMakerForm;
