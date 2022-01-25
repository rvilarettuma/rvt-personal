import "./App.css";
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Typewriter from "./Components/Typewriter/Typewriter"
import Contact from "./Components/Contact/Contact";
import { useTheme, createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
let storage = window.localStorage;


function App() {
  let theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <div className="App">
      <Container>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "background.default",
            color: "text.primary",
            borderRadius: 1,
            p: 3,
          }}
        >
          {theme.palette.mode} mode
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Box>
        <Typography component="h1" variant="h1">
          Richard Vilaret-Tuma
        </Typography>
        <Typewriter />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </div>
  );
}

function getColorMode() {
  let colorMode = storage.getItem('colorMode');
  console.log(colorMode)
  if (!colorMode || colorMode === "light") {
    colorMode = "light";
  } else {
    colorMode = "dark"; 
  }

  return colorMode;
}

export default function ToggleColorMode() {
  let [mode, setMode] = React.useState(() => getColorMode());

  useEffect(() => {
    storage.setItem('colorMode', mode);
  });

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  let theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: '#558b2f',
          }
        },
        typography: {
          fontFamily: 'Space Mono',
          h1: {
            fontFamily: 'Space Grotesk',
            fontWeight: 900,
            textAlign: 'center',
            marginTop: '0.5 rem',
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
            display: 'inline-block',
            marginBottom: '1rem'
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
      }),
    [mode]
  );

  theme = responsiveFontSizes(theme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
