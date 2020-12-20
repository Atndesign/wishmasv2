import React, { useState } from "react";
import MultipleItems from "./cardPicler";

const CardMakerForm = (props) => {
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");

  const handleInput = (val, variable) => {
    variable(val);
  };

  return (
    <div className="card-main col-lg-6">
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
            <small className="card-maker__small">Receiver name is needed</small>
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
        {window.innerWidth < 995 ? (
          <button
            className="btn--small"
            onClick={(e) =>
              props.nextStep([
                {
                  key: "sender",
                  value: sender,
                },
                {
                  key: "receiver",
                  value: receiver,
                },
                {
                  key: "message",
                  value: message,
                },
              ])
            }
            disabled={sender === "" || receiver === "" || message === ""}
          >
            Next step
          </button>
        ) : (
          ""
        )}
        {window.innerWidth > 996 && props.step === 0 ? (
          <button
            className="btn--small"
            onClick={(e) =>
              props.nextStep([
                {
                  key: "sender",
                  value: sender,
                },
                {
                  key: "receiver",
                  value: receiver,
                },
                {
                  key: "message",
                  value: message,
                },
              ])
            }
            disabled={sender === "" || receiver === "" || message === ""}
          >
            Next step
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CardMakerForm;
