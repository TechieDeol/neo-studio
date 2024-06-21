// src/HomePage.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

function HomePage() {
  return (
    <Container maxWidth="sm">
      <Box textAlign="center" py={10}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Neo Studio
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Your one-stop solution for innovative design and creativity.
        </Typography>
        <Box mt={4}>
          <Button variant="contained" color="primary" size="large" sx={{ mx: 2 }}>
            Get Started
          </Button>
          <Button variant="outlined" color="primary" size="large" sx={{ mx: 2 }}>
            Learn More
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;
