import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#14213d',
    },
    secondary: {
      main: '#fca311',
    },
    error: {
      main: '#7b3e46',
    },
    info: {
      main: '#6595a0',
    },
  },
  typography: {
    fontFamily: 'Space Mono',
    h1: {
      fontFamily: 'Space Grotesk',
      fontWeight: 900,
    },
    h2: {
      fontFamily: 'Space Grotesk',
      fontWeight: 700,
    },
  },
});

export default theme;