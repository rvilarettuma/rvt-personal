import "./App.css";
import { Container } from "@material-ui/core";
import Bio from "./Application/Bio";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <header className="App-header">
          <h1>Richard Vilaret-Tuma</h1>
          <h2>Adminstrator</h2>
        </header>
        <body>
          <Bio/>
          <h4>PROJECTS</h4>
        </body>
      </Container>
    </div>
  );
}

export default App;
