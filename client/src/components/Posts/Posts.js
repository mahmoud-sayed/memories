import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@mui/material';

const Posts = () => {
  const posts = useSelector(state => state.postsReducer);
  console.log(posts);
  return (

    !posts.length ? <CircularProgress /> :
      <Grid container spacing={3} alignItems='stretch'>
        {posts.map(post => (
          <Grid item key={post._id} xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>

  );
};

export default Posts;