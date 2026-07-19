import { useMemo } from "react";
import Particles from "@tsparticles/react";
import styles from "./BackgroundParticles.module.css";

// Accent colors pulled from the site's own palette, so the field always
// matches whichever theme (dark/light) is active instead of plain white dots.
const THEME_COLORS = {
    dark: ["#00d4aa", "#8b5cf6", "#2af5c5"],
    light: ["#00b894", "#00d4aa", "#8b5cf6"],
};

// NOTE: this component must render inside <ParticlesProvider> (see App.jsx).
// The provider loads the engine once at the app root — this component just
// asks for a particle instance, it doesn't manage engine loading itself.
const BackgroundParticles = ({ theme = "dark" }) => {
    const colors = THEME_COLORS[theme] ?? THEME_COLORS.dark;

    // Respect users who've asked their OS for reduced motion.
    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const options = useMemo(
        () => ({
            fullScreen: { enable: false },
            fpsLimit: 60,
            background: { color: { value: "transparent" } },
            particles: {
                number: {
                    value: 90,
                    density: { enable: true, area: 800 },
                },
                color: { value: colors },
                shape: { type: "circle" },
                opacity: {
                    value: { min: 0.2, max: 0.8 },
                    animation: {
                        enable: !prefersReducedMotion,
                        speed: 0.6,
                        sync: false,
                    },
                },
                size: { value: { min: 1, max: 3 } },
                links: {
                    enable: true,
                    color: colors[0],
                    distance: 140,
                    opacity: 0.15,
                    width: 1,
                },
                move: {
                    enable: !prefersReducedMotion,
                    speed: 0.8,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: { default: "out" },
                },
            },
            interactivity: {
                events: {
                    // onHover: { enable: true, mode: "grab" },
                    // onHover: { enable: true, mode: "repulse" },
                    onHover: { enable: true, mode: "bubble" },
                    onClick: { enable: true, mode: "push" },
                    resize: true,
                },
                modes: {
                    grab: { distance: 160, links: { opacity: 0.45 } },
                    push: { quantity: 3 },
                },
            },
            detectRetina: true,
        }),
        // colors is derived purely from theme, so theme alone is the real dependency
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [theme, prefersReducedMotion]
    );

    return (
        <Particles
            id="tsparticles"
            className={styles.particles}
            options={options}
        />
    );
};

export default BackgroundParticles;
