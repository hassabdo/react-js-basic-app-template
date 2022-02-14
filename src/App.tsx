import React from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import WideLayout from "./layouts/WideLayout";

const App = ({ history }: any) => {
  return (
    <Route
      render={({ location }: any) => (
        <Switch location={location}>
          <Redirect
            from='*'
            to='/404'
          />
        </Switch>
      )}
    />
  );
};

const MainLayoutRoute = ({ component: Component, ...rest } : any) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <MainLayout location={props.location}>
          <Component {...props} />
        </MainLayout>
      )}
    />
  );
};

const WideLayoutRoute = ({ component: Component, ...rest } : any) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <WideLayout location={props.location}>
          <Component {...props} />
        </WideLayout>
      )}
    />
  );
};

export default withRouter(App);
