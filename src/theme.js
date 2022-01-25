import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#fdca30',
    },
    secondary: {
      main: '#14213d',
    },
    error: {
      main: '#d50000',
    },
    info: {
      main: '#6595a0',
    },
    warning: {
      main: '#e65100',
    },
  },
  typography: {
    fontFamily: 'Space Mono',
    h1: {
      fontFamily: 'Space Grotesk',
      fontWeight: 900,
      'background-color': '#fdca30',
      'text-align': 'center',
      margin: '0.5 rem',
    },
    h2: {
      fontFamily: 'Space Grotesk',
      fontWeight: 700
    },
    h3: {
      fontFamily: 'Space Grotesk',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Space Grotesk',
      fontWeight: 700,
      'background-color': '#fdca30',
      display: 'inline-block',
      padding: '0.5rem 0.5rem',
      'margin-bottom': '1rem'
    },
    h5: {
      fontFamily: 'Space Grotesk',
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Space Grotesk',
      fontWeight: 700,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;