import { Grid } from "@mui/material"
import CardMedia from "../commons/Card"


export function Projets (){
    return(<>
       <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        p={5}
        sx={{ bgcolor: "#050542" }}
        id="projects"
        m={4}
      >

     <CardMedia/>
     <CardMedia/>
     <CardMedia/>
     <CardMedia/>
      </Grid>
      
     
        
        
        
     

 
     
     </>
    )
}