import * as React from "react";
import { Formik, Field } from "formik";
import Router from "next/router";
import { Theme, Button, Grid } from "@material-ui/core";
import { StyleRules, withStyles } from "@material-ui/styles";

import { InputField } from "../components/fields/InputField";
import { RegisterComponent } from "../apollo/generated-components";
import { RegisterSchema } from "../utils/yup-validation";
import { serverValidationErrors } from "../utils/server-validation-errors";
import AuthContainer from "../components/layouts/Auth";
import Link from "../material/Link";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";

interface Props {
  classes: any;
  width: Breakpoint;
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

const RegisterPage: React.FunctionComponent<Props> = ({ classes, width }) => {
  const getGridSpacing = () => {
    if (isWidthUp("lg", width)) {
      return 2;
    }

    return 0;
  };

  return (
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
              firstName: "",
              lastName: "",
              email: "",
              password: ""
            }}
            validationSchema={RegisterSchema}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={getGridSpacing()}>
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="firstName"
                      label="First Name"
                      component={InputField}
                    ></Field>
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <Field
                      name="lastName"
                      label="Last Name"
                      component={InputField}
                    ></Field>
                  </Grid>
                </Grid>
                <Field
                  name="email"
                  label="E-mail"
                  component={InputField}
                ></Field>
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
};

export default withWidth()(withStyles(styles)(RegisterPage));
