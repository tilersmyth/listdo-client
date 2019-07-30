import * as React from "react";
import {
  List,
  Typography,
  Theme,
  ListItem,
  ListItemText,
  CircularProgress
} from "@material-ui/core";

import { StyleRules, withStyles } from "@material-ui/styles";

import {
  TasksByBoardComponent,
  TaskDto
} from "../../generated/apolloComponents";
import TaskItem from "./TaskItem";

interface Props {
  classes: any;
  boardId: string;
  role: string;
}

const styles = (_: Theme): StyleRules => ({});

const TaskList: React.FunctionComponent<Props> = ({ boardId, role }) => {
  const NoTasksComponent = () => (
    <Typography variant="subtitle2" align="center">
      No {role === "initiator" ? "open sent tasks" : "open tasks"}
    </Typography>
  );

  return (
    <List>
      <TasksByBoardComponent
        variables={{ board: boardId, role, status: "open" }}
      >
        {({ data, loading }) => {
          if (loading) {
            return <CircularProgress />;
          }

          if (!data) {
            return (
              <Typography variant="h1">Something went wrong :(</Typography>
            );
          }

          const { tasksByBoard } = data;

          if (tasksByBoard.length === 0) {
            return (
              <ListItem>
                <ListItemText primary={<NoTasksComponent />} />
              </ListItem>
            );
          }

          return (
            <TaskItem tasks={tasksByBoard as Array<TaskDto>} role={role} />
          );
        }}
      </TasksByBoardComponent>
    </List>
  );
};

export default withStyles(styles)(TaskList);
