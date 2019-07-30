import * as React from "react";
import { Theme, IconButton, ListItemSecondaryAction } from "@material-ui/core";

import { StyleRules, withStyles } from "@material-ui/styles";
import LaunchIcon from "@material-ui/icons/LaunchOutlined";

interface Props {
  classes: any;
}

const styles = (_: Theme): StyleRules => ({});

const TaskItemOpen: React.FunctionComponent<Props> = ({}) => {
  return (
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="Launch e-mail">
        <LaunchIcon fontSize="small" />
      </IconButton>
    </ListItemSecondaryAction>
  );
};

export default withStyles(styles)(TaskItemOpen);
