import "./App.css";
import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import About from "./Components/About/About";
import LatestJob from "./Components/LatestJob/LatestJob";
import Resume from "./Components/Resume/Resume";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import TypewriterCustom from "./Components/Typewriter/Typewriter"
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
                    <TypewriterCustom/>
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