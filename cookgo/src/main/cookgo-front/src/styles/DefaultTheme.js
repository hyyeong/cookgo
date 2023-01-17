import { createTheme } from '@mui/system';

export const defaultTheme = {
  palette: {
    type: 'light',
    primary: {
      main: '#303f9f',
      light: '#666ad1',
      dark: '#001970',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#9fa8da',
      light: '#d1d9ff',
      dark: '#6f79a8',
      contrastText: '#ede7f6',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#f5ebeb',
      paper: '#ffffff',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },

  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
};