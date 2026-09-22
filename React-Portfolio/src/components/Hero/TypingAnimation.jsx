import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypingAnimation = () => {
    return (
        <TypeAnimation
            sequence={[
                800, // wait for previous animations to finish
                'Frontend Developer.',
                2000,
                'Creative Coder.',
                2000,
                'AI/ML Enthusiast.',
                2000,
                'Open Source Contributor.',
                2000,
                'Web3 & Blockchain Developer.',
                2000,
                'Mobile App Developer.',
                2000,
                'Game Development Enthusiast.',
                2000,
                'Cloud Computing Specialist.',
                2000,
                'Cybersecurity Advocate.',
                2000,
                'Data Science Explorer.',
                2000,
                'DevOps & CI/CD Practitioner.',
                2000,
                'AR/VR Developer.',
                2000,
                'IoT Innovator.',
                2000,
                'Tech Blogger & Educator.',
                2000,
                'Open Source Maintainer.',
                2000,
                'AI Ethics Advocate.',
                2000,
                'Quantum Computing Enthusiast.',
                2000,
                'DSA & Leetcode Enthusiast.',
                2000,
                'Interested in Gaming Development.',
                2000,
                'Aspring Full-Stack Development.', // Types 'Aspring Full-Stack Development'
                1000, // Waits 1s
                'UI/UX Enthusiast.', // Deletes 'Aspring Full-Stack Development' and types 'UI/UX Enthusiast'
                2000, // Waits 2s
                'ReactJs Specialist.', // Types 'UI/UX Enthusiast' and deletes it, then types 'ReactJs Specialist'
                2000,
                () => {
                    console.log('Sequence completed');
                },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block', color: '#416597' }}
        />
    )
}

export default TypingAnimation
