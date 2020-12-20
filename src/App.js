import "./assets/css/App.css";
import React, { useState } from "react";
import HomePage from "./components/homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardMaker from "./components/cardMaker";
import Header from "./components/header";
import CardPicker from "./components/cardPicler";
import Result from "./components/result";

function App() {
  const [step, setStep] = useState(0);
  const [infos, setInfos] = useState({
    sender: "",
    receiver: "",
    message: "",
    img: "",
    color: "",
  });

  const setInformations = (values) => {
    let temp = infos;
    values.forEach((value) => {
      temp[value.key] = value.value;
    });
    setInfos(temp);
  };

  const nextStep = (object) => {
    setInformations(object);
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
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/create" exact>
            <Header lastStep={lastStep} />
            <div className="container">
              {step === 0 && window.innerWidth < 994 ? (
                <CardMaker
                  nextStep={nextStep}
                  cardInfo={[infos.sender, infos.receiver, infos.message]}
                />
              ) : (
                ""
              )}
              {step < 2 && window.innerWidth > 995 ? (
                <main className="row">
                  <CardMaker
                    nextStep={nextStep}
                    step={step}
                    cardInfo={[infos.sender, infos.receiver, infos.message]}
                  />
                  <CardPicker
                    step={step}
                    nextStep={nextStep}
                    cardInfo={[infos.sender, infos.receiver, infos.message]}
                  />
                </main>
              ) : (
                ""
              )}
              {step === 1 && window.innerWidth < 995 ? (
                <CardPicker
                  step={step}
                  nextStep={nextStep}
                  cardInfo={[infos.sender, infos.receiver, infos.message]}
                />
              ) : (
                ""
              )}
              {step === 2 ? <Result infos={infos} /> : ""}
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
