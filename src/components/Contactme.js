import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid , Button} from "@mui/material"
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';



export function Contactme() {
 
  const [name, setName] = useState("");
  const [message, setMessage] = useState("")
  const [email, setEmail] = useState("");


  const nameChange = (e) => {
    setName(e.target.value);
  };

  const messageChange = (e) => {
    setMessage(e.target.value);
  }; 

  const emailChange = (e) => {
    setEmail(e.target.value);
  }; 

  const handleSend = ()=>{
    //sendEmail(name,message,email)
}
console.log(name,message,email);


  return (

    <Grid
    container
    direction="row"
    justifyContent="space-evenly"
    alignItems="center"
     spacing={1}
     p={5}
     sx={{bgcolor:"#8BD0CA"}}
     id="contact"
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
          onChange={nameChange}
          multiline
        />
        <TextField
          id="outlined-textarea"
          label="e-mail"
          placeholder="e-mail"
          multiline
          onChange={emailChange}
          
        />
        <TextField
          id="outlined-multiline-static"
          label="Mensaje"
          multiline
          rows={4}
          placeholder="Escribe aqui tu mensaje"
          onChange={messageChange}
        />
        <Button variant="outlined" 
                type="submit"
                color="primary"
                fullWidth
                onClick={handleSend} endIcon={<SendIcon />}>
  Enviar
</Button>
      </div>
    </Box>


     </Grid>
    
</Grid>    
  );
}