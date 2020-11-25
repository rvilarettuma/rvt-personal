import "./App.css";
import { Container, Typography } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Bio from "./Application/Bio";
import Projects from "./Application/Projects";
import ContactForm from "./Application/ContactForm";



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FAF6F3',
      contrastText: 'rgba(13,13,13,0.87)'
    },
    secondary: {
      main: '#516652',
    },
    background: {
      main: '#FAF6F3',
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
      '@media screen and (max-width: 820px)': {
        fontSize: '2.375em',
      }
    },
    h2: {
      fontFamily: "futura-medium",
      textTransform: 'lowercase',
      letterSpacing: '0.2rem',
      fontSize: '2.375em',
      color: 'rgba(13,13,13)',
      '@media screen and (max-width: 820px)': {
        fontSize: '1.75em',
      }
    },
    h3: {
      fontFamily: "futura-bold",
      letterSpacing: '0.5',
      fontSize: '1.75em',
      color: 'rgba(13,13,13)',
      '@media screen and (max-width: 820px)': {
        fontSize: '1.3125em',
      }
    },
    h4: {
      fontFamily: "futura-bold",
      letterSpacing: '0.5',
      fontSize: '1.3125em',
      color: 'rgba(13,13,13)',
      '@media screen and (max-width: 820px)': {
        fontSize: '1em',
      }
    },
    body1: {
      fontFamily: "futura-book",
      fontSize: '1.125em',
      lineHeight: '1.6875rem',
      color: 'rgba(13,13,13)',
      '@media screen and (max-width: 820px)': {
        fontSize: '1em',
      }
    },
    subtitle1: {
      fontFamily: "futura-book",
      fontSize: '1.125em',
      lineHeight: '1.6875rem',
      color: 'rgba(13,13,13,0.84)',
      '@media screen and (max-width: 820px)': {
        fontSize: '1em',
      }
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
        <ContactForm />
      </Container>
    </div>
    </ThemeProvider>
  );
}

export default App;
