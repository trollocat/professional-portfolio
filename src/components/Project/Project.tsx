import { useTranslation, Trans } from "react-i18next";
import { SiTypescript, SiJavascript, SiFirebase, SiReact, SiRedux, SiNodedotjs, SiMercadopago, SiMaplibre, SiExpress, SiVercel, SiI18Next, SiPostgresql } from "react-icons/si";
import { GiPolarBear } from "react-icons/gi";
import type { Project } from "../../@types/types"
import "./Project.css";

// type Technology = ["JavaScript", "Firebase"];

const technologyIcons = {
    "JavaScript": SiJavascript,
    "TypeScript": SiTypescript,
    "Firebase": SiFirebase,
    "PostgreSQL": SiPostgresql,
    "React": SiReact,
    "Redux": SiRedux,
    "Zustand": GiPolarBear,
    "Express.js": SiExpress,
    "MercadoPago": SiMercadopago,
    "Node.js": SiNodedotjs,
    "MapLibre": SiMaplibre,
    "Vercel": SiVercel,
    "i18next": SiI18Next
};

export default function Project({ project }: { project: Project }) {
    const { t } = useTranslation("projects");
    const learned = t(`projects.${project}.learned`, { returnObjects: true });
    const technologies = t(`projects.${project}.technologies`, { returnObjects: true });

    return (
        <article className={"card "}>
            <div className="content">
                <h1>{t(`projects.${project}.title`)}</h1><h2>-</h2><h2>{`${t(`projects.${project}.subtitle`)}`}</h2>
                <img src={`./projects/${project}/${project}-screenshot.webp`} alt="" />
                <h3>{t(`subtitles.details`)}</h3>
                <div className="details-section">
                    {t(`projects.${project}.details`).split("\n").map((line, index) => (
                        <p key={`${project}-${index}-${line.split(" ")[0]}`}><Trans >{line}</Trans></p>
                    ))}
                </div>
                <h3>{t(`subtitles.learned`)}</h3>
                <ul>
                    {
                        Object.entries(learned).map(([index, section]) => {
                            const key = `${project}-${index}-${section.split(" ")[0]}`;
                            return <li key={key}><Trans>{section}</Trans></li>;
                        })
                    }
                </ul>
                <h3>{t(`subtitles.technologies`)}</h3>
                <div className="technologies">
                    {
                        Object.entries(technologies).map(([index, tech]) => {
                            if (!(tech in technologyIcons)) return tech;
                            const IconComponent = technologyIcons[tech];
                            return (
                                <div className="technology-container">
                                    <IconComponent key={`${project}-${index}-${tech}`} title={tech} size={48} className="technology-icon" />
                                    <span className="technology-name">
                                        {tech}
                                    </span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </article>
    );
}
