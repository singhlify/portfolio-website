import { Section } from "./ProjectsSection.style";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import CardMedia from "@mui/material/CardMedia";
import Skeleton from "@mui/material/Skeleton";

const ProjectsSection = ({ projects, isLoaded }) => {
	return (
		<Section id="projects">
			<h2>Featured works</h2>
			{isLoaded ? (
				projects.map((project) => (
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
									<h3 className="card__title">{project.name}</h3>

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
				))
			) : (
				<div className="skeletons">
					{[0, 1].map((elem) => (
						<div key={elem} className="skeleton__container">
							<Skeleton
								animation="wave"
								variant="rectangular"
								className="skeleton"
							/>
							<div>
								<Skeleton
									animation="wave"
									variant="text"
									width="50%"
									height={46}
								/>
								<Skeleton
									animation="wave"
									variant="text"
									width="20%"
									height={46}
								/>
								<Skeleton
									animation="wave"
									variant="text"
									width="100%"
									height={46}
								/>
							</div>
						</div>
					))}
				</div>
			)}
		</Section>
	);
};

export default ProjectsSection;
