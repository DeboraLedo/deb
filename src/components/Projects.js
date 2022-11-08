import { Grid } from "@mui/material"


export function Projets (){
    return(<>
        <Grid
       container
       direction="row"
       justifyContent="space-evenly"
       alignItems="center"
        spacing={3}
        p={5}
        sx={{bgcolor:"#f5f7f9"}} 
        id="projects">

        <Grid item xs={8}> </Grid>

      </Grid>
     
     </>
    )
}