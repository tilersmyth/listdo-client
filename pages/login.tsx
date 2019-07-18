import * as React from "react";
import { Formik, Field } from "formik";
import Link from "next/link";
import Router from "next/router";

import Layout from "../components/Layout";
import { InputField } from "../components/fields/inputField";
import { LoginComponent } from "../generated/apolloComponents";
import { LoginSchema } from "../utils/yup-validation";
import { serverValidationErrors } from "../utils/server-validation-errors";

const LoginPage: React.FunctionComponent = () => (
  <Layout title="Login">
    <h1>Login page</h1>
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
              <Field
                name="email"
                placeholder="E-mail"
                component={InputField}
              ></Field>
              <Field
                name="password"
                placeholder="Password"
                type="password"
                component={InputField}
              ></Field>

              <button type="submit">Login</button>
            </form>
          )}
        </Formik>
      )}
    </LoginComponent>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default LoginPage;
