import * as React from "react";
import { Formik, Field } from "formik";

import Link from "next/link";
import Layout from "../components/Layout";
import { InputField } from "../components/fields/inputField";
import { RegisterComponent } from "../generated/apolloComponents";
import { RegisterSchema } from "../utils/yup-validation";

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
            } catch (err) {
              const errors: { [key: string]: string } = {};
              const { extensions } = err.graphQLErrors[0];
              Object.values(extensions.exception.errors).forEach(
                (error: any) => {
                  errors[error.path] = error.message;
                }
              );
              setErrors(errors);
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
