import * as React from "react";
import { Formik, Field } from "formik";

import Link from "next/link";
import Layout from "../components/Layout";
import { InputField } from "../components/fields/inputField";
import { RegisterComponent } from "../generated/apolloComponents";

const RegisterPage: React.FunctionComponent = () => (
  <Layout title="Register">
    <h1>Register page</h1>
    <RegisterComponent>
      {register => (
        <Formik
          onSubmit={async data => {
            const response = await register({ variables: data });
            console.log(response);
          }}
          initialValues={{
            email: "",
            password: ""
          }}
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
