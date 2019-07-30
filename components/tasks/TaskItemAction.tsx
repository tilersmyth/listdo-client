import * as React from "react";
import { Theme, ListItemIcon } from "@material-ui/core";
import SpeedDial from "@material-ui/lab/SpeedDial";

import { StyleRules, withStyles } from "@material-ui/styles";
import CheckBoxIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import OtherIcon from "@material-ui/icons/IndeterminateCheckBoxOutlined";
import CompleteIcon from "@material-ui/icons/CheckBoxOutlined";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import clsx from "clsx";

interface Props {
  classes: any;
}

const styles = (theme: Theme): StyleRules => ({
  listItem: {
    position: "relative",
    height: 40,
    width: 40
  },
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

const SpeedDialTest: React.FunctionComponent<Props> = ({ classes }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const selectDial = (e: any) => {
    setValue(e.currentTarget.value);
    setOpen(false);
  };

  const actions = [
    { icon: <CompleteIcon />, name: "Complete", value: 1 },
    { icon: <OtherIcon />, name: "Other", value: 2 }
  ];

  const speedDialClassName = clsx(classes.speedDial, classes.directionRight);

  const DialIcon = ({ type }: any) => {
    switch (Number(type)) {
      case 1:
        return <CompleteIcon fontSize="small" />;
      case 2:
        return <OtherIcon fontSize="small" />;
      default:
        return <CheckBoxIcon fontSize="small" />;
    }
  };

  return (
    <ListItemIcon className={classes.listItem}>
      <SpeedDial
        ariaLabel="SpeedDial example"
        icon={
          <SpeedDialIcon
            className={classes.dialIcon}
            icon={<DialIcon type={value} />}
          />
        }
        ButtonProps={{
          className: clsx(classes.dialBtn, open && "isOpen"),
          size: "small",
          color: "inherit"
        }}
        className={speedDialClassName}
        onBlur={handleClose}
        onClick={handleClick}
        onClose={handleClose}
        onFocus={handleOpen}
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
            onClick={selectDial}
            tooltipPlacement="top"
          />
        ))}
      </SpeedDial>
    </ListItemIcon>
  );
};

export default withStyles(styles)(SpeedDialTest);
