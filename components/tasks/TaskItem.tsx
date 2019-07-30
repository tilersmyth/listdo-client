import * as React from "react";
import {
  Typography,
  Theme,
  ListItem,
  ListItemText,
  Divider
} from "@material-ui/core";

import { StyleRules, withStyles } from "@material-ui/styles";
import { TaskDto } from "../../generated/apolloComponents";
import TaskItemAction from "./TaskItemAction";
import TaskItemOpen from "./TaskItemOpen";
import TaskItemSecondary from "./TaskItemSecondary";

interface Props {
  classes: any;
  tasks: Array<TaskDto>;
  role: string;
}

const styles = (_: Theme): StyleRules => ({});

const TaskItem: React.FunctionComponent<Props> = ({ tasks, role }) => {
  return (
    <React.Fragment>
      {tasks.map(task => (
        <React.Fragment key={task.id}>
          <ListItem>
            <TaskItemAction />
            <ListItemText
              primary={
                <Typography variant="subtitle2">
                  {task.email.payload.subject}
                </Typography>
              }
              secondary={<TaskItemSecondary email={task.email} role={role} />}
            />
            <TaskItemOpen />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default withStyles(styles)(TaskItem);
