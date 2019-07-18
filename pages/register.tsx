import * as React from "react";
import { Formik, Field } from "formik";
import Link from "next/link";
import Router from "next/router";

import Layout from "../components/Layout";
import { InputField } from "../components/fields/inputField";
import { RegisterComponent } from "../generated/apolloComponents";
import { RegisterSchema } from "../utils/yup-validation";
import { serverValidationErrors } from "../utils/server-validation-errors";

const RegisterPage: React.FunctionComponent = () => (
  <Layout title="Register">
    <h1>Register page</h1>
    <RegisterComponent>
      {register => (
        <Formik
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={async (data, { setErrors }) => {
            try {
              await register({ variables: data });
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
          validationSchema={RegisterSchema}
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
              <button type="submit">Register</button>
            </form>
          )}
        </Formik>
      )}
    </RegisterComponent>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default RegisterPage;
