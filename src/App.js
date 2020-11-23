import "./App.css";
import { Container, Typography } from "@material-ui/core";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Bio from "./Application/Bio";
import Projects from "./Application/Projects";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FAF6F3',
      contrastText: '#0D0D0D'
    },
    secondary: {
      main: '#516652',
    }
  },
  typography: {
    h1: {
      whiteSpace: 'pre-line',
      fontFamily: "futura-bold",
      textTransform: 'uppercase',
      letterSpacing: '0.5rem',
      fontSize: '3.125em',
      color: '#0D0D0D',
    },
    h2: {
      fontFamily: "futura-medium",
      textTransform: 'lowercase',
      letterSpacing: '0.2rem',
      fontSize: '2.375em',
      color: '#0D0D0D',
    },
    h3: {
      fontFamily: "futura-bold",
      letterSpacing: '0.5',
      fontSize: '1.75em',
      color: '#0D0D0D',
    },
    h4: {
      fontFamily: "futura-bold",
      letterSpacing: '0.5',
      fontSize: '1.3125em',
      color: '#0D0D0D'
    },
    body1: {
      fontFamily: "futura-book",
      fontSize: '1.125em',
      lineHeight: '1.6875rem',
      color: '#0D0D0D'
    },
    subtitle1: {
      fontFamily: "futura-book",
      fontSize: '1.125em',
      lineHeight: '1.6875rem',
      color: '#0D0D0D'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Container maxWidth="lg">
        <header className="App-header">
          <Typography variant="h1">Richard Vilaret-Tuma</Typography>
          <Typography variant="h2">SysAdmin, Developer, DevOps</Typography>
        </header>
        <Bio />
        <Projects />
      </Container>
    </div>
    </ThemeProvider>
  );
}

export default App;
