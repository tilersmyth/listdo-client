import gql from "graphql-tag";
import * as ReactApollo from "react-apollo";
import * as React from "react";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AddMemberDto = {
  __typename?: "AddMemberDto";
  success: Scalars["Boolean"];
  error?: Maybe<Scalars["String"]>;
};

export type AddMemberInput = {
  boardId: Scalars["ID"];
  email: Scalars["String"];
};

export type Board = {
  id: Scalars["String"];
  name: Scalars["String"];
  owner: Scalars["String"];
  slug: Scalars["String"];
};

export type BoardDto = {
  __typename?: "BoardDto";
  id: Scalars["ID"];
  name: Scalars["String"];
  owner: Scalars["String"];
  slug: Scalars["String"];
};

export type BoardTasksInput = {
  board: Scalars["ID"];
  status: Scalars["String"];
  role: Scalars["String"];
};

export type CreateInput = {
  name: Scalars["String"];
};

export type CreateListDto = {
  __typename?: "CreateListDto";
  success: Scalars["Boolean"];
  error?: Maybe<Scalars["String"]>;
};

export type CreateListInput = {
  boardId: Scalars["ID"];
  name: Scalars["String"];
  slug?: Maybe<Scalars["String"]>;
};

export type CreateTestDto = {
  __typename?: "CreateTestDto";
  name: Scalars["String"];
  count: Scalars["Int"];
};

export type EmailDto = {
  __typename?: "EmailDto";
  list?: Maybe<Scalars["String"]>;
  members: Array<EmailMemberDto>;
  payload: EmailPayloadDto;
};

export type EmailMemberDto = {
  __typename?: "EmailMemberDto";
  user: UserDto;
  role: Scalars["String"];
};

export type EmailPayloadDto = {
  __typename?: "EmailPayloadDto";
  subject: Scalars["String"];
  text: Scalars["String"];
  textAsHtml: Scalars["String"];
  textPreview: Scalars["String"];
  date: Scalars["DateTime"];
};

export type LoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createTest: CreateTestDto;
  register: UserDto;
  login: UserDto;
  logout: Scalars["Boolean"];
  createBoard: BoardDto;
  addMember: AddMemberDto;
  createList: CreateListDto;
  updateTaskStatus: TaskDto;
  addBoard: BoardDto;
  updateTaskStatusClient: TaskDto;
};

export type MutationCreateTestArgs = {
  input: TestInput;
};

export type MutationRegisterArgs = {
  input: RegisterInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationCreateBoardArgs = {
  input: CreateInput;
};

export type MutationAddMemberArgs = {
  input: AddMemberInput;
};

export type MutationCreateListArgs = {
  input: CreateListInput;
};

export type MutationUpdateTaskStatusArgs = {
  input: UpdateTaskStatusInput;
};

export type MutationAddBoardArgs = {
  board?: Maybe<Board>;
};

export type MutationUpdateTaskStatusClientArgs = {
  task: Task;
  status: TaskStatusInput;
};

export type NewTaskDto = {
  __typename?: "NewTaskDto";
  user: Scalars["ID"];
  email: Scalars["ID"];
  board: Scalars["ID"];
  list: Scalars["ID"];
  role: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  test: Array<CreateTestDto>;
  allUsers: Array<UserDto>;
  me?: Maybe<UserDto>;
  findUserByEmail?: Maybe<UserDto>;
  allBoards: Array<BoardDto>;
  tasksByBoard: Array<TaskDto>;
};

export type QueryFindUserByEmailArgs = {
  input: UserEmailInput;
};

export type QueryTasksByBoardArgs = {
  input: BoardTasksInput;
};

export type RegisterInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type Subscription = {
  __typename?: "Subscription";
  newTask: NewTaskDto;
};

export type Task = {
  id: Scalars["String"];
  board: TaskBoard;
  role: Scalars["String"];
  status: TaskStatusInput;
};

export type TaskBoard = {
  id: Scalars["String"];
};

export type TaskBoardDto = {
  __typename?: "TaskBoardDto";
  order: Scalars["Int"];
  id: Scalars["ID"];
};

export type TaskDto = {
  __typename?: "TaskDto";
  id: Scalars["ID"];
  board: TaskBoardDto;
  email: EmailDto;
  status: TaskStatusDto;
  role: Scalars["String"];
};

export type TaskStatusDto = {
  __typename?: "TaskStatusDto";
  type: Scalars["String"];
  user: Scalars["ID"];
  message?: Maybe<Scalars["String"]>;
};

export type TaskStatusInput = {
  type: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
};

export type TestInput = {
  name: Scalars["String"];
  count: Scalars["Int"];
};

export type UpdateTaskStatusInput = {
  taskId: Scalars["ID"];
  status: TaskStatusInput;
};

export type UserDto = {
  __typename?: "UserDto";
  id: Scalars["ID"];
  email: Scalars["String"];
};

export type UserEmailInput = {
  email: Scalars["String"];
};
export type CreateBoardMutationVariables = {
  name: Scalars["String"];
};

export type CreateBoardMutation = { __typename?: "Mutation" } & {
  createBoard: { __typename?: "BoardDto" } & Pick<
    BoardDto,
    "id" | "name" | "owner" | "slug"
  >;
};

export type AddBoardMutationVariables = {
  board: Board;
};

export type AddBoardMutation = { __typename?: "Mutation" } & {
  addBoard: { __typename?: "BoardDto" } & Pick<
    BoardDto,
    "id" | "name" | "owner" | "slug"
  >;
};

export type AllBoardsQueryVariables = {};

export type AllBoardsQuery = { __typename?: "Query" } & {
  allBoards: Array<
    { __typename?: "BoardDto" } & Pick<
      BoardDto,
      "id" | "name" | "slug" | "owner"
    >
  >;
};

export type UpdateTaskStatusMutationVariables = {
  taskId: Scalars["ID"];
  status: TaskStatusInput;
};

export type UpdateTaskStatusMutation = { __typename?: "Mutation" } & {
  updateTaskStatus: { __typename?: "TaskDto" } & Pick<
    TaskDto,
    "id" | "role"
  > & {
      board: { __typename?: "TaskBoardDto" } & Pick<TaskBoardDto, "id">;
      status: { __typename?: "TaskStatusDto" } & Pick<TaskStatusDto, "type">;
    };
};

export type UpdateTaskStatusClientMutationVariables = {
  task: Task;
  status: TaskStatusInput;
};

export type UpdateTaskStatusClientMutation = { __typename?: "Mutation" } & {
  updateTaskStatusClient: { __typename?: "TaskDto" } & Pick<TaskDto, "id">;
};

export type TasksByBoardQueryVariables = {
  board: Scalars["ID"];
  role: Scalars["String"];
  status: Scalars["String"];
};

export type TasksByBoardQuery = { __typename?: "Query" } & {
  tasksByBoard: Array<
    { __typename?: "TaskDto" } & Pick<TaskDto, "id"> & {
        email: { __typename?: "EmailDto" } & {
          members: Array<
            { __typename?: "EmailMemberDto" } & Pick<EmailMemberDto, "role"> & {
                user: { __typename?: "UserDto" } & Pick<UserDto, "email">;
              }
          >;
          payload: { __typename?: "EmailPayloadDto" } & Pick<
            EmailPayloadDto,
            "subject" | "text" | "date"
          >;
        };
        status: { __typename?: "TaskStatusDto" } & Pick<TaskStatusDto, "type">;
      }
  >;
};

export type LoginMutationVariables = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type LoginMutation = { __typename?: "Mutation" } & {
  login: { __typename?: "UserDto" } & Pick<UserDto, "id" | "email">;
};

export type RegisterMutationVariables = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type RegisterMutation = { __typename?: "Mutation" } & {
  register: { __typename?: "UserDto" } & Pick<UserDto, "id" | "email">;
};

export type MeQueryVariables = {};

export type MeQuery = { __typename?: "Query" } & {
  me: Maybe<{ __typename?: "UserDto" } & Pick<UserDto, "id" | "email">>;
};

export type MeClientQueryVariables = {};

export type MeClientQuery = { __typename?: "Query" } & {
  me: Maybe<{ __typename?: "UserDto" } & Pick<UserDto, "id" | "email">>;
};

export const CreateBoardDocument = gql`
  mutation CreateBoard($name: String!) {
    createBoard(input: { name: $name }) {
      id
      name
      owner
      slug
    }
  }
`;
export type CreateBoardMutationFn = ReactApollo.MutationFn<
  CreateBoardMutation,
  CreateBoardMutationVariables
>;
export type CreateBoardComponentProps = Omit<
  ReactApollo.MutationProps<CreateBoardMutation, CreateBoardMutationVariables>,
  "mutation"
>;

export const CreateBoardComponent = (props: CreateBoardComponentProps) => (
  <ReactApollo.Mutation<CreateBoardMutation, CreateBoardMutationVariables>
    mutation={CreateBoardDocument}
    {...props}
  />
);

export type CreateBoardProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<CreateBoardMutation, CreateBoardMutationVariables>
> &
  TChildProps;
export function withCreateBoard<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CreateBoardMutation,
    CreateBoardMutationVariables,
    CreateBoardProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    CreateBoardMutation,
    CreateBoardMutationVariables,
    CreateBoardProps<TChildProps>
  >(CreateBoardDocument, {
    alias: "withCreateBoard",
    ...operationOptions
  });
}
export const AddBoardDocument = gql`
  mutation AddBoard($board: Board!) {
    addBoard(board: $board) @client {
      id
      name
      owner
      slug
    }
  }
`;
export type AddBoardMutationFn = ReactApollo.MutationFn<
  AddBoardMutation,
  AddBoardMutationVariables
>;
export type AddBoardComponentProps = Omit<
  ReactApollo.MutationProps<AddBoardMutation, AddBoardMutationVariables>,
  "mutation"
>;

export const AddBoardComponent = (props: AddBoardComponentProps) => (
  <ReactApollo.Mutation<AddBoardMutation, AddBoardMutationVariables>
    mutation={AddBoardDocument}
    {...props}
  />
);

export type AddBoardProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<AddBoardMutation, AddBoardMutationVariables>
> &
  TChildProps;
export function withAddBoard<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    AddBoardMutation,
    AddBoardMutationVariables,
    AddBoardProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    AddBoardMutation,
    AddBoardMutationVariables,
    AddBoardProps<TChildProps>
  >(AddBoardDocument, {
    alias: "withAddBoard",
    ...operationOptions
  });
}
export const AllBoardsDocument = gql`
  query AllBoards {
    allBoards {
      id
      name
      slug
      owner
    }
  }
`;
export type AllBoardsComponentProps = Omit<
  ReactApollo.QueryProps<AllBoardsQuery, AllBoardsQueryVariables>,
  "query"
>;

export const AllBoardsComponent = (props: AllBoardsComponentProps) => (
  <ReactApollo.Query<AllBoardsQuery, AllBoardsQueryVariables>
    query={AllBoardsDocument}
    {...props}
  />
);

export type AllBoardsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<AllBoardsQuery, AllBoardsQueryVariables>
> &
  TChildProps;
export function withAllBoards<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    AllBoardsQuery,
    AllBoardsQueryVariables,
    AllBoardsProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    AllBoardsQuery,
    AllBoardsQueryVariables,
    AllBoardsProps<TChildProps>
  >(AllBoardsDocument, {
    alias: "withAllBoards",
    ...operationOptions
  });
}
export const UpdateTaskStatusDocument = gql`
  mutation UpdateTaskStatus($taskId: ID!, $status: TaskStatusInput!) {
    updateTaskStatus(input: { taskId: $taskId, status: $status }) {
      id
      board {
        id
      }
      role
      status {
        type
      }
    }
  }
`;
export type UpdateTaskStatusMutationFn = ReactApollo.MutationFn<
  UpdateTaskStatusMutation,
  UpdateTaskStatusMutationVariables
>;
export type UpdateTaskStatusComponentProps = Omit<
  ReactApollo.MutationProps<
    UpdateTaskStatusMutation,
    UpdateTaskStatusMutationVariables
  >,
  "mutation"
>;

export const UpdateTaskStatusComponent = (
  props: UpdateTaskStatusComponentProps
) => (
  <ReactApollo.Mutation<
    UpdateTaskStatusMutation,
    UpdateTaskStatusMutationVariables
  >
    mutation={UpdateTaskStatusDocument}
    {...props}
  />
);

export type UpdateTaskStatusProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    UpdateTaskStatusMutation,
    UpdateTaskStatusMutationVariables
  >
> &
  TChildProps;
export function withUpdateTaskStatus<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    UpdateTaskStatusMutation,
    UpdateTaskStatusMutationVariables,
    UpdateTaskStatusProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    UpdateTaskStatusMutation,
    UpdateTaskStatusMutationVariables,
    UpdateTaskStatusProps<TChildProps>
  >(UpdateTaskStatusDocument, {
    alias: "withUpdateTaskStatus",
    ...operationOptions
  });
}
export const UpdateTaskStatusClientDocument = gql`
  mutation UpdateTaskStatusClient($task: Task!, $status: TaskStatusInput!) {
    updateTaskStatusClient(task: $task, status: $status) @client {
      id
    }
  }
`;
export type UpdateTaskStatusClientMutationFn = ReactApollo.MutationFn<
  UpdateTaskStatusClientMutation,
  UpdateTaskStatusClientMutationVariables
>;
export type UpdateTaskStatusClientComponentProps = Omit<
  ReactApollo.MutationProps<
    UpdateTaskStatusClientMutation,
    UpdateTaskStatusClientMutationVariables
  >,
  "mutation"
>;

export const UpdateTaskStatusClientComponent = (
  props: UpdateTaskStatusClientComponentProps
) => (
  <ReactApollo.Mutation<
    UpdateTaskStatusClientMutation,
    UpdateTaskStatusClientMutationVariables
  >
    mutation={UpdateTaskStatusClientDocument}
    {...props}
  />
);

export type UpdateTaskStatusClientProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    UpdateTaskStatusClientMutation,
    UpdateTaskStatusClientMutationVariables
  >
> &
  TChildProps;
export function withUpdateTaskStatusClient<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    UpdateTaskStatusClientMutation,
    UpdateTaskStatusClientMutationVariables,
    UpdateTaskStatusClientProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    UpdateTaskStatusClientMutation,
    UpdateTaskStatusClientMutationVariables,
    UpdateTaskStatusClientProps<TChildProps>
  >(UpdateTaskStatusClientDocument, {
    alias: "withUpdateTaskStatusClient",
    ...operationOptions
  });
}
export const TasksByBoardDocument = gql`
  query TasksByBoard($board: ID!, $role: String!, $status: String!) {
    tasksByBoard(input: { board: $board, role: $role, status: $status }) {
      id
      email {
        members {
          user {
            email
          }
          role
        }
        payload {
          subject
          text
          date
        }
      }
      status {
        type
      }
    }
  }
`;
export type TasksByBoardComponentProps = Omit<
  ReactApollo.QueryProps<TasksByBoardQuery, TasksByBoardQueryVariables>,
  "query"
> &
  ({ variables: TasksByBoardQueryVariables; skip?: false } | { skip: true });

export const TasksByBoardComponent = (props: TasksByBoardComponentProps) => (
  <ReactApollo.Query<TasksByBoardQuery, TasksByBoardQueryVariables>
    query={TasksByBoardDocument}
    {...props}
  />
);

export type TasksByBoardProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<TasksByBoardQuery, TasksByBoardQueryVariables>
> &
  TChildProps;
export function withTasksByBoard<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    TasksByBoardQuery,
    TasksByBoardQueryVariables,
    TasksByBoardProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    TasksByBoardQuery,
    TasksByBoardQueryVariables,
    TasksByBoardProps<TChildProps>
  >(TasksByBoardDocument, {
    alias: "withTasksByBoard",
    ...operationOptions
  });
}
export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      id
      email
    }
  }
`;
export type LoginMutationFn = ReactApollo.MutationFn<
  LoginMutation,
  LoginMutationVariables
>;
export type LoginComponentProps = Omit<
  ReactApollo.MutationProps<LoginMutation, LoginMutationVariables>,
  "mutation"
>;

export const LoginComponent = (props: LoginComponentProps) => (
  <ReactApollo.Mutation<LoginMutation, LoginMutationVariables>
    mutation={LoginDocument}
    {...props}
  />
);

export type LoginProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<LoginMutation, LoginMutationVariables>
> &
  TChildProps;
export function withLogin<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    LoginMutation,
    LoginMutationVariables,
    LoginProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    LoginMutation,
    LoginMutationVariables,
    LoginProps<TChildProps>
  >(LoginDocument, {
    alias: "withLogin",
    ...operationOptions
  });
}
export const RegisterDocument = gql`
  mutation Register($email: String!, $password: String!) {
    register(input: { email: $email, password: $password }) {
      id
      email
    }
  }
`;
export type RegisterMutationFn = ReactApollo.MutationFn<
  RegisterMutation,
  RegisterMutationVariables
>;
export type RegisterComponentProps = Omit<
  ReactApollo.MutationProps<RegisterMutation, RegisterMutationVariables>,
  "mutation"
>;

export const RegisterComponent = (props: RegisterComponentProps) => (
  <ReactApollo.Mutation<RegisterMutation, RegisterMutationVariables>
    mutation={RegisterDocument}
    {...props}
  />
);

export type RegisterProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<RegisterMutation, RegisterMutationVariables>
> &
  TChildProps;
export function withRegister<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    RegisterMutation,
    RegisterMutationVariables,
    RegisterProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    RegisterMutation,
    RegisterMutationVariables,
    RegisterProps<TChildProps>
  >(RegisterDocument, {
    alias: "withRegister",
    ...operationOptions
  });
}
export const MeDocument = gql`
  query Me {
    me {
      id
      email
    }
  }
`;
export type MeComponentProps = Omit<
  ReactApollo.QueryProps<MeQuery, MeQueryVariables>,
  "query"
>;

export const MeComponent = (props: MeComponentProps) => (
  <ReactApollo.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
);

export type MeProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<MeQuery, MeQueryVariables>
> &
  TChildProps;
export function withMe<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    MeQuery,
    MeQueryVariables,
    MeProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    MeQuery,
    MeQueryVariables,
    MeProps<TChildProps>
  >(MeDocument, {
    alias: "withMe",
    ...operationOptions
  });
}
export const MeClientDocument = gql`
  query MeClient {
    me @client {
      id
      email
    }
  }
`;
export type MeClientComponentProps = Omit<
  ReactApollo.QueryProps<MeClientQuery, MeClientQueryVariables>,
  "query"
>;

export const MeClientComponent = (props: MeClientComponentProps) => (
  <ReactApollo.Query<MeClientQuery, MeClientQueryVariables>
    query={MeClientDocument}
    {...props}
  />
);

export type MeClientProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<MeClientQuery, MeClientQueryVariables>
> &
  TChildProps;
export function withMeClient<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    MeClientQuery,
    MeClientQueryVariables,
    MeClientProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    MeClientQuery,
    MeClientQueryVariables,
    MeClientProps<TChildProps>
  >(MeClientDocument, {
    alias: "withMeClient",
    ...operationOptions
  });
}
