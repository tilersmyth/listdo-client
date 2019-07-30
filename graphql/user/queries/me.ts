import { gql } from "apollo-boost";

export const currentUserQuery = gql`
  query CurrentUser {
    currentUser {
      id
      email
    }
  }
`;
