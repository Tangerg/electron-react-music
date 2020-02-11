import React, { PureComponent } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BasicLayout from "./layout/BasicLayout";
import "./styles/index.less";

class App extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={BasicLayout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
