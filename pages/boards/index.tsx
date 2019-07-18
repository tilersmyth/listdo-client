import * as React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import { AllBoardsComponent } from "../../generated/apolloComponents";

const BoardPage: React.FunctionComponent = () => (
  <AllBoardsComponent>
    {({ data }) => (
      <Layout title="Board page">
        <div>
          {data && data.allBoards
            ? JSON.stringify(data.allBoards)
            : "Loading..."}
        </div>
        <p>
          <Link href="/">
            <a>home</a>
          </Link>
        </p>
      </Layout>
    )}
  </AllBoardsComponent>
);

export default BoardPage;
