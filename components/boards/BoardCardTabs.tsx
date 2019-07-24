import * as React from "react";
import { Theme, Tabs, Tab } from "@material-ui/core";
import { StyleRules, withStyles } from "@material-ui/styles";

import { Board } from "./types";
import TaskToList from "../tasks/TaskToList";
import TaskFromList from "../tasks/TaskFromList";

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
  }
});

const BoardCardTabs: React.FunctionComponent<Props> = ({ classes }) => {
  const [value, setValue] = React.useState(0);

  const changeTab = (_: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Tabs
        value={value}
        indicatorColor="secondary"
        textColor="secondary"
        onChange={changeTab}
        className={classes.tabs}
        variant="fullWidth"
      >
        <Tab label="Tasks" />
        <Tab label="Pending" />
      </Tabs>
      {value === 0 && <TaskToList />}
      {value === 1 && <TaskFromList />}
    </React.Fragment>
  );
};

export default withStyles(styles)(BoardCardTabs);
