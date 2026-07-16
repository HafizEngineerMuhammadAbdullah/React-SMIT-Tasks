import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Contact.module.css';
import { fadeInUp, staggerContainer, scaleOnHover } from '../../animation/variants';

const Contact = () => {
    // formData Object that contains all the form fields info
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    // function that handles the change occur in the form field 
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // function that handles submission when the submit button clicks
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent! (Demo)');
    };

    return (
        // Contact Section
        <section id="contact" className={styles.contact}>
            {/* for Container */}
            <motion.div
                className={styles.container}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {/* for Contact heading */}
                <motion.h2 variants={fadeInUp} className={styles.heading}>
                    <span className={styles.gradientText}>Get in Touch</span>
                </motion.h2>
                {/* for Contact Subheading */}
                <motion.p variants={fadeInUp} className={styles.subheading}>
                    Have a project in mind? Let's talk.
                </motion.p>

                {/* Main Content */}
                <div className={styles.content}>
                    <motion.div
                        className={styles.info}
                        variants={fadeInUp}
                    >
                        {/* for Email Info */}
                        <div className={styles.infoItem}>
                            <FaEnvelope className={styles.infoIcon} />
                            <div>
                                <h4>Email</h4>
                                <p>alex@devportfolio.com</p>
                            </div>
                        </div>
                        {/* for Phone Info */}
                        <div className={styles.infoItem}>
                            <FaPhone className={styles.infoIcon} />
                            <div>
                                <h4>Phone</h4>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                        {/* for Location Info */}
                        <div className={styles.infoItem}>
                            <FaMapMarkerAlt className={styles.infoIcon} />
                            <div>
                                <h4>Location</h4>
                                <p>San Francisco, CA</p>
                            </div>
                        </div>
                    </motion.div>
                   
                   {/* for Form */}
                    <motion.form
                        className={styles.form}
                        variants={fadeInUp}
                        onSubmit={handleSubmit}
                    >
                        {/* For Name */}
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className={styles.input}
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        {/* for Email */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className={styles.input}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        {/* for Message */}
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            className={styles.textarea}
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                        {/* for Submit button */}
                        <motion.button
                            type="submit"
                            className={styles.submitBtn}
                            {...scaleOnHover}
                            whileHover={{
                                ...scaleOnHover.whileHover,
                                boxShadow: '0 0 30px rgba(108, 99, 255, 0.4)',
                            }}
                        >
                            Send Message
                        </motion.button>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;