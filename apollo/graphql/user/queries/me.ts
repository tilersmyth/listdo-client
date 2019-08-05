import { gql } from "apollo-boost";

export const meQuery = gql`
  query Me {
    me {
      id
      email
    }
  }
`;

export const meQueryClient = gql`
  query MeClient {
    me @client {
      id
      email
    }
  }
`;
