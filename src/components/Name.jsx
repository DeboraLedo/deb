import { Grid, Button } from "@mui/material";
import url from "/home/debora/proyectos/deb/src/assets/nombre2.png";
import nombre from "/home/debora/proyectos/deb/src/assets/nombre.png";

export function Name() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        p={5}
        sx={{ bgcolor: "#050542" }}
        id="name"
        m={4}
      >
        <Grid item sm={5} xs={8}>
          <img src={nombre} alt="some file" height="100%" width="100%" />
          <a href="/DeboraLedoCV.pdf" download style={{ textDecoration: "none" }}>
            <Button id="aboutme" variant="outlined" style={{ color: " #FB7875" }}>
              Descargar cv
            </Button>
          </a>
        </Grid>
        <Grid item sm={5} xs={8}>
          <img src={url} alt="some file" height="100%" width="100%" />
        </Grid>
      </Grid>
    </>
  );
}
