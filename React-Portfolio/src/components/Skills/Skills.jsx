import React from 'react';
import { motion } from 'motion/react';
import styles from './Skills.module.css';
import { skills } from '../../data/portfolioData'; // Clean abstraction import
import { fadeInUp, staggerContainer, scaleOnHover } from '../../animation/variants';


const Skills = () => {


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
                    Technologies I work with regularly to build scalable applications
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

