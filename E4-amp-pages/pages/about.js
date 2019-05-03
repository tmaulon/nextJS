import Layout from "../components/MyLayout.js";
import { withAmp, useAmp } from "next/amp";

export default withAmp(
  function() {
    return (
      <Layout>
        <p>This is the about page</p>
      </Layout>
    );
  },
  { hybrid: true }
);
