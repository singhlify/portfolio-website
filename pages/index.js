import Home from "@/container/Home";
import { createClient } from "contentful";

export default function RootPage({ data }) {
  return <Home pageContent={data} />;
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
    environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  let data = {};

  try {
    const response = await client.getEntry(
      process.env.NEXT_PUBLIC_CONTENTFUL_HOMEPAGE_CONTENT_ID
    );
    data = response?.fields?.homepage;
  } catch {
    console.log("error>>>>", error);
  }

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
