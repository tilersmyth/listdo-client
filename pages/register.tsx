import * as React from "react";
import { Formik, Field } from "formik";
import Router from "next/router";
import { Theme, Button } from "@material-ui/core";
import { StyleRules, withStyles } from "@material-ui/styles";

import { InputField } from "../components/fields/InputField";
import { RegisterComponent } from "../apollo/generated-components";
import { RegisterSchema } from "../utils/yup-validation";
import { serverValidationErrors } from "../utils/server-validation-errors";
import AuthContainer from "../components/layouts/Auth";
import Link from "../material/Link";

interface Props {
  classes: any;
}

const styles = (theme: Theme): StyleRules => ({
  button: {
    marginTop: theme.spacing(2)
  },
  navLink: {
    display: "block",
    marginTop: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const RegisterPage: React.FunctionComponent<Props> = ({ classes }) => (
  <AuthContainer label="Register">
    <RegisterComponent>
      {register => (
        <Formik
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={async (data, { setErrors }) => {
            try {
              await register({ variables: data });
              Router.push("/login");
            } catch (err) {
              const errors = serverValidationErrors(err);
              errors && setErrors(errors);
            }
          }}
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={RegisterSchema}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="email" label="E-mail" component={InputField}></Field>
              <Field
                name="password"
                label="Password"
                type="password"
                component={InputField}
              ></Field>
              <Button
                className={classes.button}
                fullWidth
                size="large"
                type="submit"
              >
                register
              </Button>
            </form>
          )}
        </Formik>
      )}
    </RegisterComponent>
    <Link href="/login" className={classes.navLink} underline="none">
      click here to login
    </Link>
  </AuthContainer>
);

export default withStyles(styles)(RegisterPage);
