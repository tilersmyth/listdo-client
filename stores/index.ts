import { createContext } from "react";

import { UserStore } from "./UserStore";
import { BoardListStore } from "./BoardListStore";
import { TaskListStore } from "./TaskListStore";

export class RootStore {
  userStore = new UserStore(this);
  boardListStore = new BoardListStore(this);
  taskListStore = new TaskListStore(this);
}

export const Store = createContext(new RootStore());
