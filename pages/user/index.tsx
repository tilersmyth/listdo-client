import * as React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";

const UserPage: React.FunctionComponent = () => (
  <Layout title="User page">
    <h1>Hello User 👋</h1>
    <p>
      <Link href="/">
        <a>home</a>
      </Link>
    </p>
  </Layout>
);

export default UserPage;
