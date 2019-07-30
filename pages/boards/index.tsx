import * as React from "react";
import { LinearProgress, Typography } from "@material-ui/core";

import { AllBoardsComponent } from "../../generated/apolloComponents";
import AdminLayout from "../../components/layouts/Admin";
import { BoardGrid } from "../../components/boards/BoardGrid";
import { withAuth } from "../../components/Auth";

const BoardPage: React.FunctionComponent = () => {
  return (
    <AdminLayout>
      <AllBoardsComponent>
        {({ data, loading }) => {
          if (loading) {
            return <LinearProgress />;
          }

          if (!data) {
            return (
              <Typography variant="h1">Something went wrong :(</Typography>
            );
          }

          if (data.allBoards.length === 0) {
            return <Typography variant="h1">No boards yet</Typography>;
          }

          return <BoardGrid boards={data.allBoards} />;
        }}
      </AllBoardsComponent>
    </AdminLayout>
  );
};

export default withAuth(BoardPage);
