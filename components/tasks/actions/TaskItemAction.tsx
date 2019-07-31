import * as React from "react";
import { Theme, ListItemIcon } from "@material-ui/core";
import { StyleRules, withStyles } from "@material-ui/styles";

import TaskItemActionDial from "./TaskItemActionDial";
import { UpdateTaskStatusComponent } from "../../../generated/apolloComponents";

interface Props {
  classes: any;
  taskId: string;
  closeTask: (id: string) => void;
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
  closeTask
}) => {
  const [open, setOpen] = React.useState(false);
  const [icon, setIcon] = React.useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleDialog = () => {
    setIcon("other");
    console.log("open Dialog");
  };

  return (
    <UpdateTaskStatusComponent>
      {status => {
        const handleComplete = async () => {
          try {
            setIcon("complete");

            const update = await status({
              variables: { taskId, status: { type: "closed" } }
            });

            if (!update || !update.data || !update.data.updateTaskStatus) {
              throw Error("Error updating task status");
            }

            closeTask(taskId);
          } catch (err) {
            console.log("update status error", err);
          }
        };

        return (
          <ListItemIcon className={classes.listItem}>
            <TaskItemActionDial
              open={open}
              icon={icon}
              handleOpen={handleOpen}
              handleClose={handleClose}
              handleComplete={handleComplete}
              handleDialog={handleDialog}
            />
          </ListItemIcon>
        );
      }}
    </UpdateTaskStatusComponent>
  );
};

export default withStyles(styles)(TaskItemAction);
