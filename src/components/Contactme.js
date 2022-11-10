import * as React from 'react';
import { Grid } from "@mui/material"
import github from "../assets/githubazul.png"
import linkedin from "../assets/linkedinazul.png"
import mail from "../assets/mailazul.png"
import Typography from '@mui/material/Typography';


export function Contactme() {
  return (

    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
     spacing={1}
     p={3}
     pl={35}
     sx={{bgcolor:"#8BD0CA"}}
     id="contact"
     m={4}
     >
      
     <Grid item sm={3} xs={8} >
      <a href="https://github.com/DeboraLedo" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }} >
     <img src={github} alt="github" height="12%" width="12%" />
     <Typography sx={{ color: "#050542" }}>/DeboraLedo</Typography>
     </a>
     </Grid>

     <Grid container item sm={3} xs={8}  >
      <a href="https://www.linkedin.com/in/debora-ledo/" target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
     <Grid item><img src={linkedin} alt="linkedin" height="12%" width="12%" /></Grid>
     <Grid item><Typography sx={{ color: "#050542" }}>/in/debora-ledo</Typography></Grid>
     </a>
     </Grid>

     <Grid container item sm={3} xs={8}   >
      <a href="mailto:ledo.debora@gmail.com" style={{ textDecoration: "none" }}>
     <Grid item><img src={mail} alt="mail" height="12%" width="12%" /></Grid>
     <Grid item><Typography sx={{ color: "#050542" }}>ledo.debora@gmail.com</Typography></Grid>
     </a>
     </Grid>

</Grid>    
  );
}