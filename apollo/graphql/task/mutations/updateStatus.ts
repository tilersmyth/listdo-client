import { gql } from "apollo-boost";

export const updateTaskStatusMutation = gql`
  mutation UpdateTaskStatus($taskId: ID!, $status: TaskStatusInput!) {
    updateTaskStatus(input: { taskId: $taskId, status: $status }) {
      id
      board {
        id
      }
      role
      status {
        type
      }
    }
  }
`;

export const updateTaskStatusMutationClient = gql`
  mutation UpdateTaskStatusClient($task: Task!, $status: TaskStatusInput!) {
    updateTaskStatusClient(task: $task, status: $status) @client {
      id
    }
  }
`;
