import { observable, action } from "mobx";

import { UserDto } from "../generated/apolloComponents";
import { RootStore } from "./index";

export class UserStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable user: UserDto | null = null;

  @action setUser(user: UserDto | null) {
    this.user = user;
  }

  get Me() {
    return this.user as UserDto;
  }
}
