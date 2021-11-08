import React, { useState, useEffect } from "react";
import axios from "axios";
import { Section } from "./ProjectsSection.style";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import CardMedia from "@mui/material/CardMedia";

const ProjectsSection = () => {
	const [projects, setProjects] = useState([]);
	const [projectImgs, setProjectImgs] = useState([]);
	const [projectYears, setProjectYears] = useState([]);

	const getProjects = async () => {
		try {
			const gitResponse = await axios.get(
				"https://gh-pinned-repos-5l2i19um3.vercel.app/?username=blink98"
			);
			setProjects(gitResponse.data);
		} catch (error) {
			// console.log("error>>>", error);
		}
	};

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
			// console.log("error>>>", error);
		}
	};

	const getProjectYears = async () => {
		try {
			const gitRepos = await axios.get(
				"https://api.github.com/users/blink98/repos"
			);

			const projectYearsArr = [];
			gitRepos.data.map((repo, index) => {
				projects.map((project) => {
					repo.html_url = repo.html_url.toLowerCase();
					project.link = project.link.toLowerCase();
					if (repo.html_url === project.link) {
						projectYearsArr.push({
							name: repo.name,
							createdYear: repo.created_at.slice(0, 4),
						});
						return repo;
					}
				});
			});

			setProjectYears(projectYearsArr);
		} catch (error) {
			// console.log("error>>>", error);
		}
	};

	const getProjectYear = (projectName) => {
		if (projectName && projectYears.length) {
			let result = "";
			projectYears.forEach((projectYear) => {
				if (projectYear.name === projectName) {
					result = projectYear.createdYear;
				}
			});
			return result;
		}
	};

	useEffect(() => {
		getProjects();
	}, []);

	useEffect(() => {
		if (projects.length) {
			getProjectImgs();
			getProjectYears();
		}
	}, [projects]);

	return (
		<Section>
			{projectImgs.length ? (
				<>
					<h2>Featured works</h2>
					{projects.map((project, index) => (
						<a
							href={project.link}
							key={project.link}
							target="_blank"
							rel="noreferrer"
						>
							<Card className="card" elevation={0}>
								<CardContent className="card__content">
									<CardMedia
										className="card__media"
										component="img"
										image={projectImgs[index]}
										alt={project.repo.replace("-", " ")}
									/>

									<div className="card__details">
										<h1 className="card__title">
											{project.repo.replace("-", " ")}
										</h1>

										<div className="card__tags">
											<Chip
												className="card__chip"
												label={getProjectYear(project.repo)}
											/>
										</div>

										<p className="card__desc">{project.description}</p>
									</div>
								</CardContent>
							</Card>
						</a>
					))}
				</>
			) : null}
		</Section>
	);
};

export default ProjectsSection;
