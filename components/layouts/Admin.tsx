import * as React from "react";
import { withStyles, StyleRules } from "@material-ui/core/styles";

import Header from "./Header";

type Props = {
  classes: any;
};

const styles = (): StyleRules => ({
  root: {
    flexGrow: 1
  }
});

const AdminLayout: React.FunctionComponent<Props> = ({ children, classes }) => (
  <div className={classes.root}>
    <Header />
    {children}
  </div>
);

export default withStyles(styles)(AdminLayout);
