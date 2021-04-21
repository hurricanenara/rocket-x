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

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/launches" component={Launches} />
          <Route path="/rockets" component={Rockets} />
          <Route path="/" component={Home} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
