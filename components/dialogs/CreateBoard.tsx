import * as React from "react";
import { Button, Dialog, DialogTitle } from "@material-ui/core";
import { withStyles, StyleRules, Theme } from "@material-ui/core/styles";

import CreateBoardForm from "../forms/CreateBoard";

type Props = {
  classes: any;
};

const styles = (theme: Theme): StyleRules => ({
  createButton: {
    marginRight: theme.spacing(2)
  }
});

const CreateBoard: React.FunctionComponent<Props> = ({ classes }) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  return (
    <React.Fragment>
      <Dialog
        open={dialogOpen}
        onClose={closeDialog}
        aria-labelledby="form-dialog-title"
        disableBackdropClick={true}
      >
        <DialogTitle id="form-dialog-title">Create new board</DialogTitle>
        <CreateBoardForm closeDialog={closeDialog} />
      </Dialog>
      <Button
        variant="outlined"
        color="primary"
        className={classes.createButton}
        onClick={openDialog}
      >
        new board
      </Button>
    </React.Fragment>
  );
};

export default withStyles(styles)(CreateBoard);
