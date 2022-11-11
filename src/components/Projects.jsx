
import { Card , Button, Box, Typography, Grid, Link} from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import data from "../data/projets"
import GitHubIcon from '@mui/icons-material/GitHub';


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
{data?.map((data)=>{return(
     <Card variant="outlined" sx={{ width: 320, height: 450 ,p:2, m:2}} >
     <Typography level="h2" fontSize="md" sx={{ mb: 0.5 ,fontWeight: 600 }}>
       {data.title}
     </Typography>

     <Typography level="body2" height={43} fontFamily="Helvetica Neue">{data.stack}</Typography>

     <Link href={data.linkVideo} underline="none" target="_blank" rel="noreferrer">
     <Button
     style={{textDecoration: "none", color: "#FB7875"}}
         variant="solid"
         sx={{ ml: 'auto', fontWeight: 600}}><Typography textDecoration="none">Demo</Typography>          
       <YouTubeIcon />
       </Button>
       </Link>
       <img
         src={data.image}
         alt=""
         height= "180px" 
       />
     <Box sx={{ display: 'flex' }}>
       <div>
         <Typography sx={{fontWeight: 600 }}>Duración: {data.time}</Typography>
         <Typography height={200} fontFamily="Helvetica Neue">{data.description} </Typography>
       </div>
       <Link href={data.linkGitHub} underline="none" target="_blank" rel="noreferrer" >
       <Button
         variant="solid"
         sx={{ ml: 'auto', fontWeight: 600,color: "#FB7875", height:170, width:30, flexDirection:"column"}} >
         GitHub 
         <GitHubIcon/>
       </Button>
       </Link>

     </Box>
   </Card>)})

}
    
      </Grid>
      
     
        
        
        
     

 
     
     </>
    )
}