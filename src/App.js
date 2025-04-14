import "./App.css";
import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import About from "./Components/About/About";
import LatestJob from "./Components/LatestJob/LatestJob";
import Resume from "./Components/Resume/Resume";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import Typewriter from "./Components/Typewriter/Typewriter"
import Contact from "./Components/Contact/Contact";
import ThemeButton from "./Components/ThemeButton/ThemeButton";
import { ThemeContextProvider } from "./Contexts/themeContext";

let storage = window.localStorage;

function App() {
    return (
        <ThemeContextProvider>
            <div className="App">
                <Container>
                    <ThemeButton />
                    <Typography component="h1" variant="h1">
                        Richard Vilaret-Tuma
                    </Typography>
                    <Typewriter />
                    <About />
                    {/* <LatestJob /> */}
                    <Resume />
                    <Projects />
                    <Contact />
                    <Footer />
                </Container>
            </div>
        </ThemeContextProvider>
    );
}

export default App;

// function getColorMode() {
//   let colorMode = storage.getItem('colorMode');
//   if (!colorMode || colorMode === "light") {
//     colorMode = "light";
//   } else {
//     colorMode = "dark";
//   }
//   console.log(colorMode)
//   return colorMode;
// }

// export default function ToggleColorMode() {
//   let [mode, setMode] = React.useState(() => getColorMode());

//   useEffect(() => {
//     storage.setItem('colorMode', mode);
//   });

//   const colorMode = React.useMemo(
//     () => ({
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
//       },
//     }),
//     []
//   );

// return (
//   <ColorModeContext.Provider value={colorMode}>
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <App />
//     </ThemeProvider>
//   </ColorModeContext.Provider>
// );
