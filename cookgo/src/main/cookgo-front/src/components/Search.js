import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../styles/DefaultTheme';
import TextField from '@mui/material/TextField';
import Search from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import MainHeader from './mainComponents/header';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

const theme = createTheme(defaultTheme);
export default function SearchPage() {
  return (
    <ThemeProvider theme={theme}>
      <MainHeader />
      <Paper
        component="form"
        sx={{ p: '10px 20px', display: 'flex', alignItems: 'center', width: 800 ,justifyContent:"center"}}
        style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform : "translate(-50%,-50%)",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, height:"25px"}}
          placeholder="레시피 검색"
          inputProps={{ 'aria-label': 'search google maps' }}
          fullWidth
          variant="standard"
          color="primary"
          focused
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
          <DirectionsIcon />
        </IconButton>
      </Paper>
    </ThemeProvider>
  );
}
