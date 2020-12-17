import "./assets/css/App.css";
import HomePage from "./components/homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/create" exact>
            <div>HJellos</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
