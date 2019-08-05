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

export const addBoardMutation = gql`
  mutation AddBoard($board: Board!) {
    addBoard(board: $board) @client {
      id
      name
      owner
      slug
    }
  }
`;
