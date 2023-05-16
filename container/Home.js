import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Navbar from "@/components/Navbar/Navbar";
import IntroSection from "@/components/IntroSection/IntroSection";
import PostsSection from "@/components/PostsSection/PostsSection";
import FooterSection from "@/components/FooterSection/FooterSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";
import MetaTags from "@/components/MicroComponents/MetaTags";
import logo from "@/public/logo.png";

// for meta tags
const title = "Gurjot Singh";
const description =
  "I'm Gurjot Singh, a Full-Stack geek & developer. I have been developing Web Apps since the beginning of 2020. In my free time I write blogs on HashNode. You can find me everywhere @singhlify.";
const keywords =
  "frontend developer, backend developer, fullstack developer, web developer, react, mongodb, nodejs, express, nextjs, javascript";

const Home = () => {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  const getProjects = async () => {
    setIsLoaded(false);
    try {
      const { data } = await axios.get(`${window.location.href}api/projects`);
      setProjects(data);
    } catch (error) {
      // console.log("error>>>", error);
    }
    setIsLoaded(true);
  };

  useEffect(() => {
    if (window.location.hash.slice(0, 1) === "#") {
      router.push("/");
    }
    getProjects();
  }, []);

  return (
    <>
      <MetaTags title={title} description={description} img={logo?.src}>
        <meta name="author" content="Gurjot Singh" />
        <meta name="keywords" content={keywords} />
        <meta property="twitter:creator" content="@singhlify" />
      </MetaTags>

      <Navbar />

      <IntroSection />

      <PostsSection />

      <ProjectsSection projects={projects} isLoaded={isLoaded} />

      <FooterSection />
    </>
  );
};

export default Home;
