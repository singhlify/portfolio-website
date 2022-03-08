import React, { useState, useEffect } from "react";
import axios from "axios";
import { Section } from "./ProjectsSection.style";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import CardMedia from "@mui/material/CardMedia";

const ProjectsSection = () => {
	const [projects, setProjects] = useState([]);

	const getProjects = async () => {
		try {
			const { data } = await axios.get(
				`${process.env.NEXT_PUBLIC_URL}/api/projects`
			);
			setProjects(data);
		} catch (error) {
			// console.log("error>>>", error);
		}
	};

	useEffect(() => {
		getProjects();
	}, []);

	return (
		<Section>
			{projects.length > 0 ? (
				<>
					<h2>Featured works</h2>
					{projects.map((project) => (
						<a
							href={project.url}
							key={project.url}
							target="_blank"
							rel="noreferrer"
						>
							<Card className="card" elevation={0}>
								<CardContent className="card__content">
									<CardMedia
										className="card__media"
										component="img"
										image={project.image}
										alt={project.name}
									/>

									<div className="card__details">
										<h1 className="card__title">{project.name}</h1>

										<div className="card__tags">
											<Chip
												className="card__chip"
												label={project.ghApiData.created_at.slice(0, 4)}
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
