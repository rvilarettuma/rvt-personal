import "./App.css";
import { Container } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <header className="App-header">
          <h1>Richard Vilaret-Tuma</h1>
          <h2>Adminstrator</h2>
        </header>

        <body>
          <div className="subheader">
            <h4>Biography</h4>
            <hr />
          </div>
          <div className="bio">
            <p>
              The origin of my relationship with computers: 
              <em>The Computer Room</em>. A vestige of the early 2000's; The
              dedicated room for a beige Compaq and it's shrieking counterpart:
              the modem. The nightly ritual of tolerating dial-up screeching and
              launching up RuneScape was enough to enthrall me. It was also
              enough for my immigrant parents to brand me as the resident
              computer expert, a role I accepted with great reverance.
            </p>
            <p>
              I was fortunate enough to come across a group of friends who also
              shared my enjoyment of computer games. Through them, and with some
              help from my grandfather, I hand selected components and built my
              first gaming PC. This was quite the endeavor, but the experience
              granted me invaluable hardware knowledge and troubleshooting
              skills.
            </p>
            <p>
              By high school, I had managed to establish quite the technological
              foundation for myself. I joined the school's PC Support group,
              where I actively served as a technician for the school's 4000
              students and accompanying faculty. I partook in an exclusive
              software engineering mentorship program with the Miami-Dade County
              IT Department. I earned several Microsoft and Adobe
              certifications. I even managed to win Miami-Dade County Public
              Schools Hour of Code competion, where my entry was selected (in
              the winning Top 20) from a pool of 530 contenders.
            </p>
            <p>
              Presently, I am employed at Colorado State University as a Student
              IT Administrator. Since I have completed my Bachelor of Science in
              Applied Computing Technology, I am currently looking for work
              across a variety of fields. System Administration, DevOps, and
              Web/Software Development are all fields I've dabbled in, and would
              love to purse in the future.
            </p>
          </div>

          <h4>PROJECTS</h4>
        </body>
      </Container>
    </div>
  );
}

export default App;
