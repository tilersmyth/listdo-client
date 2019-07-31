import { gql } from "apollo-boost";

export const updateTaskStatusMutation = gql`
  mutation UpdateTaskStatus($taskId: ID!, $status: TaskStatusInput!) {
    updateTaskStatus(input: { taskId: $taskId, status: $status }) {
      id
    }
  }
`;
