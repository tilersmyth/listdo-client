import * as React from "react";
import {
  IconButton,
  List,
  ListItem,
  Divider,
  ListItemText,
  Typography,
  Theme,
  ListItemAvatar,
  ListItemSecondaryAction
} from "@material-ui/core";

import CheckBoxIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import LaunchIcon from "@material-ui/icons/LaunchOutlined";

import { StyleRules, withStyles } from "@material-ui/styles";

interface Props {
  classes: any;
}

const styles = (_: Theme): StyleRules => ({});

const TaskToList: React.FunctionComponent<Props> = ({}) => {
  const ListPrimary = () => (
    <Typography variant="subtitle2">Please correct error</Typography>
  );

  const ListSecondary = () => (
    <Typography variant="caption">
      Sent by Erin 30 minutes ago | 4 others included
    </Typography>
  );

  return (
    <React.Fragment>
      <List>
        <ListItem>
          <ListItemAvatar>
            <IconButton edge="end" aria-label="Delete">
              <CheckBoxIcon fontSize="small" />
            </IconButton>
          </ListItemAvatar>
          <ListItemText
            primary={<ListPrimary />}
            secondary={<ListSecondary />}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="Delete">
              <LaunchIcon fontSize="small" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
      <Divider />
    </React.Fragment>
  );
};

export default withStyles(styles)(TaskToList);
