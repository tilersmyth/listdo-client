import * as React from "react";
import { Theme, Button, Menu, MenuItem } from "@material-ui/core";
import Router from "next/router";

import { StyleRules, withStyles } from "@material-ui/styles";
import { MeComponent, LogoutDocument } from "../../apollo/generated-components";

interface Props {
  classes: any;
}

const styles = (_: Theme): StyleRules => ({});

const HeaderMenu: React.FunctionComponent<Props> = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <MeComponent>
      {({ data, client }) => {
        const me = data && data.me;

        if (!me) {
          throw "user not in cache";
        }

        const handleLogout = () => {
          client.mutate({ mutation: LogoutDocument });
          Router.push("/login");
        };

        return (
          <React.Fragment>
            <Button
              color="inherit"
              aria-controls="user-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              {me.firstName}
            </Button>
            <Menu
              id="user-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </React.Fragment>
        );
      }}
    </MeComponent>
  );
};

export default withStyles(styles)(HeaderMenu);
