import * as React from "react";

import { AllBoardsComponent } from "../../generated/apolloComponents";
import AdminLayout from "../../components/layouts/Admin";

const BoardPage: React.FunctionComponent = () => (
  <AdminLayout>
    <AllBoardsComponent>
      {({ data }) => (
        <div>
          {data && data.allBoards
            ? JSON.stringify(data.allBoards)
            : "Loading..."}
        </div>
      )}
    </AllBoardsComponent>
  </AdminLayout>
);

export default BoardPage;
