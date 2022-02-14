import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./sass/ui-elements.scss";
import "./sass/app.scss";
import App from "./App";
import store from "./stores/store";
import { createBrowserHistory } from "history";
import { getAuthUser } from "./actions/auth-actions/actions";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
// RCE CSS
import ScrollToTop from "./tools/ScrollToTop";
import Capitalize from 'capitalize';

export const history = createBrowserHistory();


declare global {
  interface Window {
    capitalize: (parm: string) => string;
  }
}

window.capitalize = Capitalize || {};

let authentification : any = localStorage.getItem("domicilier_authentificated");

const WrappedApp = ({ children }: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (authentification) {
      authentification = JSON.parse(authentification);
      dispatch(getAuthUser(authentification.isLoggedIn));
    }
  });
  return (
    <>
      {children}
    </>
  );
};

if (document.getElementById("root")) {
  ReactDOM.render(
    <Provider store={store}>
      <WrappedApp>
        <Router>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </Router>
      </WrappedApp>
    </Provider>,
    document.getElementById("root")
  );
}
