import React from "react";
import Typography from "@material-ui/core/Typography";

function Bio(props) {
  return (
    <div>
      <div className="subheader">
        <Typography variant="h3">Biography</Typography>
        <hr />
      </div>
      <div className="bio">
        <Typography variant="body1" paragraph>
          The origin of my relationship with computers:
          <em>The Computer Room</em>. A vestige of the early 2000's; The
          dedicated room for a beige Compaq and it's shrieking counterpart: the
          modem. The nightly ritual of tolerating dial-up screeching and
          launching up RuneScape was enough to enthrall me. It was also enough
          for my immigrant parents to brand me as the resident computer expert,
          a role I accepted with great reverance.
        </Typography>
        <Typography variant="body1" paragraph>
          I was fortunate enough to come across a group of friends who also
          shared my enjoyment of computer games. Through them, and with some
          help from my grandfather, I hand selected components and built my
          first gaming PC. This was quite the endeavor, but the experience
          granted me invaluable hardware knowledge and troubleshooting skills.
          </Typography>
        <Typography variant="body1" paragraph>
          By high school, I had managed to establish quite the technological
          foundation for myself. I joined the school's PC Support group, where I
          actively served as a technician for the school's 4000 students and
          accompanying faculty. I partook in an exclusive software engineering
          mentorship program with the Miami-Dade County IT Department. I earned
          several Microsoft and Adobe certifications. I even managed to win
          Miami-Dade County Public Schools Hour of Code competion, where my
          entry was selected (in the winning Top 20) from a pool of 530
          contenders.
          </Typography>
        <Typography variant="body1" paragraph>
          Presently, I am employed at Colorado State University as a Student IT
          Administrator. Since I have completed my Bachelor of Science in
          Applied Computing Technology, I am currently looking for work across a
          variety of fields. System Administration, DevOps, and Web/Software
          Development are all fields I've dabbled in, and would love to purse in
          the future.
          </Typography>
      </div>
    </div>
  );
}

export default Bio;
