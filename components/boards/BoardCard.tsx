import * as React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  Theme
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import red from "@material-ui/core/colors/red";
import { StyleRules, withStyles } from "@material-ui/styles";

import BoardCardTabs from "./BoardCardTabs";
import { Board } from "./types";

interface Props {
  classes: any;
  board: Board;
}

const styles = (theme: Theme): StyleRules => ({
  root: {
    flexGrow: 1
  },
  tabs: {
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: theme.palette.grey[200]
  },
  content: {
    padding: 0
  },
  avatar: {
    backgroundColor: red[500]
  }
});

const C: React.FunctionComponent<Props> = ({ classes, board }) => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="Settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={board.name}
        subheader={board.slug}
      />
      <CardContent className={classes.content}>
        <BoardCardTabs board={board} />
      </CardContent>
    </Card>
  );
};

export const BoardCard = withStyles(styles)(C);
