import React from "react";
import "./App.css";
import {
  Link,
  Switch,
  Route,
  HashRouter,
  Router,
  hashHistory,
} from "react-router-dom";
import Launches from "./Launches/Launches";
import Logo from "./Logo/Logo";
import Rockets from "./Rockets/Rockets";
import Home from "./Home/Home";
import Launch from "./Launches/Launch";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/launches" component={Launches} />
          <Route exact path="/rockets" component={Rockets} />
          <Route exact path="/launches/:id" component={Launch} />
          <Route path="/" component={Home} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
