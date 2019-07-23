import * as React from "react";
import { Grid, Theme } from "@material-ui/core";

import { StyleRules, withStyles } from "@material-ui/styles";
import { Board } from "./types";
import { BoardCard } from "./BoardCard";

interface Props {
  classes: any;
  boards: Board[];
}

const styles = (_: Theme): StyleRules => ({
  root: {
    flexGrow: 1
  }
});

const C: React.FunctionComponent<Props> = ({ classes, boards }) => {
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {boards.map(board => {
          return (
            <Grid item xs={6} sm={4} key={board.id}>
              <BoardCard board={board} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export const BoardGrid = withStyles(styles)(C);
