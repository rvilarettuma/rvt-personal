import './App.css';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Container> 
        <Typography component="h1" variant="h1">Richard Vilaret-Tuma</Typography>
        <About />
        <Projects />
        <Footer/>
      </Container>
    </div>
  );
}

export default App;
