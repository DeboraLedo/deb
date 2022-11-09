import { Grid, Typography} from "@mui/material"
import study from "/home/debora/proyectos/deb/src/assets/study.png"

export function Study (){
    return(<>
        <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        p={5}
        sx={{ bgcolor: "#8BD0CA" }}
        id="study"
        m={4}
       >
        <Grid item sm={4} xs={8}><img src={study} alt="some file"  height='130%'
width='130%'/></Grid>
        <Grid item sm={5} xs={8}>
        <Typography variant="body1" align="left" gutterBottom={true} fontFamily="Helvetica Neue" >
• Plataforma 5 - Full Stack JS Developer -
Bootcamp intensivo de 800hs de codeo real
implementando pair programing y
metodologías ágiles.
<br/><br/>
• UADE - Diseñadora de Indumentaria y
Textil.
<br/><br/>
• United Nations Institute for Training and Research (UNITAR) - INTRODUCCIÓN AL CAMBIO CLIMÁTICO - Respuestas a preguntas básicas sobre el cambio climático, desde la ciencia hasta la gobernanza del cambio climático.
<br/><br/>
• United Nations Institute for Training and Research (UNITAR) - Nociones Básicas de REDD+ - Iniciativa coordinada para desarrollar capacidades tendentes a
reducir las emisiones derivadas de la deforestación y la degradación forestal, en los países
en desarrollo (REDD+).</Typography>
        </Grid>
</Grid>


     
     </>
    )
}