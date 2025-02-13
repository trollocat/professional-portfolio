import { useTranslation } from "react-i18next";
import Project from "../../components/Project/Project";
import type { Project as ProjectType } from "../../@types/types"
import "./Projects.css";

const Projects = () => {
    const { t } = useTranslation("projects");
    const projects = t('projects', { returnObjects: true }) as Record<ProjectType, unknown>;

    return (
        <div className="projects-wrapper">
            {Object.entries(projects).map(([project]) => (
                <Project key={project} project={project as ProjectType} />
            ))}
        </div>
    )
}

export default Projects;