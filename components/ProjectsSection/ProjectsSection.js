import React, { useState, useEffect } from "react";
import axios from "axios";
import { Section } from "./ProjectsSection.style";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import CardMedia from "@mui/material/CardMedia";

const ProjectsSection = () => {
	// https://api.github.com/users/blink98/repos
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

	return (
		<Section>
			<h2>Featured works</h2>

			<Card className="card" elevation={0}>
				<CardContent className="card__content">
					<CardMedia
						className="card__media"
						component="img"
						// height="230"
						image="https://image.shutterstock.com/shutterstock/photos/1222098511/display_1500/stock-vector-infographic-dashboard-template-simple-green-blue-design-of-interface-admin-panel-with-graphs-1222098511.jpg"
						alt="Paella dish"
					/>

					<div className="card__details">
						<h1 className="card__title">Designing Dashboards</h1>

						<div className="card__tags">
							<Chip label="2020" className="card__chip" />
						</div>

						<p className="card__desc">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet.
						</p>
					</div>
				</CardContent>
			</Card>
		</Section>
	);
};

export default ProjectsSection;
