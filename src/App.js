import './App.css';
import About from './Components/About/About';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <Container> 
        <Typography variant="h1" component="h1">Richard Vilaret-Tuma</Typography>
        <About />
      </Container>
    </div>
  );
}

export default App;
