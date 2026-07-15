import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './Projects.module.css';
import { fadeInUp, staggerContainer, scaleOnHover } from '../../animation/variants';

const Projects = () => {

  // Projects Array of Objects with Title, Description, Tech Stack, GitHub Link, Live Link, and Gradient Background
  const projects = [
    {
      title: 'EcoTrack',
      description: 'Real-time carbon footprint tracker with interactive dashboards and AI insights.',
      tech: ['React', 'Node.js', 'MongoDB', 'AI'],
      github: '#',
      live: '#',
      gradient: 'linear-gradient(135deg, #6c63ff, #a855f7)'
    },
    {
      title: 'HealthBridge',
      description: 'Telemedicine platform connecting patients with doctors through secure video calls.',
      tech: ['Next.js', 'TypeScript', 'WebRTC', 'Tailwind'],
      github: '#',
      live: '#',
      gradient: 'linear-gradient(135deg, #f093fb, #f5576c)'
    },
    {
      title: 'FinFlow',
      description: 'Personal finance manager with real-time stock tracking and portfolio optimization.',
      tech: ['Python', 'Flask', 'React', 'D3.js'],
      github: '#',
      live: '#',
      gradient: 'linear-gradient(135deg, #4facfe, #00f2fe)'
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      {/* For Container */}
      <motion.div 
        className={styles.container}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        // when the section is in the viewport(screen), trigger the animation once and when 10% of it is visible
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* For Heading */}
        <motion.h2 variants={fadeInUp} className={styles.heading}>
          <span className={styles.gradientText}>Featured Projects</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className={styles.subheading}>
          Some things I've built recently
        </motion.p>

        {/* Project Grid Section */}
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              variants={fadeInUp}
              whileHover={{ 
                y: -12,
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
              }}
            >
              {/* For Project Card Header  */}
              <div 
                className={styles.cardHeader}
                style={{ background: project.gradient }}
              >
                {/* Project Card Icon */}
                <div className={styles.cardIcon}>🚀</div>
              </div>
              
              {/* For Project Card Body  */}
              <div className={styles.cardBody}>
                {/* Project Title */}
                <h3 className={styles.projectTitle}>{project.title}</h3>
                {/* Project Description */}
                <p className={styles.projectDesc}>{project.description}</p>
                {/* Project Tech Stack */}
                <div className={styles.techStack}>
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className={styles.techTag}>{tech}</span>
                  ))}
                </div>

                {/* For Project Links */}
                <div className={styles.projectLinks}>
                  <motion.a 
                    href={project.github} 
                    className={styles.linkBtn}
                    {...scaleOnHover}
                  >
                    <FaGithub /> Code
                  </motion.a>

                  <motion.a 
                    href={project.live} 
                    className={styles.linkBtn}
                    {...scaleOnHover}
                  >
                    <FaExternalLinkAlt /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;