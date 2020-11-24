import "./App.css";
import { Container, Typography } from "@material-ui/core";
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Bio from "./Application/Bio";
import Projects from "./Application/Projects";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FAF6F3',
    },
    secondary: {
      main: '#516652',
    },
    background: {
      paper: '#FAF6F3',
    },
    text: {
      primary: 'rgba(13,13,13,0.87)',
      secondary: 'rgba(13,13,13,0.54)',
      disabled: 'rgba(13,13,13,0.38)',
      hint: 'rgba(13,13,13,0.38)',
    }
  },
  typography: {
    h1: {
      whiteSpace: 'pre-line',
      fontFamily: "futura-bold",
      textTransform: 'uppercase',
      letterSpacing: '0.5rem',
      fontSize: '3.125em',
      color: 'rgba(13,13,13)',
    },
    h2: {
      fontFamily: "futura-medium",
      textTransform: 'lowercase',
      letterSpacing: '0.2rem',
      fontSize: '2.375em',
      color: 'rgba(13,13,13)',
    },
    h3: {
      fontFamily: "futura-bold",
      letterSpacing: '0.5',
      fontSize: '1.75em',
      color: 'rgba(13,13,13)',
    },
    h4: {
      fontFamily: "futura-bold",
      letterSpacing: '0.5',
      fontSize: '1.3125em',
      color: 'rgba(13,13,13)',
    },
    body1: {
      fontFamily: "futura-book",
      fontSize: '1.125em',
      lineHeight: '1.6875rem',
      color: 'rgba(13,13,13)',
    },
    subtitle1: {
      fontFamily: "futura-book",
      fontSize: '1.125em',
      lineHeight: '1.6875rem',
      color: 'rgba(13,13,13)',
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Container maxWidth="lg">
        <header className="App-header">
          <Typography component="h1" variant="h1">Richard Vilaret-Tuma</Typography>
          <Typography component="h2" variant="h2">SysAdmin, Developer, DevOps</Typography>
        </header>
        <Bio />
        <Projects />
      </Container>
    </div>
    </ThemeProvider>
  );
}

export default App;
