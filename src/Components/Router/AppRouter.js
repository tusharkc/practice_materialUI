import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Form from "../User/Form.User";
import User from "../User/User";
import Auth from "../Auth";
import Drawer from "../Layout/Drawer";

function AppRouter() {
  return (
    <div>
      <Drawer />
      <Switch>
        <Route exact path="/" component={Form} />
        <PrivateRoute path="/users" component={User} />
      </Switch>
    </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Auth.getAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      )
    }
  />
);

export default AppRouter;
