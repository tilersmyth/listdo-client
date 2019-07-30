import React from "react";
import Router from "next/router";

import { CurrentUserComponent } from "../generated/apolloComponents";
import UserContext from "../stores/UserStore";

export const withAuth = <T extends Object>(
  C: React.ComponentClass<T> | React.FunctionComponent<T>
): React.ComponentType<T> | React.FunctionComponent<T> => {
  return class AuthComponent extends React.Component<T> {
    render() {
      return (
        <CurrentUserComponent>
          {({ data, error }) => (
            <UserContext.Consumer>
              {props => {
                if (error || !data || !data.currentUser) {
                  props.setUser(null);
                  Router.replace("/login");
                  return;
                }

                props.setUser(data.currentUser);

                return <C {...this.props} />;
              }}
            </UserContext.Consumer>
          )}
        </CurrentUserComponent>
      );
    }
  };
};
