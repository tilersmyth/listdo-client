import * as React from "react";
import { Theme, ListItemIcon } from "@material-ui/core";
import { StyleRules, withStyles } from "@material-ui/styles";

import TaskItemActionDial from "./TaskItemActionDial";
import {
  UpdateTaskStatusComponent,
  UpdateTaskStatusClientDocument,
  UpdateTaskStatusMutation
} from "../../../apollo/generated-components";
import TaskOptionsDialog from "./TaskOptionsDialog";

interface Props {
  classes: any;
  taskId: string;
  removeTask: (id: string) => void;
}

const styles = (_: Theme): StyleRules => ({
  listItem: {
    position: "relative",
    height: 40,
    width: 40
  }
});

const TaskItemAction: React.FunctionComponent<Props> = ({
  classes,
  taskId,
  removeTask
}) => {
  const [dialOpen, setDialOpen] = React.useState(false);
  const [icon, setIcon] = React.useState("");
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleClose = () => setDialOpen(false);
  const handleOpen = () => setDialOpen(true);
  const handleDialogClose = () => setDialogOpen(false);
  const dialogExited = () => setIcon("");

  const handleDialog = () => {
    setIcon("other");
    setDialogOpen(true);
  };

  return (
    <UpdateTaskStatusComponent>
      {(status, { client }) => {
        const updateStore = (
          task: UpdateTaskStatusMutation["updateTaskStatus"]
        ) => {
          client.mutate({
            variables: { task, status: { type: "closed" } },
            mutation: UpdateTaskStatusClientDocument
          });
        };

        const handleComplete = async () => {
          try {
            setIcon("complete");

            const update = await status({
              variables: { taskId, status: { type: "closed" } }
            });

            if (!update || !update.data || !update.data.updateTaskStatus) {
              throw Error("Error updating task status");
            }

            removeTask(taskId);
            const task = update.data.updateTaskStatus;
            // Allow for slide transition before updating store
            setTimeout(() => updateStore(task), 300);
          } catch (err) {
            console.log("update status error", err);
          }
        };

        return (
          <React.Fragment>
            <TaskOptionsDialog
              open={dialogOpen}
              handleClose={handleDialogClose}
              handleExit={dialogExited}
            />
            <ListItemIcon className={classes.listItem}>
              <TaskItemActionDial
                open={dialOpen}
                icon={icon}
                handleOpen={handleOpen}
                handleClose={handleClose}
                handleComplete={handleComplete}
                handleDialog={handleDialog}
              />
            </ListItemIcon>
          </React.Fragment>
        );
      }}
    </UpdateTaskStatusComponent>
  );
};

export default withStyles(styles)(TaskItemAction);
