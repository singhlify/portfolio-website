import React, { useState, useEffect } from "react";
import axios from "axios";
import { Section } from "./ProjectsSection.style";

const ProjectsSection = () => {
	const [projects, setProjects] = useState([]);
	const [projectImgs, setProjectImgs] = useState([]);

	const getProjects = async () => {
		try {
			const gitResponse = await axios.get(
				"https://gh-pinned-repos-5l2i19um3.vercel.app/?username=blink98"
			);
			setProjects(gitResponse.data);
		} catch (error) {
			console.log("error>>>", error);
		}
	};

	useEffect(() => {
		getProjects();
	}, []);

	const getProjectImgs = async () => {
		try {
			const res = await Promise.all(
				projects.map(async (project) => {
					const response = await axios.get(
						`http://localhost:3000/api/projects?projURL=${project.link}`
					);
					return response.data.img;
				})
			);
			setProjectImgs(res);
		} catch (error) {
			console.log("error>>>", error);
		}
	};

	useEffect(() => {
		if (projects.length) {
			getProjectImgs();
		}
	}, [projects]);

	useEffect(() => {
		if (projectImgs.length) {
			projects.map((project, index) => {
				project.img = projectImgs[index];
			});
		}
	}, [projectImgs]);

	return <Section></Section>;
};

export default ProjectsSection;
