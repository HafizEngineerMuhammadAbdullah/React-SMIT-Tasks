import React from 'react';
import { motion } from 'motion/react';
import {
    FaReact, FaNodeJs, FaPython, FaDocker,
    FaAws, FaGitAlt, FaFigma, FaHtml5
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql } from 'react-icons/si';
import styles from './Skills.module.css';
import { fadeInUp, staggerContainer, scaleOnHover } from '../../animation/variants';


const Skills = () => {
    // Skills Array of Objects with Icons, Names, and Colors
    const skills = [
        { icon: FaReact, name: 'React', color: '#61dafb' },
        { icon: SiTypescript, name: 'TypeScript', color: '#3178c6' },
        { icon: FaNodeJs, name: 'Node.js', color: '#68a063' },
        { icon: SiTailwindcss, name: 'Tailwind', color: '#38b2ac' },
        { icon: FaPython, name: 'Python', color: '#3776ab' },
        { icon: SiMongodb, name: 'MongoDB', color: '#4ea94b' },
        { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
        { icon: FaDocker, name: 'Docker', color: '#2496ed' },
        { icon: FaAws, name: 'AWS', color: '#ff9900' },
        { icon: FaGitAlt, name: 'Git', color: '#f05032' },
        { icon: FaFigma, name: 'Figma', color: '#a259ff' },
        { icon: FaHtml5, name: 'HTML5', color: '#e34f26' },
    ];



    return (
        // Skills Section
        <section id="skills" className={styles.skills}>
            {/* for Skills Container */}
            <motion.div
                className={styles.container}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* Skills Heading */}
                <motion.h2 variants={fadeInUp} className={styles.heading}>
                    {/* for Skill Heading Gradient Text */}
                    <span className={styles.gradientText}>My Skills</span>
                </motion.h2>
                {/* for Skills Subheading */}
                <motion.p variants={fadeInUp} className={styles.subheading}>
                    Technologies I work with regularly
                </motion.p>

                {/* for Skills Grid Section */}
                <motion.div className={styles.grid}>
                    {/* MySkills */}
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className={styles.skillCard}
                            variants={fadeInUp}
                            {...scaleOnHover}
                            whileHover={{
                                ...scaleOnHover.whileHover,
                                boxShadow: `0 8px 32px ${skill.color}33`,
                                borderColor: skill.color,
                            }}
                        >
                            {/* Skill Icons */}
                            <skill.icon
                                className={styles.skillIcon}
                                style={{ color: skill.color }}
                            />
                            {/* for Skill Name */}
                            <span className={styles.skillName}>{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};


export default Skills;

