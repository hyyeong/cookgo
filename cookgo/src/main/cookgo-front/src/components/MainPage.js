import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { defaultTheme } from '../styles/DefaultTheme';
import MainHeader from './mainComponents/header';
import Footer from './mainComponents/footer';
import MainImageViewer from './mainComponents/mainImageView';
import SampleRecipe from './mainComponents/SampleRecipe';

const theme = createTheme(
  defaultTheme
);
export default function MainPage() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main"
        direction="column" justifyContent="flex-start" alignItems="stretch">
        <MainHeader/>
        <CssBaseline />
        <Grid
          item
          xs
          md={5} // 차지
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid 
          item
          xs
          md = {5}>
          <MainImageViewer>

          </MainImageViewer>
        </Grid>
        <Grid 
        style={{background:'#f2f6fc'}}
          item
          xs
          md = {5}>
            <SampleRecipe/>          
        </Grid>
        <Grid 
          item
          xs
          md = {4}>
          <Footer>

          </Footer>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}