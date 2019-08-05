import { gql } from "apollo-boost";

export const findTasksByBoard = gql`
  query TasksByBoard($board: ID!, $role: String!, $status: String!) {
    tasksByBoard(input: { board: $board, role: $role, status: $status }) {
      id
      email {
        members {
          user {
            email
          }
          role
        }
        payload {
          subject
          text
          date
        }
      }
      status {
        type
      }
    }
  }
`;
