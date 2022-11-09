import * as React from 'react';
import { Card , Button, Box, Typography} from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';


export default function CardMedia() {
  return (
    <Card variant="outlined" sx={{ width: 320 }} >
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        TMDEBO
      </Typography>
      <Typography level="body2">Duración: 1 semana</Typography>
     
        <YouTubeIcon />
 
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Duración: 1 semana</Typography>
          <Typography fontSize="lg" fontWeight="lg">
          Proyecto individual de una semana. Desarrollo de una página de películas consumiendo la API
de TMDB. Cuenta con login de usuario, gestión de favoritos y búsqueda de películas/series.
          </Typography>
        </div>
        <Button
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          GitHub
        </Button>
      </Box>
    </Card>
  );
}