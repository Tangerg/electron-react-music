import React, { PureComponent } from "react";
import BasicLayout from "./layout/BasicLayout";
import "./styles/index.less";
import { BrowserRouter, Route } from "react-router-dom";

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter basename="/">
        <Route path="/">
          <div className="App">
            <BasicLayout />
          </div>
        </Route>
      </BrowserRouter>
    );
  }
}

export default App;
