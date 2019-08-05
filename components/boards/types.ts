import { BoardDto } from "../../apollo/generated-components";

export type Board = { __typename?: "BoardDto" } & Pick<
  BoardDto,
  "id" | "name" | "slug"
>;
