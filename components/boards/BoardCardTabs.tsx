import * as React from "react";
import { Theme, Tabs, Tab } from "@material-ui/core";
import { StyleRules, withStyles } from "@material-ui/styles";

import { Board } from "./types";
import TaskList from "../tasks/TaskList";

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

const BoardCardTabs: React.FunctionComponent<Props> = ({ classes, board }) => {
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
        <Tab label="Inbox" />
        <Tab label="Sent" />
      </Tabs>
      {value === 0 && <TaskList boardId={board.id} role="partner" />}
      {value === 1 && <TaskList boardId={board.id} role="initiator" />}
    </React.Fragment>
  );
};

export default withStyles(styles)(BoardCardTabs);
