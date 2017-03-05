import React from "react";
import ReactDOM from "react-dom";
import { Router, hashHistory } from 'react-router';

import css from './index.css';

import { RxContextProvider } from "./containers/context";
import routes from "./routes";
import store from "./store";

ReactDOM.render(
  <RxContextProvider store$={store}>
    <Router history={hashHistory} routes={routes} />
  </RxContextProvider>,
  document.getElementById("content")
);

