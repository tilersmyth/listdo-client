import {
  TasksByBoardDocument,
  UpdateTaskStatusClientMutationVariables,
  TasksByBoardQuery,
  TasksByBoardQueryVariables
} from "../generated-components";
import { ApolloClient } from "apollo-boost";

export const taskResolvers = {
  Mutation: {
    updateTaskStatusClient: async (
      _: any,
      { task }: UpdateTaskStatusClientMutationVariables,
      { cache }: ApolloClient<Object>
    ) => {
      try {
        const variables = {
          board: task.board.id,
          role: task.role,
          status: task.status.type
        };

        const oldData = cache.readQuery<
          TasksByBoardQuery,
          TasksByBoardQueryVariables
        >({
          query: TasksByBoardDocument,
          variables
        });

        const newData =
          oldData && oldData.tasksByBoard.filter((t: any) => t.id !== task.id);

        cache.writeQuery({
          query: TasksByBoardDocument,
          data: { tasksByBoard: newData },
          variables
        });

        return null;
      } catch (err) {
        throw err;
      }
    }
  }
};
