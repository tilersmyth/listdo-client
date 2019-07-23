import * as React from "react";
import { Typography, withStyles, Grid } from "@material-ui/core";
import { StyleRules } from "@material-ui/styles";

type Props = {
  label: string;
  classes: any;
};

const styles = (): StyleRules => ({
  root: {
    flexGrow: 1,
    minHeight: "80vh"
  }
});

const AuthLayout: React.FunctionComponent<Props> = ({
  children,
  label,
  classes
}) => (
  <Grid
    container
    justify="center"
    className={classes.root}
    alignItems="center"
    spacing={2}
  >
    <Grid item lg={3} md={5} sm={8} xs={10}>
      <Typography variant="h4" align="center" gutterBottom>
        {label}
      </Typography>
      {children}
    </Grid>
  </Grid>
);

export default withStyles(styles)(AuthLayout);
