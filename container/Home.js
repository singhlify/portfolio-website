import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import IntroSection from "../components/IntroSection/IntroSection";
import MainWrapper from "components/MainWrapper/MainWrapper";
import PostsSection from "@/components/PostsSection/PostsSection";
import FooterSection from "@/components/FooterSection/FooterSection";
import ProjectsSection from "@/components/ProjectsSection/ProjectsSection";

const Home = () => {
	return (
		<>
			<Head>
				<title>Gurjot Singh</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
				/>
			</Head>

			<Navbar />

			{/* <MainWrapper>
			</MainWrapper> */}

			<IntroSection />
			{/* <PostsSection /> */}

			<ProjectsSection />

			<FooterSection />
		</>
	);
};

export default Home;
