import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import FirebaseIcon from "../Icons/Technologies/FirebaseIcon";
import JavascriptIcon from "../Icons/Technologies/JavascriptIcon";
import "./Project.css";

export default function Project({ namespace }: { namespace: string }) {
    const [expanded, setExpanded] = useState(false);
    const { t } = useTranslation("projects");
    const contentRef = useRef<HTMLDivElement>(null);
    const sections = t(`projects.${namespace}.sections`, { returnObjects: true });

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.height = expanded ? `${contentRef.current.scrollHeight}px` : "";
        }
    }, [expanded]);

    const toggleExpand = () => setExpanded(!expanded);

    return (
        <article className={"expandable-container card " + (expanded ? "expanded" : "collapsed")} onClick={toggleExpand} ref={contentRef}>
            {expanded ?
                // expanded
                (<div className="expanded content">
                    <div className="icon-container">
                        <img src={t(`projects.${namespace}.icon`)} alt="" />
                    </div>
                    <h1>{t(`projects.${namespace}.title`)}</h1>
                    <p>{t(`projects.${namespace}.details`)}</p>
                    <img src={t(`projects.${namespace}.screenshot`)} alt="" />
                    {
                        Object.entries(sections).map(([index, section]) => {
                            const key = `${index}-${section.split(" ")[0]}`;
                            return <p key={key}>{section}</p>;
                        })
                    }
                    <div className="technologies">
                        <JavascriptIcon />
                        <FirebaseIcon />
                    </div>
                </div>
                )
                :
                // collapsed
                (<div className="collapsed content">
                    <div className="icon-container">
                        <img src={t(`projects.${namespace}.icon`)} alt="" />
                    </div>
                    <h1>{t(`projects.${namespace}.title`)}</h1>
                    <p>{t(`projects.${namespace}.brief`)}</p>
                    <div className="handle" />
                </div>)
            }
        </article>
    );
}
