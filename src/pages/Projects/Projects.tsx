import { useTranslation } from "react-i18next";
import Project from "../../components/Project/Project";
import "./Projects.css";
type ProjectKeys = "airland" | "geo-quizzes";

const Projects = () => {
    const { t } = useTranslation("projects");
    const projects = t('projects', { returnObjects: true }) as Record<ProjectKeys, unknown>;

    return (
        <div className="projects-wrapper">
            {Object.entries(projects).map(([project]) => (
                <Project key={project} project={project as ProjectKeys} />
            ))}
        </div>
    )
}

export default Projects;