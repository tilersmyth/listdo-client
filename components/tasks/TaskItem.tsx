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
import { TaskDto } from "../../apollo/generated-components";
import TaskItemAction from "./actions/TaskItemAction";
import TaskItemOpen from "./TaskItemOpen";
import TaskItemSecondary from "./TaskItemSecondary";

interface Props {
  classes: any;
  tasks: Array<TaskDto>;
  role: string;
}

const styles = (_: Theme): StyleRules => ({});

const TaskItem: React.FunctionComponent<Props> = ({ tasks, role }) => {
  const timeout: number = 300;
  const [taskId, setTaskId] = React.useState("");

  const removeTask = (_: string) => {
    // const taskIndex = tasks.findIndex((task: TaskDto) => task.id === id);
    // tasks.splice(taskIndex, 1);
    // taskListStore.setTasks(tasks);
  };

  const closeTask = (id: string) => {
    setTaskId(id);
    setTimeout(removeTask.bind(null, id), timeout);
  };

  return (
    <React.Fragment>
      {tasks.map(task => (
        <React.Fragment key={task.id}>
          <Slide
            direction="left"
            in={task.id !== taskId}
            enter={false}
            timeout={{ enter: 0, exit: timeout }}
            mountOnEnter
            unmountOnExit
          >
            <ListItem>
              <TaskItemAction taskId={task.id} closeTask={closeTask} />
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
