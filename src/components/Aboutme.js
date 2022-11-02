import { Grid, Typography } from "@mui/material"


export function Aboutme (){
    return(<>
        <Grid
       container
       direction="row"
       justifyContent="space-evenly"
       alignItems="center"
        spacing={3}
        p={5}
        sx={{bgcolor:"#f5f7f9"}} >

        <Grid item xs={8}>
        <Typography variant="body1" align="center" gutterBottom="true" >Mi nombre es Debora Ledo y soy Full-Stack developer, madre y emprendedora, entre otras cosas, pero estas ultimas profesiones son las que ocupan la mayor parte de mi día. 
Soy graduada del bootcamp de Plataforma 5, un curso super intensivo de 10 hs diarias en donde incorporé los conceptos fundamentales de programacion volcándolos en la práctica, más de 800 hs de codeo con modalidad pair programing y grupal con el método Scrum en donde aprendí tecnologías como React, Node, Express, Mongo, Pstgress y otras.</Typography></Grid>

<Grid item xs={8}><Typography variant="body1" align="center" gutterBottom="true">Mis trabajos anteriores como diseñadora de indumentaria me dieron la capacidad de relacionar, mediar y liderar a personas. 
Realicé varios emprendimientos en el rubro textil que disfruté muchísimo, los desafíos diarios, las planificaciones, sortear obstaculos, el trabajo conjunto con proveedores y, sobre todo, la relación con los clientes.</Typography></Grid>

<Grid item xs={8}><Typography variant="body1" align="center" gutterBottom="true"><b>Decidí cambiar mi rumbo profesional porque busco nuevos desafíos que me saquen de mi zona de confort y en la programación lo encontré ya que los desafíos cambian día a día. Quiero proyectos donde pueda dar lo mejor de mi y por supuesto seguir aprendiendo y creciendo.
Estoy convencida de que, no solo la tecnología e innovación son el futuro, sino estas aplicadas a la sustentabilidad: sin planeta no hay futuro.</b></Typography></Grid>
      </Grid>
     
     </>
    )
}