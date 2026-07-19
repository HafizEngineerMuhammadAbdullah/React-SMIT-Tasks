import { motion, useMotionValue, useSpring } from "motion/react";
import { useState, useEffect } from "react";
import styles from "./Cursor.module.css";

const Cursor = () => {

    // useState to remember the cursor position and update it when the mouse moves
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });
    // const mouseX = useMotionValue(-100);
    // const mouseY = useMotionValue(-100);

    // const ringX = useSpring(mouseX, {
    //     stiffness: 250,
    //     damping: 25
    // });

    // const ringY = useSpring(mouseY, {
    //     stiffness: 250,
    //     damping: 25
    // });

    // use to track the mouse position and update the state accordingly
    // Listen for mouse movement and update the cursor position
    // it starts listening only once when the component is mounted(first time render) and stops listening when the component is unmounted
    useEffect(() => {

        const  handleMouseMove = (e) => {

            setPosition({
                // clientX => distance from the left edge of the viewport to the mouse pointer
                // clientY => distance from the top edge of the viewport to the mouse pointer
                x: e.clientX,
                y: e.clientY
            });

            // mouseX.set(e.clientX);
            // mouseY.set(e.clientY);

        };

        // listen event when the mouse move
        window.addEventListener("mousemove",  handleMouseMove);

        // Clean Up Function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("mousemove",  handleMouseMove);
        };

    }, []);//runs only once after mounting(when first time component render) & never again

    return (

        <div className={styles.cursor}>
            {/* Outer Circle */}
            <motion.div className={styles.cursorOuter}
                animate={{
                    // to make the cursor center on the mouse pointer, we need to subtract half of the cursor's width and height from the mouse position
                    x: position.x - 20,
                    y: position.y - 20
                    // x: position.x,
                    // y: position.y
                }}

                // style={{
                //     x: ringX,
                //     y: ringY
                // }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                }} />

            {/* Inner Circle */}
            <motion.div className={styles.cursorInner}
                animate={{
                    // to make the cursor center on the mouse pointer, we need to subtract half of the cursor's width and height from the mouse position
                    x: position.x - 4,
                    y: position.y - 4
                    // x: position.x,
                    // y: position.y
                }}
                // style={{
                //     x: mouseX,
                //     y: mouseY
                // }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30
                }} />
        </div >
    );
};

export default Cursor;