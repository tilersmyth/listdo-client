import { AllBoardsDocument } from "../generated-components";

export const boardResolvers = {
  Mutation: {
    addBoard: async (_: any, { board }: any, { cache }: any) => {
      const existing = cache.readQuery({
        query: AllBoardsDocument
      });

      const allBoards = [...existing.allBoards, board];

      cache.writeQuery({ query: AllBoardsDocument, data: { allBoards } });
      return null;
    }
  }
};
