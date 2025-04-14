  import React, { createContext, useState, useContext } from 'react';
  import { ThemeProvider } from '@mui/material/styles';
  import CssBaseline from '@mui/material/CssBaseline';
  import themeConfig from '../Theme/theme';
  
  const ThemeContext = createContext();
  
  export const useTheme = () => useContext(ThemeContext);
  
  export const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState('light');
    const toggleMode = () => {
      setMode(prevMode => prevMode === 'light' ? 'dark' : 'light');
    };
  
    const theme = themeConfig[mode];
  
    return (
      <ThemeContext.Provider value={{ mode, toggleMode }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  };