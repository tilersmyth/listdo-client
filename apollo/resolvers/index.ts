import merge from "lodash.merge";

import { userResolvers } from "./user";
import { boardResolvers } from "./boards";
import { taskResolvers } from "./tasks";

export const resolvers = merge(userResolvers, boardResolvers, taskResolvers);
