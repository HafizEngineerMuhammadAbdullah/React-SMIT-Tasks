import React from 'react';
import { motion } from 'motion/react';
import {
    FaReact, FaNodeJs, FaPython, FaDocker,
    FaAws, FaGitAlt, FaFigma, FaHtml5
} from 'react-icons/fa';
import { FaJava,FaGithub,FaCss3Alt,FaBootstrap } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { TbBrandJavascript,TbBrandFramerMotion,TbBrandSupabase,TbBrandNextjs,TbBrandThreejs } from "react-icons/tb";
import { SiCplusplus,SiC, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql,SiFirebase,SiGsap  } from 'react-icons/si';
import styles from './Skills.module.css';
import { fadeInUp, staggerContainer, scaleOnHover } from '../../animation/variants';


const Skills = () => {
    // Skills Array of Objects with Icons, Names, and Colors
    const skills = [
        { icon: FaReact, name: 'React', color: '#61dafb' },
        { icon: TbBrandNextjs, name: 'Nextjs', color: '#0070F3' },
        { icon: SiTypescript, name: 'TypeScript', color: '#3178c6' },
        { icon: FaNodeJs, name: 'Node.js', color: '#68a063' },
        { icon: SiTailwindcss, name: 'Tailwind', color: '#38b2ac' },
        { icon: FaBootstrap, name: 'Bootstrap', color: ' #7952b3' },
        { icon: FaPython, name: 'Python', color: '#3776ab' },
        { icon: SiMongodb, name: 'MongoDB', color: '#4ea94b' },
        { icon: SiPostgresql, name: 'PostgreSQL', color: '#336791' },
        { icon: GrMysql, name: 'MySQL', color: '#336791' },
        { icon: FaDocker, name: 'Docker', color: '#2496ed' },
        { icon: FaAws, name: 'AWS', color: '#ff9900' },
        { icon: FaGitAlt, name: 'Git', color: '#f05032' },
        { icon: FaGithub, name: 'Github', color: '#e6e6e6' },
        { icon: FaFigma, name: 'Figma', color: '#a259ff' },
        { icon: TbBrandFramerMotion, name: 'FramerMotion', color: '#0099FF' },
        { icon: SiGsap, name: 'Gsap', color: '#88ce02' },
        { icon: TbBrandThreejs, name: 'Threejs', color: '#F7DF1E' },
        { icon: SiFirebase, name: 'Firebase', color: '  #F57C00' },
        { icon: TbBrandSupabase, name: 'Supabase', color: '  #3FCF8E' },
        { icon: FaHtml5, name: 'HTML5', color: '#e34f26' },
        { icon: FaCss3Alt, name: 'CSS3', color: '#264de4' },
        { icon: TbBrandJavascript, name: 'Javascript', color: '#f7df1e' },
        { icon: FaJava, name: 'Java', color: '#5382a1' },
        { icon: SiCplusplus, name: 'C++', color: '#00589C' },
        { icon: SiC, name: 'C', color: '#A8B9CC' },
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

