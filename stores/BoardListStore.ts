import { observable, action } from "mobx";

import { BoardDto } from "../generated/apolloComponents";
import { RootStore } from "./index";

export class BoardListStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable boards: BoardDto[] = [];

  @action setBoards(boards: BoardDto[]): BoardDto[] {
    this.boards = boards;
    return this.boards;
  }

  @action addBoard(board: BoardDto) {
    this.boards = [...this.boards, board];
  }

  get Boards() {
    return this.boards;
  }
}
