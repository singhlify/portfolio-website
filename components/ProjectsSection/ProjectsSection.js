import { Section } from "./ProjectsSection.style";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import CardMedia from "@mui/material/CardMedia";
import Skeleton from "@mui/material/Skeleton";

const ProjectsSection = ({ projects = [] }) => {
  return (
    <Section id="projects">
      {projects?.length ? (
        <>
          <h2>Featured works</h2>
          {projects.map((project) => (
            <a
              href={project?.url}
              key={project?.url}
              target="_blank"
              rel="noreferrer"
            >
              <Card className="card" elevation={0}>
                <CardContent className="card__content">
                  <CardMedia
                    className="card__media"
                    component="img"
                    image={project?.image}
                    alt={project?.name}
                  />

                  <div className="card__details">
                    <h3 className="card__title">{project?.name}</h3>

                    <div className="card__tags">
                      {project?.year ? (
                        <Chip className="card__chip" label={project?.year} />
                      ) : null}
                    </div>

                    <p className="card__desc">{project?.description}</p>
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
