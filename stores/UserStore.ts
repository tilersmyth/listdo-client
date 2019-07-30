import { createContext } from "react";
import { observable, action } from "mobx";
import { UserDto } from "../generated/apolloComponents";

class UserStore {
  @observable user: UserDto | null = null;

  @action setUser(user: UserDto | null) {
    this.user = user;
  }

  get Me() {
    return this.user as UserDto;
  }
}

export default createContext(new UserStore());
