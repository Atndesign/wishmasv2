import "./assets/css/App.css";
import React, { useState } from "react";
import HomePage from "./components/homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardMaker from "./components/cardMaker";
import Header from "./components/header";
import MultipleItems from "./components/cardPicler";

const cardsOption = [
  {
    name: "bg1",
    color: "#172830",
  },
  {
    name: "bg2",
    color: "#4B4B4B",
  },
  {
    name: "bg3",
    color: "#3E63A8",
  },
  {
    name: "bg4",
    color: "#978463",
  },
  {
    name: "bg5",
    color: "#A4A083",
  },
  {
    name: "bg6",
    color: "#4E6244",
  },
  {
    name: "bg7",
    color: "#1A2C38",
  },
  {
    name: "bg8",
    color: "#BD8844",
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [message, setMessage] = useState("");

  const nextStep = (sender, receiver, message) => {
    if ((sender !== "", receiver !== "", message !== "")) {
      let temp = step;
      temp += 1;
      setStep(temp);
    }
  };

  const lastStep = () => {
    let temp = step;
    if (!temp - 1 < 0) {
      temp -= 1;
      setStep(temp);
    }
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/create" exact>
            <Header lastStep={lastStep} />
            <div className="container">
              <div className="row">
                <CardMaker
                  cardsOption={cardsOption}
                  nextStep={nextStep}
                  step={step}
                  setSender={setSender}
                  sender={sender}
                  setReceiver={setReceiver}
                  receiver={receiver}
                  setMessage={setMessage}
                  message={message}
                />
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
