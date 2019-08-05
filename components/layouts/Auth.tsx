import * as React from "react";
import { Typography, withStyles, Grid, Paper, Theme } from "@material-ui/core";
import { StyleRules } from "@material-ui/styles";

type Props = {
  label: string;
  classes: any;
};

const styles = (theme: Theme): StyleRules => ({
  root: {
    flexGrow: 1,
    minHeight: "80vh"
  },
  paper: {
    padding: theme.spacing(3)
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
      <Paper className={classes.paper}>
        <Typography variant="h4" align="center" gutterBottom>
          {label}
        </Typography>
        {children}
      </Paper>
    </Grid>
  </Grid>
);

export default withStyles(styles)(AuthLayout);
