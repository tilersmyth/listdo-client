import { gql } from "apollo-boost";

export const registerMutation = gql`
  mutation Register($email: String!, $password: String!) {
    register(input: { email: $email, password: $password }) {
      id
      email
    }
  }
`;
