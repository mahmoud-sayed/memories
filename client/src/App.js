import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

// imported components
import NavBar from './components/NavBar/NavBar';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './Redux/postsReducer/postsActions';



const App = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getPosts(dispatch);
  }, [currentId, dispatch]);
  return (
    <Container maxWidth='lg'>
      <NavBar />
      <Grow in>
        <Container>
          <Grid container justifyContent='space-between' direction={ } alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>

          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;