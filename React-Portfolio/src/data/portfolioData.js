// Place it src/data/portfolioData.js
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { LuMail } from "react-icons/lu";
import { FaUpwork } from "react-icons/fa6";
import {
    FaReact, FaNodeJs, FaPython, FaDocker,
    FaAws, FaGitAlt, FaFigma, FaHtml5
} from 'react-icons/fa';
import { FaJava, FaGithub, FaCss3Alt, FaBootstrap } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { TbBrandJavascript, TbBrandFramerMotion, TbBrandSupabase, TbBrandNextjs, TbBrandThreejs } from "react-icons/tb";
import { SiCplusplus, SiC, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiFirebase, SiGsap, SiRedux, SiClaude, SiGooglegemini } from 'react-icons/si';


// Skills Array of Objects with Icons, Names, and Colors
export const skills = [
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
    { icon: SiRedux, name: 'Redux', color: '#764abc' },
    { icon: SiFirebase, name: 'Firebase', color: '  #F57C00' },
    { icon: TbBrandSupabase, name: 'Supabase', color: '  #3FCF8E' },
    { icon: FaHtml5, name: 'HTML5', color: '#e34f26' },
    { icon: FaCss3Alt, name: 'CSS3', color: '#264de4' },
    { icon: TbBrandJavascript, name: 'Javascript', color: '#f7df1e' },
    { icon: FaJava, name: 'Java', color: '#5382a1' },
    { icon: SiCplusplus, name: 'C++', color: '#00589C' },
    { icon: SiC, name: 'C', color: '#A8B9CC' },
    { icon: VscVscode, name: 'VS Code', color: '#0078d4' },
    { icon: SiClaude, name: 'Claude', color: '#F57C00' },
    { icon: SiGooglegemini, name: 'Google Gemini', color: '#4285F4' },
];




// Social Media Links Array of Objects with Icons, Names, and URLs
export const socialLinks = [
    {
        linkName: FaGithub,
        link: "https://github.com/HafizEngineerMuhammadAbdullah",
        color: "#6e5494"
    },
    {
        linkName: FaLinkedin,
        link: "https://www.linkedin.com/in/muhammad-abdullah-360a87384",
        color: "#0077b5"
    },
    {
        linkName: FaTwitter,
        link: "#",
        color: "#1da1f2"
    },
    {
        linkName: FaUpwork,
        link: "https://www.upwork.com/freelancers/~01e3f5c7b0d8f1a2b4",
        color: "#6fda44",
    },
    {
        linkName: LuMail,
        link: "mailto:muhammadabdullah123@gmail.com",
        color: "#416597"
    }
];