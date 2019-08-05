import * as React from "react";
import clsx from "clsx";
import { Theme } from "@material-ui/core";
import SpeedDial from "@material-ui/lab/SpeedDial";
import { StyleRules, withStyles } from "@material-ui/styles";
import MoreIcon from "@material-ui/icons/AddBoxOutlined";
import CompleteIcon from "@material-ui/icons/CheckBoxOutlined";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";

import DialActionIcon from "./DialActionIcon";

interface Props {
  classes: any;
  open: boolean;
  icon: string;
  handleOpen: () => void;
  handleClose: () => void;
  handleComplete: () => Promise<void>;
  handleDialog: () => void;
}

const styles = (theme: Theme): StyleRules => ({
  speedDial: {
    position: "absolute",
    "&$directionRight": {
      top: 0,
      left: 0
    }
  },
  dialIcon: {
    height: 20
  },
  directionRight: {},
  dialBtn: {
    backgroundColor: theme.palette.common.white,
    boxShadow: "none",
    "&:hover": { backgroundColor: theme.palette.grey[200] },
    "&:focus": { boxShadow: "none" },
    "&.isOpen": { backgroundColor: theme.palette.grey[200] }
  },
  dialAction: {
    marginTop: 0
  }
});

const actions = [
  { icon: <CompleteIcon />, name: "Complete", value: "complete" },
  { icon: <MoreIcon />, name: "More", value: "more" }
];

const TaskItemActionDial: React.FunctionComponent<Props> = ({
  classes,
  open,
  icon,
  handleOpen,
  handleClose,
  handleComplete,
  handleDialog
}) => (
  <SpeedDial
    ariaLabel="SpeedDial example"
    icon={
      <SpeedDialIcon
        className={classes.dialIcon}
        icon={<DialActionIcon iconType={icon} />}
      />
    }
    ButtonProps={{
      className: clsx(classes.dialBtn, open && "isOpen"),
      size: "small",
      color: "inherit"
    }}
    className={clsx(classes.speedDial, classes.directionRight)}
    onClick={handleOpen}
    onClose={handleClose}
    onMouseLeave={handleClose}
    open={open}
    direction="right"
  >
    {actions.map(action => (
      <SpeedDialAction
        ButtonProps={{ value: action.value }}
        className={classes.dialAction}
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
        onClick={action.value === "complete" ? handleComplete : handleDialog}
        tooltipPlacement="top"
      />
    ))}
  </SpeedDial>
);

export default withStyles(styles)(TaskItemActionDial);
