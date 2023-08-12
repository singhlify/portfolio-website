const contentful = require("contentful");

const getHomepageContent = async (req, res) => {
  const client = contentful.createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE,
    environment: process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    const response = await client.getEntry(
      process.env.NEXT_PUBLIC_CONTENTFUL_HOMEPAGE_CONTENT_ID
    );
    res.send(response?.fields);
  } catch {
    console.log("error>>>>", error);
  }
};

export default getHomepageContent;
