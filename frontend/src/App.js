import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import HomePage from './pages/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif'
    ].join(','),
  },
  palette: {
    primary: {
      main: '#333996',
    },
    secondary: {
      main: '#f83245',
    },
    background: {
      default: '#f4f5fd',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <HomePage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
