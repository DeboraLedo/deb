import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';



export function Navbar (){
    return(
        <Box sx={{ flexGrow: 1 , pb:5 }} >
        <AppBar position="fixed"sx={{bgcolor:" #FB7875"}}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <a href="#name" > <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}style={{ color: "white", textDecoration: "none" }}>
              Debora Ledo
            </Typography></a>
           
           <a href="#aboutme"style={{ color: "white", textDecoration: "none" }}> <Button color="inherit"   >Acerca de mi</Button></a>
          
           <a href="#study"style={{ color: "white", textDecoration: "none" }}><Button color="inherit">Estudios</Button></a>

           <a href="#projects"style={{ color: "white", textDecoration: "none" }}><Button color="inherit">Proyectos</Button></a>
           <a href="#contact"style={{ color: "white", textDecoration: "none" }}><Button color="inherit">Contáctame</Button></a> 
          </Toolbar>
        </AppBar>
      </Box>
    )
}