import React, { useState } from "react";
import MultipleItems from "./cardPicler";

const CardMakerForm = (props) => {
  const [step, setStep] = useState(0);
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");

  const nextStep = () => {
    if ((sender !== "", receiver !== "", message !== "")) {
      let temp = step;
      temp += 1;
      setStep(temp);
    }
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
          <div className="input__container">
            <label htmlFor="sender" className="card-maker__label">
              What’s your name ?
            </label>
            <input
              type="text"
              name=""
              id="sender"
              className={
                sender !== "" ? "card-maker__input" : "card-maker__input "
              }
              onChange={(e) => handleInput(e.target.value, setSender)}
              value={sender}
            />
            {(sender !== "") & (sender.length > 2) ? (
              ""
            ) : (
              <small className="card-maker__small">Sender name is needed</small>
            )}
          </div>
          <div className="input__container">
            <label htmlFor="receiver" className="card-maker__label">
              What’s the receiver name ?
            </label>
            <input
              type="text"
              name=""
              id="receiver"
              className="card-maker__input"
              onChange={(e) => handleInput(e.target.value, setReceiver)}
              value={receiver}
            />
            {(receiver !== "") & (receiver.length > 2) ? (
              ""
            ) : (
              <small className="card-maker__small">
                Receiver name is needed
              </small>
            )}
          </div>
          <div className="input__container --last">
            <label htmlFor="message" className="card-maker__label">
              What’s the special message ?
            </label>
            <textarea
              type="text"
              name=""
              value={message}
              id="message"
              className="card-maker__input"
              onChange={(e) => handleInput(e.target.value, setMessage)}
            />
            {(message !== "") & (message.length > 2) ? (
              ""
            ) : (
              <small className="card-maker__small">Message is needed</small>
            )}
          </div>

          <button
            className="btn--small"
            onClick={(e) => nextStep()}
            disabled={sender === "" || receiver === "" || message === ""}
          >
            Next step
          </button>
        </div>
      ) : (
        ""
      )}
      {(window.innerWidth < 995) & (step >= 1) ? (
        <MultipleItems
          cardInfo={[sender, receiver, message]}
          cardsList={props.cardsOption}
          nextStep={nextStep}
          step={step}
        />
      ) : (
        ""
      )}
    </main>
  );
};

export default CardMakerForm;
