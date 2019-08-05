import gql from "graphql-tag";

export const boardTypeDef = gql`
  input Board {
    id: String!
    name: String!
    owner: String!
    slug: String!
  }

  extend type Mutation {
    addBoard(board: Board): BoardDto!
  }
`;
