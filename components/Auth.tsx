import React from "react";
import Router from "next/router";

import { CurrentUserComponent } from "../generated/apolloComponents";
import { Store } from "../stores";

export const withAuth = <T extends Object>(
  C: React.ComponentClass<T> | React.FunctionComponent<T>
): React.ComponentType<T> | React.FunctionComponent<T> => {
  return class AuthComponent extends React.Component<T> {
    render() {
      return (
        <CurrentUserComponent>
          {({ data, error }) => (
            <Store.Consumer>
              {({ userStore }) => {
                if (error || !data || !data.currentUser) {
                  userStore.setUser(null);
                  Router.replace("/login");
                  return;
                }

                userStore.setUser(data.currentUser);

                return <C {...this.props} />;
              }}
            </Store.Consumer>
          )}
        </CurrentUserComponent>
      );
    }
  };
};
