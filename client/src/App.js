import React from 'react';
import { Container, Typography, Grow, Grid } from '@material-ui/core';

// imported components
import NavBar from './components/NavBar/NavBar';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
const App = () => {
  return (
    <Container maxWidth='lg'>
      <NavBar />
      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>

          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;