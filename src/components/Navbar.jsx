import { AppBar, Box, Grid, Typography, Button } from "@mui/material";

export function Navbar() {
  return (
    <Box >
      <AppBar  sx={{ bgcolor: " #FB7875"}} >
          <Grid container p={3} justifyContent="space-between" >
       
            
            <Grid  item >
              <a href="#name"style={{ color: "white", textDecoration: "none" }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  DÉBORA LEDO
                </Typography>
              </a>
            </Grid>

            <Grid item >
            <Grid container justifyContent="flex-end" >
              <a href="#aboutme"style={{ color: "white", textDecoration: "none" }}>
                <Button color="inherit">Acerca de mi</Button>
              </a>

              <a href="#study" style={{ color: "white", textDecoration: "none" }}>
                <Button color="inherit">Estudios</Button>
              </a>
              
              <a href="#projects"style={{ color: "white", textDecoration: "none" }}>
                <Button color="inherit">Proyectos</Button>
              </a>

              <a href="#contact" style={{ color: "white", textDecoration: "none" }} >
                <Button color="inherit">Contacto</Button>
              </a>
              </Grid>
            </Grid>
      
          </Grid>
      </AppBar>
    </Box>
  );
}
