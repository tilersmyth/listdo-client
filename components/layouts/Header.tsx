import * as React from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import { withStyles, Theme, StyleRules } from "@material-ui/core/styles";

import CreateBoard from "../dialogs/CreateBoard";
import HeaderMenu from "./HeaderMenu";

type Props = {
  classes: any;
};

const styles = (theme: Theme): StyleRules => ({
  appBar: {
    backgroundColor: theme.palette.common.white
  },
  title: {
    flexGrow: 1
  }
});

class Header extends React.Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static" elevation={1}>
        <Toolbar className={classes.appBar}>
          <Typography variant="h6" className={classes.title}>
            listdo
          </Typography>
          <CreateBoard />
          <HeaderMenu />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
