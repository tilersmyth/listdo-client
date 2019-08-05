import { gql } from "apollo-boost";

export const meQuery = gql`
  query Me {
    me {
      id
      firstName
      lastName
      email
    }
  }
`;

export const meQueryClient = gql`
  query MeClient {
    me @client {
      id
      firstName
      lastName
      email
    }
  }
`;
