import { useRouter } from "next/router";

import Layout from "../../../components/Layout";

const ConfirmPage: React.FunctionComponent = () => {
  const router = useRouter();
  const { token } = router.query;

  return (
    <Layout title="Confirm Token">
      <h1>TOKEN: {token}</h1>
    </Layout>
  );
};

export default ConfirmPage;
