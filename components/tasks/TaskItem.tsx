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
import {
  TaskDto,
  UpdateTaskStatusComponent
} from "../../generated/apolloComponents";
import TaskItemAction from "./TaskItemAction";
import TaskItemOpen from "./TaskItemOpen";
import TaskItemSecondary from "./TaskItemSecondary";
import { Store } from "../../stores";

interface Props {
  classes: any;
  tasks: Array<TaskDto>;
  role: string;
}

const styles = (_: Theme): StyleRules => ({});

const TaskItem: React.FunctionComponent<Props> = ({ tasks, role }) => {
  const timeout: number = 300;
  const [taskId, setTaskId] = React.useState("");
  const { taskListStore } = React.useContext(Store);

  const removeTask = (id: string) => {
    const taskIndex = tasks.findIndex((task: TaskDto) => task.id === id);
    tasks.splice(taskIndex, 1);
    taskListStore.setTasks(tasks);
  };

  return (
    <UpdateTaskStatusComponent>
      {status => {
        const handleComplete = async (id: string) => {
          try {
            const update = await status({
              variables: { taskId: id, status: { type: "closed" } }
            });

            if (!update || !update.data || !update.data.updateTaskStatus) {
              throw Error("Error updating task status");
            }

            setTaskId(id);
            setTimeout(removeTask.bind(null, id), timeout);
          } catch (err) {
            console.log("update status error", err);
          }
        };

        return tasks.map(task => (
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
                <TaskItemAction complete={() => handleComplete(task.id)} />
                <ListItemText
                  primary={
                    <Typography variant="subtitle2">
                      {task.email.payload.subject}
                    </Typography>
                  }
                  secondary={
                    <TaskItemSecondary email={task.email} role={role} />
                  }
                />
                <TaskItemOpen />
              </ListItem>
            </Slide>
            <Divider />
          </React.Fragment>
        ));
      }}
    </UpdateTaskStatusComponent>
  );
};

export default withStyles(styles)(TaskItem);
