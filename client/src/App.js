import React, {Component, Fragment} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Router from "./router.js";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router />
      </Fragment>
    );
  }
}

export default App;