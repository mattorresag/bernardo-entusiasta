import type { NextPage } from "next";
import { Layout } from "../components/Layout/Layout";
import { FirstSection } from "../features/FirstSection/FirstSection";
import { SecondSection } from "../features/SecondSection/SecondSection";
import { JunteSe } from "../features/JunteSe/JunteSe";
import { Sobre } from "../features/Sobre/Sobre";
import { Parceiros } from "../features/Parceiros/Parceiros";
import { Beneficios } from "../features/Beneficios/Beneficios";
import { ConecteSe } from "../features/ConecteSe/ConecteSe";

const Home: NextPage = () => {
  return (
    <Layout subtitle="Bernardo Entusiasta | Comunidade">

      <FirstSection />
      <SecondSection />
      <ConecteSe />
      <Beneficios />
      <Parceiros />
      <Sobre />
      <JunteSe />
    </Layout>
  );
};

export default Home;
