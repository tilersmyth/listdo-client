import { observable, action } from "mobx";

import { TaskDto } from "../generated/apolloComponents";
import { RootStore } from "./index";

export class TaskListStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable tasks: TaskDto[] = [];

  @action setTasks(tasks: TaskDto[]): TaskDto[] {
    this.tasks = tasks;
    return this.tasks;
  }

  @action addTask(tasks: TaskDto) {
    this.tasks = [...this.tasks, tasks];
  }
}
