import * as React from "react";
import { Formik, Field } from "formik";
import Router from "next/router";
import { Button } from "@material-ui/core";
import { withStyles, Theme, StyleRules } from "@material-ui/core/styles";

import { InputField } from "../components/fields/InputField";
import { LoginComponent } from "../generated/apolloComponents";
import { LoginSchema } from "../utils/yup-validation";
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

const LoginPage: React.FunctionComponent<Props> = ({ classes }) => (
  <AuthContainer label="Login">
    <LoginComponent>
      {login => (
        <Formik
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={async (data, { setErrors }) => {
            try {
              await login({ variables: data });
              Router.push("/boards");
            } catch (err) {
              const errors = serverValidationErrors(err);
              errors && setErrors(errors);
            }
          }}
          initialValues={{
            email: "",
            password: ""
          }}
          validationSchema={LoginSchema}
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
                Login
              </Button>
            </form>
          )}
        </Formik>
      )}
    </LoginComponent>
    <Link href="/register" className={classes.navLink} underline="none">
      click here to register
    </Link>
  </AuthContainer>
);

export default withStyles(styles)(LoginPage);
