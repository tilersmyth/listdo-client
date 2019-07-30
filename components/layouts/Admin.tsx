import React, { Component } from "react";
import { withStyles, StyleRules, Theme } from "@material-ui/core/styles";

import Header from "./Header";
import { CurrentUserComponent } from "../../generated/apolloComponents";

type Props = {
  classes: any;
};

const styles = (theme: Theme): StyleRules => ({
  root: {
    flexGrow: 1
  },
  content: {
    padding: theme.spacing(3)
  }
});

class AdminLayout extends Component<Props> {
  static async getInitialProps({  }: any) {
    console.log("hello");
    return { userStore: "poop" };
  }

  render() {
    const { classes, children } = this.props;

    return (
      <CurrentUserComponent>
        {() => {
          // if (error || !data || !data.currentUser) {
          //   Router.push("/login");
          // }

          return (
            <div className={classes.root}>
              <Header />
              <div className={classes.content}>{children}</div>
            </div>
          );
        }}
      </CurrentUserComponent>
    );
  }
}

export default withStyles(styles)(AdminLayout);
