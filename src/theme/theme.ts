import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#D4A5A5', // Soft rose
      light: '#E8C4C4',
      dark: '#B08A8A'
    },
    secondary: {
      main: '#E6B89C', // Warm peach
      light: '#F2D2B8',
      dark: '#D19A7A'
    },
    background: {
      default: '#FBF8F6', // Warm cream
      paper: '#FFFFFF'
    },
    text: {
      primary: '#4A4A4A', // Soft charcoal
      secondary: '#6B6B6B'
    }
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none'
        }
      }
    }
  }
});

const darkTheme = createTheme({
  ...lightTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#E8C4C4',
      light: '#F2D2D2',
      dark: '#D4A5A5'
    },
    secondary: {
      main: '#F2D2B8',
      light: '#F7E4D0',
      dark: '#E6B89C'
    },
    background: {
      default: '#2A2A2A',
      paper: '#3A3A3A'
    }
  }
});

export { lightTheme, darkTheme };