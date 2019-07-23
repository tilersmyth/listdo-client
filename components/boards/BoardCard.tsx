import * as React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardContent,
  List,
  ListItem,
  Divider,
  ListItemText,
  Typography,
  Theme
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import red from "@material-ui/core/colors/red";

import { StyleRules, withStyles } from "@material-ui/styles";
import { Board } from "./types";

interface Props {
  classes: any;
  board: Board;
}

const styles = (theme: Theme): StyleRules => ({
  root: {
    flexGrow: 1
  },
  header: {
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
  const ListPrimary = () => (
    <Typography variant="subtitle2">Please correct error</Typography>
  );

  const ListSecondary = () => (
    <Typography variant="caption">Sent 30 minutes ago</Typography>
  );

  return (
    <Card>
      <CardHeader
        className={classes.header}
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
        <List className={classes.list}>
          <ListItem>
            <ListItemText
              primary={<ListPrimary />}
              secondary={<ListSecondary />}
            />
          </ListItem>
        </List>
        <Divider />
      </CardContent>
    </Card>
  );
};

export const BoardCard = withStyles(styles)(C);
