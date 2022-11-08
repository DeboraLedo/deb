import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid} from "@mui/material"


export function Contactme() {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (

    <Grid
    container
    direction="row"
    justifyContent="space-evenly"
    alignItems="center"
     spacing={1}
     p={5}
     sx={{bgcolor:"#8BD0CA"}}
     id="study"
     m={4}
    >
     <Grid item xs={8}>
     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Nombre"
          maxRows={4}
          value={value}
          onChange={handleChange}
          multiline
        />
        <TextField
          id="outlined-textarea"
          label="e-mail"
          placeholder="e-mail"
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Mensaje"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
      </div>
    </Box>


     </Grid>
    
</Grid>




    
  );
}