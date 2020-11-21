import "./App.css";
import { Container } from "@material-ui/core";
import Bio from "./Application/Bio";
import Projects from "./Application/Projects";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <header className="App-header">
          <h1>Richard Vilaret-Tuma</h1>
          <h2>SysAdmin, Developer, DevOps</h2>
        </header>
          <Bio/>
          <Projects/>
      </Container>
    </div>
  );
}

export default App;
