import { gql } from "apollo-boost";

export const createBoardMutation = gql`
  mutation CreateBoard($name: String!) {
    createBoard(input: { name: $name }) {
      id
      name
      owner
      slug
    }
  }
`;
