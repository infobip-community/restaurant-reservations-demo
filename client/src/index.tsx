import React from "react";
import * as ReactDOM from "react-dom";
import App from "./app/App";
import { Router } from "@reach/router"
import ConfigPage from "./pages/Config";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <App path={'/'}/>
          <ConfigPage path={'config'}/>
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
