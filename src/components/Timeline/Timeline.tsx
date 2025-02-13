import React from "react";
import "./Timeline.css"
import { useTranslation, Trans } from "react-i18next";
import { Year } from "../../@types/types";

interface TimelineYearProps extends React.ComponentPropsWithoutRef<"li"> {
    year: Year;
}

const TimelineYear: React.FC<TimelineYearProps> = ({ year, ...props }) => {
    return (
        <li {...props} className="timeline-year">
            {year}
        </li>
    )
}

interface TimelineItemProps extends React.ComponentPropsWithoutRef<"li"> {
    item: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, className, ...props }) => {
    return (
        <li {...props} className={`timeline-item ${className || ""}`}>
            <div className="timeline-item-content">
                <p>
                    {<Trans>{item}</Trans> /* Trans needed for the inline <strong> tags */}
                </p>
            </div>
            <div className="timeline-item-content-arrow" />
            <div className="timeline-item-point">
                <div className="timeline-item-point-circle">
                    <div className="timeline-item-point-inner-circle" />
                </div>
            </div>
            <div className="timeline-item-empty-arrow" />
            <div className="timeline-item-empty" />
        </li>
    )
}

const Timeline = () => {
    const { t } = useTranslation("home");
    const timeline = t('home.timeline', { returnObjects: true });

    let timelineItemCounter = 0;

    return (
        <div className="timeline">
            <ol className="timeline-events">
                {Object.entries(timeline).reverse().flatMap(([year]) => [
                    ...Object.entries(t(`home.timeline.${year as Year}`, { returnObjects: true }))
                        .map(([index, item]) => {
                            const element = (
                                <TimelineItem
                                    key={`item-${year}-${index}`}
                                    item={item}
                                    className={timelineItemCounter % 2 === 1 ? "right" : ""}
                                />
                            );
                            timelineItemCounter += 1;
                            return element;
                        }),
                    <TimelineYear key={`year-${year}`} year={year as Year} />
                ])}
            </ol>
            <div className="timeline-line">
                <div className="timeline-line-start" />
                <div className="timeline-line-middle" />
                <div className="timeline-line-end" />
            </div>
        </div>
    );
};



export default Timeline
