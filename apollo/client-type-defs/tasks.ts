import gql from "graphql-tag";

export const taskTypeDef = gql`
  input TaskBoard {
    id: String!
  }

  input Task {
    id: String!
    board: TaskBoard!
    role: String!
    status: TaskStatusInput!
  }

  extend type Mutation {
    updateTaskStatusClient(task: Task!, status: TaskStatusInput!): TaskDto!
  }
`;
