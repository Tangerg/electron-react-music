import React, { PureComponent } from "react";
import BasicLayout from "./layout/BasicLayout";
import "./styles/index.less";

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <BasicLayout />
      </div>
    );
  }
}

export default App;
