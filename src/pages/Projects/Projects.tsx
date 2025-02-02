import { useTranslation } from "react-i18next";
import Project from "../../components/Project/Project";
import "./Projects.css";


const Projects = () => {
    const { t } = useTranslation("projects");
    const projects = t('projects', { returnObjects: true });

    return (
        <div className="projects-wrapper">
            {Object.entries(projects).map(([namespace]) => (
                <Project key={namespace} namespace={namespace} />
            ))}
            {Object.entries(projects).map(([namespace]) => (
                <Project key={namespace} namespace={namespace} />
            ))}
        </div>
    )
}

export default Projects;