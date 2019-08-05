import merge from "lodash.merge";

import { userTypeDef } from "./user";
import { boardTypeDef } from "./boards";
import { taskTypeDef } from "./tasks";

export const typeDefs = merge(userTypeDef, boardTypeDef, taskTypeDef);
