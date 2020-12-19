import React, { useState } from "react";
import MultipleItems from "./cardPicler";

const CardMakerForm = (props) => {
  const [step, setStep] = useState(0);
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");

  const nextStep = () => {
    let temp = step;
    temp += 1;
    setStep(temp);
  };

  const handleInput = (val, variable) => {
    variable(val);
  };
  //TODO make the last step work

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
            onChange={(e) => handleInput(e.target.value, setSender)}
          />
          <label htmlFor="receiver" className="card-maker__label">
            What’s the receiver name ?
          </label>
          <input
            type="text"
            name=""
            id="receiver"
            className="card-maker__input"
            onChange={(e) => handleInput(e.target.value, setReceiver)}
          />
          <label htmlFor="message" className="card-maker__label">
            What’s the special message ?
          </label>
          <textarea
            type="text"
            name=""
            id="message"
            className="card-maker__input --last"
            onChange={(e) => handleInput(e.target.value, setMessage)}
          />
          <button className="card-maker__btn" onClick={(e) => nextStep()}>
            Next step
          </button>
        </div>
      ) : (
        ""
      )}
      {(window.innerWidth < 995) & (step === 1) ? (
        <MultipleItems
          cardInfo={[sender, receiver, message]}
          cardsList={props.cardsOption}
        />
      ) : (
        ""
      )}
    </main>
  );
};

export default CardMakerForm;
