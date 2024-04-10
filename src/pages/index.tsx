import type { NextPage } from "next";
import { Layout } from "../components/Layout/Layout";
import { FirstSection } from "../features/FirstSection/FirstSection";
import { SecondSection } from "../features/SecondSection/SecondSection";

const Home: NextPage = () => {
  return (
    <Layout subtitle="Bernardo Entusiasta | Comunidade">
      <FirstSection />
      <SecondSection />
    </Layout>
  );
};

export default Home;
