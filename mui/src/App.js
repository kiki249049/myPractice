import React from 'react'
import { useState } from 'react';
import ThemeContext from './context/ThemeContext'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Avatar, Checkbox, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Link from '@mui/material/Link';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function App() {
  return (
    <div>
      <Container component="main" maxWidth="xs">
      <Box sx={{ 
        marginTop : 8,
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center'
      }}>

      <Avatar sx={{m : 1, bgcolor : 'secondary.main'}}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <TextField 
      label="Email Address" 
      fullWidth 
      required 
      name="email" 
      autoComplete='email' 
      autoFocus
      margin='normal'
      />
      <TextField 
      margin='normal'
      label="password" 
      fullWidth 
      required 
      name="password" 
      type="password" 
      autoComplete='current-password'
      />
      </Box>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        color="primary"
        label="Remember me"
      />
      <Button 
      type='submit'
      fullWidth
      variant='contained'
      sx={{mt : 3, mb: 2}}
      color='success'
      >Sign in</Button>
      <Grid container>
        <Grid item xs>
          <Link>Forgot password?</Link>
        </Grid>
        <Grid item>
          <Link>Don't have an account? Sign Up</Link>
        </Grid>
      </Grid>
      <Box sx={{ 
        marginTop : 8,
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        color : 'gray'
        }}>
          Copyright ©&nbsp; <Link href='#' color="inherit">Your Website</Link>&nbsp;2022.
      </Box>
      </Container>
    </div>
  );
}

export default App;
