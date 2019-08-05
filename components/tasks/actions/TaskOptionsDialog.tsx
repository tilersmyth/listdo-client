import * as React from "react";
import {
  Dialog,
  DialogTitle,
  Button,
  DialogContent,
  DialogActions,
  Typography,
  Fade,
  TextField
} from "@material-ui/core";
import { withStyles, StyleRules, Theme } from "@material-ui/core/styles";

import CompleteIcon from "@material-ui/icons/Done";
import RestoreIcon from "@material-ui/icons/Restore";
import ClearIcon from "@material-ui/icons/Clear";
import AddMemberIcon from "@material-ui/icons/PersonAddOutlined";

type Props = {
  classes: any;
  open: boolean;
  handleClose: () => void;
  handleExit: () => void;
};

const styles = (theme: Theme): StyleRules => ({
  actionBtn: {
    minWidth: "auto",
    marginRight: theme.spacing(2),
    color: theme.palette.grey[600]
  },
  optionContainer: {
    position: "relative",
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 30
  },
  optionDescription: {
    position: "absolute",
    top: 0,
    color: theme.palette.grey[700]
  },
  cancelBtn: {
    color: theme.palette.grey[500]
  },
  message: {
    marginBottom: 20
  }
});

const actionOptions = [
  {
    title: "Complete",
    icon: (selected: boolean) => (
      <CompleteIcon color={selected ? "primary" : "inherit"} fontSize="small" />
    ),
    description: "task is complete"
  },
  {
    title: "Pending",
    icon: (selected: boolean) => (
      <RestoreIcon color={selected ? "primary" : "inherit"} fontSize="small" />
    ),
    description: "task is in-progress or dependent on another task"
  },
  {
    title: "Add Member",
    icon: (selected: boolean) => (
      <AddMemberIcon
        color={selected ? "primary" : "inherit"}
        fontSize="small"
      />
    ),
    description: "add member that will complete task"
  },
  {
    title: "Remove",
    icon: (selected: boolean) => (
      <ClearIcon color={selected ? "primary" : "inherit"} fontSize="small" />
    ),
    description: "task is not applicable to you"
  }
];

const TaskOptionsDialog: React.FunctionComponent<Props> = ({
  classes,
  open,
  handleClose,
  handleExit
}) => {
  const [actionSelected, selectAction] = React.useState(0);

  return (
    <Dialog
      onExited={handleExit}
      open={open}
      onClose={handleClose}
      aria-labelledby="task-more-dialog"
      disableBackdropClick={true}
      maxWidth="sm"
      fullWidth={true}
    >
      <DialogTitle id="form-dialog-title">Task actions</DialogTitle>
      <DialogContent dividers>
        <div className={classes.optionContainer}>
          {actionOptions.map((action: any, index: number) => (
            <React.Fragment key={action.title}>
              <Button
                disableRipple={true}
                variant="outlined"
                size="small"
                className={classes.actionBtn}
                color={index === actionSelected ? "primary" : "default"}
                onClick={() => selectAction(index)}
              >
                {action.icon(index === actionSelected)}
              </Button>

              <Fade in={index === actionSelected}>
                <Typography
                  variant="caption"
                  display="block"
                  className={classes.optionDescription}
                >
                  {`${action.title} - ${action.description}`}
                </Typography>
              </Fade>
            </React.Fragment>
          ))}
        </div>
        <TextField
          id="outlined-full-width"
          label="Message"
          placeholder="Sorry for the delay!"
          fullWidth
          margin="normal"
          variant="outlined"
          autoComplete="off"
          className={classes.message}
          InputLabelProps={{
            shrink: true
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          className={classes.cancelBtn}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button variant="outlined" color="primary" onClick={handleClose}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(TaskOptionsDialog);
