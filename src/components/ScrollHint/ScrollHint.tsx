import { useEffect, useState } from "react";
import { motion } from "motion/react";
import ArrowDown from "../Icons/ArrowDown";
import { useTranslation } from "react-i18next";
import "./ScrollHint.css"

const ScrollHint = () => {
    const { t } = useTranslation("home");
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;            
            const maxScroll = window.innerHeight * 0.25;
            setOpacity(Math.max(1 - scrollY / maxScroll, 0));
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            className="scroll-hint"
            animate={{ opacity }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
        >
            <ArrowDown />
            <span>{t("home.scroll-hint")}</span>
            <ArrowDown />
        </motion.div>
    );
};

export default ScrollHint;