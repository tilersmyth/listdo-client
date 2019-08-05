import * as React from "react";
import {
  Typography,
  Theme,
  ListItem,
  ListItemText,
  Divider,
  Slide
} from "@material-ui/core";

import { StyleRules, withStyles } from "@material-ui/styles";
import { TasksByBoardQuery } from "../../apollo/generated-components";
import TaskItemAction from "./actions/TaskItemAction";
import TaskItemOpen from "./TaskItemOpen";
import TaskItemSecondary from "./TaskItemSecondary";

interface Props {
  classes: any;
  tasks: TasksByBoardQuery["tasksByBoard"];
  role: string;
}

const styles = (_: Theme): StyleRules => ({});

const TaskItem: React.FunctionComponent<Props> = ({ tasks, role }) => {
  const [taskId, setTaskId] = React.useState("");

  return (
    <React.Fragment>
      {tasks.map(task => (
        <React.Fragment key={task.id}>
          <Slide
            direction="left"
            in={task.id !== taskId}
            enter={false}
            timeout={{ enter: 0, exit: 300 }}
            mountOnEnter
            unmountOnExit
          >
            <ListItem>
              <TaskItemAction taskId={task.id} removeTask={setTaskId} />
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
          </Slide>
          <Divider />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default withStyles(styles)(TaskItem);
