import type { NextPage } from "next";
import { Layout } from "../components/Layout/Layout";
import { FirstSection } from "../features/FirstSection/FirstSection";
import { SecondSection } from "../features/SecondSection/SecondSection";
import { JunteSe } from "../features/JunteSe/JunteSe";
import { Sobre } from "../features/Sobre/Sobre";

const Home: NextPage = () => {
  return (
    <Layout subtitle="Bernardo Entusiasta | Comunidade">
      <FirstSection />
      <SecondSection />
      <Sobre />
      <JunteSe />
    </Layout>
  );
};

export default Home;
