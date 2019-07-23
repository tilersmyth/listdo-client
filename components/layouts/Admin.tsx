import * as React from "react";
import { withStyles, StyleRules, Theme } from "@material-ui/core/styles";

import Header from "./Header";

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

const AdminLayout: React.FunctionComponent<Props> = ({ children, classes }) => (
  <div className={classes.root}>
    <Header />
    <div className={classes.content}>{children}</div>
  </div>
);

export default withStyles(styles)(AdminLayout);
