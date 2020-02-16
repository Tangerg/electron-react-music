import React, { PureComponent, Suspense } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "myRouter/index";
import routes from "myRouter/routes";

import "./styles/index.less";

class App extends PureComponent {
  render() {
    return (
      <Suspense fallback={<div className="layout__loading">loading</div>}>
        <Router>{renderRoutes(routes)}</Router>
      </Suspense>
    );
  }
}

export default App;
