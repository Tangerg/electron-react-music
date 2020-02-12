import React, { PureComponent } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BasicLayout from "./layout/BasicLayout";
import "./styles/index.less";
import { render } from "./router";

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>{render}</Switch>
      </Router>
    );
  }
}

export default App;
