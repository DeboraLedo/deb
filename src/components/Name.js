import { Grid} from "@mui/material"
import url from "/home/debora/proyectos/deb/src/assets/Page 1.png"
import nombre from "/home/debora/proyectos/deb/src/assets/nombre.png"
export function Name (){
    return(<>
        <Grid
       container
       direction="row"
       justifyContent="space-evenly"
       alignItems="center"
        p={5}
        sx={{bgcolor:"#050542"}}
        id="name"
        m={4}
       >
        <Grid item sm={5} xs={8}><img src={nombre} alt="some file"  height='100%'
width='100%'/></Grid>
        <Grid item sm={5} xs={8}>
        <img src={url} alt="some file"  height='100%'
width='100%'/>
        </Grid>
</Grid>


     
     </>
    )
}