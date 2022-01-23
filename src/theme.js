import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#fca311',
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
    },
    h2: {
      fontFamily: 'Space Grotesk',
      fontWeight: 700,
    },
  },
});

export default theme;