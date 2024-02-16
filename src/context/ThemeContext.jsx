'use client';

import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const [mode, setMode] = useState('light');
    const toggleMode = () => {
        setMode((mode) => (mode === 'light' ? 'dark' : 'light'));
    };
    return (
        <ThemeContext.Provider value={{ mode, toggleMode }}>
            <div className={`theme ${mode}`}> {children}</div>
        </ThemeContext.Provider>
    );
}
