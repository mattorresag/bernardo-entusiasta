/* eslint-disable @next/next/no-page-custom-font */
import { NextSeo } from "next-seo";
import Head from "next/head";
import { useEffect, useState } from "react";

interface Props {
  subtitle?: string;
  seoDescription?: string;
}

const PageMeta = ({ subtitle }: Props) => {
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    setTitle(`${subtitle ? `${subtitle}` : ""}`);
  }, [subtitle]);

  return (
    <>
      <NextSeo
        title={`${subtitle ? `${subtitle}` : ""}`}
        canonical={``}
        twitter={{
          site: ``,
        }}
        description={``}
        openGraph={{
          title: "",
          type: "website",
          locale: "pt_BR",
          url: ``,
          // images: [
          //   {
          //     url: "https://${client}.comlogogrande.png",
          //     alt: "Logo ${client}",
          //   },
          // ],
          description: ``,
        }}
      />
      <Head>
        <title>{title}</title>
        <meta name="description" content={` ${subtitle}`} />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon-16x16.png"
        />
        <link rel="manifest" href="site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
    </>
  );
};

export default PageMeta;
