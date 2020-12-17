import React, { useState } from "react";
import MultipleItems from "./cardPicler";

const CardMakerForm = (props) => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    let temp = step;
    temp += 1;
    setStep(temp);
  };

  const lastStep = () => {
    let temp = step;
    if (!temp - 1 < 0) {
      temp -= 1;
      setStep(temp);
    }
  };

  return (
    <main className="card-main col-lg-6">
      {step === 0 ? (
        <div className="card-maker">
          <label htmlFor="sender" className="card-maker__label">
            What’s your name ?
          </label>
          <input
            type="text"
            name=""
            id="sender"
            className="card-maker__input"
          />
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
          <button className="card-maker__btn" onClick={(e) => nextStep()}>
            Next step
          </button>
        </div>
      ) : (
        ""
      )}
      {(window.innerWidth < 995) & (step === 1) ? (
        <MultipleItems cardsList={props.cardsOption} />
      ) : (
        ""
      )}
    </main>
  );
};

export default CardMakerForm;
