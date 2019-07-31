import { gql } from "apollo-boost";

export const findAllBoardsQuery = gql`
  query AllBoards {
    allBoards {
      id
      name
      slug
      owner
    }
  }
`;
