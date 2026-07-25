import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './Contact.module.css';
import { fadeInUp, staggerContainer, scaleOnHover } from '../../animation/variants';

const Contact = () => {
    // formData Object that contains all the form fields info
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

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

                {/* Left Main Content */}
                <div className={styles.content}>
                    <motion.div
                        className={styles.info}
                        variants={fadeInUp}
                    >
                        {/* for Contact Info Heading */}
                        <div className={styles.infoItem} style={{ color: "#fff" }}>
                            <h1>Contact Info</h1>
                        </div>
                        {/* for Email Info */}
                        <div className={styles.infoItem}>
                            <FaEnvelope className={styles.infoIcon} />
                            <div>
                                <h4>Email</h4>
                                <p>abdullahkhalid2k25@gmail.com</p>
                            </div>
                        </div>
                        {/* for Phone Info */}
                        <div className={styles.infoItem}>
                            <FaPhone className={styles.infoIcon} />
                            <div>
                                <h4>Phone</h4>
                                <p>+92 (315) 899-3071</p>
                            </div>
                        </div>
                        {/* for Location Info */}
                        <div className={styles.infoItem}>
                            <FaMapMarkerAlt className={styles.infoIcon} />
                            <div>
                                <h4>Location</h4>
                                <p>North Karachi, KHI</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* for Right Form */}
                    <motion.form
                        className={styles.form}
                        variants={fadeInUp}
                        onSubmit={handleSubmit}
                    >
                        <div className={styles.formGrid}>
                            {/* For Name */}
                            <div className={styles.userName}>
                                <label htmlFor="user-name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id='user-name'
                                    placeholder="Thomas John"
                                    className={styles.input}
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {/* for Email */}
                            <div className={styles.userEmail}>
                                <label htmlFor="user-email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id='user-email'
                                    placeholder="thomasjohan@example.com"
                                    className={styles.input}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        {/* for Subject */}
                        <div className={styles.userSubject}>
                            <label htmlFor="user-subject">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                id='user-subject'
                                placeholder="Project discussion"
                                className={styles.input}
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {/* for Text Message */}
                        <div className={styles.textMsg}>
                            <label htmlFor="user-msg">Message</label>
                            <textarea
                                name="message"
                                id='user-msg'
                                placeholder="Tell me about your project..."
                                className={styles.textarea}
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
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