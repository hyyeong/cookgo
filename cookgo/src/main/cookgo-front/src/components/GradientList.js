import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../styles/DefaultTheme';
import MainHeader from './mainComponents/header';
import Paper from '@mui/material/Paper';
import GradientDial from './subComponents/GradientCRUDDial';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const theme = createTheme(defaultTheme);
export default function GradientList() {
  return (
    <ThemeProvider theme={theme}>
      <MainHeader />
      <GradientDial/>
    </ThemeProvider>
  );
}