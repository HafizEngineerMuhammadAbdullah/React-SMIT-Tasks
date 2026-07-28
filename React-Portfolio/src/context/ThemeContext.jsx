import { createContext, useContext, useState, useEffect } from 'react';

// ============================================================
// STEP 1: CREATE
// ============================================================
// createContext() makes an empty "channel." Nothing is flowing through it
// yet — it's just the pipe. `undefined` here is a deliberate default: it lets
// useTheme() below detect "you forgot to wrap this in a Provider" instead of
// silently handing back garbage.
const ThemeContext = createContext(undefined);

// ============================================================
// STEP 2: PROVIDE
// ============================================================
// This component OWNS the theme state. Anything rendered as its `children`
// can reach into the context and read/change that state — no matter how
// deeply nested it is, and with zero props passed down manually.
export const ThemeProvider = ({ children }) => {
    // Lazy initializer: this function only runs ONCE, on first render, to
    // check localStorage for a saved preference. Falls back to "dark".
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('portfolio-theme') || 'dark';
    });

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    // Runs every time `theme` changes:
    //  1. persist the choice, so a page refresh remembers it
    //  2. put data-theme on the <html> tag itself, which is what your
    //     index.css [data-theme="..."] selectors are actually watching for
    useEffect(() => {
        localStorage.setItem('portfolio-theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    // This object is the whole "package" every consumer receives when it
    // calls useTheme(). Add anything else theme-related here later.
    const value = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

// ============================================================
// STEP 3: USE
// ============================================================
// A tiny custom hook wrapping useContext(ThemeContext). Components import
// THIS instead of importing useContext + ThemeContext separately every time.
// The thrown error is the payoff: if you ever forget to wrap something in
// <ThemeProvider>, you get a clear message immediately instead of a
// mysterious "cannot read theme of undefined" bug three files later.
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
