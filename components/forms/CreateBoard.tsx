import * as React from "react";
import { Formik, Field } from "formik";
import {
  Theme,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";
import { StyleRules, withStyles } from "@material-ui/styles";

import { InputField } from "../fields/InputField";
import { CreateBoardSchema } from "../../utils/yup-validation";
import { CreateBoardComponent } from "../../generated/apolloComponents";
import { serverValidationErrors } from "../../utils/server-validation-errors";

interface Props {
  classes: any;
  closeDialog: () => void;
}

const styles = (theme: Theme): StyleRules => ({
  cancelBtn: {
    color: theme.palette.grey[500]
  }
});

const CreateBoard: React.FunctionComponent<Props> = ({
  classes,
  closeDialog
}) => {
  return (
    <CreateBoardComponent>
      {create => (
        <Formik
          onSubmit={async (data, { setErrors }) => {
            try {
              const newData = await create({ variables: data });

              if (!newData || !newData.data) {
                throw "new board error";
              }

              console.log("NEW BOARD", newData);
            } catch (err) {
              const errors = serverValidationErrors(err);
              errors && setErrors(errors);
            }
          }}
          initialValues={{
            name: ""
          }}
          validationSchema={CreateBoardSchema}
        >
          {({ handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
                <DialogContent>
                  <DialogContentText>
                    Boards define relationships in which all parties are working
                    towards common goals
                  </DialogContentText>
                  <Field
                    autoFocus
                    margin="dense"
                    name="name"
                    label="Enter board name"
                    fullWidth
                    component={InputField}
                  ></Field>
                </DialogContent>
                <DialogActions>
                  <Button onClick={closeDialog} className={classes.cancelBtn}>
                    Cancel
                  </Button>
                  <Button type="submit" color="primary">
                    Create
                  </Button>
                </DialogActions>
              </form>
            );
          }}
        </Formik>
      )}
    </CreateBoardComponent>
  );
};

export default withStyles(styles)(CreateBoard);
