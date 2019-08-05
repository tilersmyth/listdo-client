import * as React from "react";
import { Theme } from "@material-ui/core";

import { withStyles, StyleRules } from "@material-ui/styles";
import { TasksByBoardQuery } from "../../apollo/generated-components";
import TaskMembersTooltip from "./TaskMembersTooltip";

interface Props {
  classes: any;
  members: TasksByBoardQuery["tasksByBoard"][0]["email"]["members"];
  role: string;
}

const styles = (_: Theme): StyleRules => ({
  trigger: {
    textDecoration: "underline",
    cursor: "pointer"
  }
});

const TaskItemMembers: React.FunctionComponent<Props> = ({
  classes,
  members,
  role
}) => {
  const count = members.length;

  return (
    <React.Fragment>
      {` | ${count} ${role === "partner" ? "other" : ""} active `}
      <TaskMembersTooltip members={members}>
        <span className={classes.trigger}>{`recipient${
          count === 1 ? "" : "s"
        }`}</span>
      </TaskMembersTooltip>
    </React.Fragment>
  );
};

export default withStyles(styles)(TaskItemMembers);
