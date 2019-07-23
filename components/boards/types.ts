import { BoardDto } from "../../generated/apolloComponents";

export type Board = { __typename?: "BoardDto" } & Pick<
  BoardDto,
  "id" | "name" | "slug"
>;
