import { Box, Container, CssBaseline, Grid } from '@mui/material';
import { useState } from 'react';
import RecipeReviewCard from '../components/CardComp';
import './screen.css';

const HomeScreen = () => {
  const [items, setItems] = useState([
    { name: 'Rectilinear Motion' },
    { name: 'Projectile Motion' },
    { name: 'Friction' },
    { name: '2D Object Physics' },
  ]);

  return (
    <div>
      <CssBaseline />

      <Box style={{ maxHeight: '100vh', overflow: 'auto' }}>
        <Grid container spacing={0} alignItems="center" justifyContent="center">
          <RecipeReviewCard />

          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
        </Grid>
      </Box>
    </div>
  );
};

export default HomeScreen;
