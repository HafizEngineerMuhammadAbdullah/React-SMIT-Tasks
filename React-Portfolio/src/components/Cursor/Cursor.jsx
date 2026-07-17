import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./Cursor.module.css";

const Cursor = () => {

    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {

        const moveCursor = (e) => {

            setPosition({
                x: e.clientX,
                y: e.clientY
            });

        };

        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };

    }, []);

    return (

        <motion.div
            className={styles.cursor}
            animate={{
                x: position.x - 10,
                y: position.y - 10
            }}
            transition={{
                type: "spring",
                stiffness: 500,
                damping: 28
            }}
        />

    );

};

export default Cursor;