import "./assets/css/App.css";
import HomePage from "./components/homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CardMaker from "./components/cardMaker";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/create" exact>
            <CardMaker />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
