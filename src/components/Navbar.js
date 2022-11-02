import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export function Navbar (){
    return(
        <Box sx={{ flexGrow: 1 , pb:5 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Debora Ledo
            </Typography>
            <Button color="inherit">Acerca de mi</Button>
            <Button color="inherit">Proyectos</Button>
            <Button color="inherit">Estudios</Button>
            <Button color="inherit">Contáctame</Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}