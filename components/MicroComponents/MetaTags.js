import Head from "next/head";

const MetaTags = ({ title, description, img, children = [] }) => {
  let defaultImg = img;
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    defaultImg = `${process.env.NEXT_PUBLIC_BASE_URL}${img}`;
  }

  let twitterImg = "";
  if (img.includes("http")) {
    twitterImg = img;
  } else {
    twitterImg = `${process.env.NEXT_PUBLIC_BASE_URL}${img}`;
  }

  return (
    <Head>
      {/* HTML Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {children.length > 0 && children}

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={defaultImg} />

      {/* Facebook Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImg} />
      <meta property="og:url" content={`${process.env.NEXT_PUBLIC_BASE_URL}`} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImg} />
    </Head>
  );
};

export default MetaTags;
