import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  Navbar,
  IntroSection,
  PostsSection,
  FooterSection,
  ProjectsSection,
  MetaTags,
} from "@/components";
import { logo } from "assets";

// for meta tags
const title = "Gurjot Singh (@Singhlify) | Full Stack Developer";
const description =
  "I'm Gurjot Singh, a Full-Stack geek & developer. I have been developing Web Apps since 2020. In my free time I write blogs on HashNode. You can find me everywhere @Singhlify.";
const keywords =
  "frontend developer, backend developer, fullstack developer, web developer, typescript, react, mongodb, nodejs, express, nextjs, javascript";

const Home = ({ pageContent }) => {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash.slice(0, 1) === "#") {
      router.push("/");
    }
  }, []);

  return (
    <>
      <MetaTags title={title} description={description} img={logo?.src}>
        <meta name="author" content="Gurjot Singh" />
        <meta name="keywords" content={keywords} />
        <meta property="twitter:creator" content="@Singhlify" />
      </MetaTags>

      <Navbar />

      <IntroSection
        resumeUrl={pageContent?.introduction?.resumeUrl}
        introTitle={pageContent?.introduction?.title}
        introDescription={pageContent?.introduction?.description}
      />

      <PostsSection posts={pageContent?.articles} />

      <ProjectsSection projects={pageContent?.projects} />

      <FooterSection />
    </>
  );
};

export default Home;
