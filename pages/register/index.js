import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

import Head from "next/head";
export default function BasicTextFields() {
  return (
  
    <div className="font-bold text-center mt-4">
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <Head>
        <title>
          Sign Up
        </title>
      </Head>

      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      
      <TextField id="firstname" label="First Name" size="Medium"/>
      
      {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}

      <br/>
      <TextField
        // hiddenLabel
        id="lastname"
        //defaultValue="Small"
        // variant="filled"
        label="Last Name"
        size="Medium"
      /> <br/>
      <TextField
        // hiddenLabel
        id="email"
        // defaultValue="Normal"
        // variant="filled"
        label = "E-mail"
        size="Medium"
      /><br/>
      <TextField
        // hiddenLabel
        id="password"
        // defaultValue="Normal"
        // variant="filled"
        label = "Password"
        size="Medium"
        type='password'
      /> <br/>
      {/* <Button variant="text">Text</Button> */}
      {/* <Button variant="contained">Contained</Button> */}
      {/* <Button variant="outlined">Outlined</Button> */}

      <Button 
        variant="contained" 
        endIcon={<SendIcon />}
        href="/" 
        // target="_blank" 
        type="submit">
          Submit
      </Button><br/>
      <Button 
        variant="contained" 
        endIcon={<DeleteIcon />}
        // target="_blank" 
        type="reset">
          Delete
      </Button> 
    </Box>
    </div>
  );
}
 