import "./App.css";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Typewriter from "typewriter-effect";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Container>
        <Typography component="h1" variant="h1">
          Richard Vilaret-Tuma
        </Typography>
        <div className="typewriter">
          <Typography component="h2" variant="h3">
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "SysAdmin",
                  "Web Developer",
                  "DevOps Engineer"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
        </div>
        <About />
        <Projects />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
