import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const theme = {
    isDark,
    toggleTheme,
    colors: {
      background: isDark ? '#111827' : '#ffffff',
      text: isDark ? '#f9fafb' : '#111827',
      card: isDark ? '#1f2937' : '#f9fafb',
      border: isDark ? '#374151' : '#e5e7eb',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }
  return context;
};

export default ThemeContext;