import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import TextareaAutosize from '@mui/base/TextareaAutosize';
import StyledTextarea from '@mui/base/TextareaAutosize';


import Head from "next/head";
export default function BasicTextFields() {
  return (
  
    <div className="font-bold text-center mt-4">
    <Box
      // component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}

      // sx={{
      //   width: 500,
      //   maxWidth: '100%',
      //   m:3
      // }}

      // noValidate
      // autoComplete="off"
    >
      <Head>
        <title>
          Contact Us
        </title>
      </Head>
      
      <TextField fullWidth id="name" label="Name" />

      <br/>
      <TextField fullWidth 
        // hiddenLabel
        id="subject"
        //defaultValue="Small"
        // variant="filled"
        label="Subject"
        // size="Medium"
      /> <br/>

      <StyledTextarea 
        aria-label="minimum height"
        minRows={5}
        maxRows={10}
        placeholder="Add here your description with minimum 5 rows" 
        // hiddenLabel
        id="description"
        //defaultValue="Small"
        // variant="filled"
        // label="Description"
        // size="Medium"
      /> <br/>

      <TextField fullWidth
        // hiddenLabel
        id="email"
        // defaultValue="Normal"
        // variant="filled"
        label = "E-mail"
        size="Medium"
      /><br/>

      <Button fullWidth
        variant="contained" 
        // endIcon={<SendIcon />}
        href="/" 
        // target="_blank" 
        type="submit">
          Send
      </Button><br/>

    </Box>
    </div>
  );
}
 