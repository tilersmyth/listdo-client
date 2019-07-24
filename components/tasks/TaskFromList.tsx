import * as React from "react";
import {
  List,
  Typography,
  Theme,
  ListItem,
  ListItemText
} from "@material-ui/core";

import { StyleRules, withStyles } from "@material-ui/styles";

interface Props {
  classes: any;
}

const styles = (_: Theme): StyleRules => ({});

const TaskFromList: React.FunctionComponent<Props> = ({}) => {
  const ListPrimary = () => (
    <Typography variant="subtitle2" align="center">
      No pending tasks
    </Typography>
  );

  return (
    <React.Fragment>
      <List>
        <ListItem>
          <ListItemText primary={<ListPrimary />} />
        </ListItem>
      </List>
    </React.Fragment>
  );
};

export default withStyles(styles)(TaskFromList);
