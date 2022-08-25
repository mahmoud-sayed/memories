import React, { useState } from 'react';
import { Paper, TextField, Typography, Button } from '@mui/material';
import FileBase from 'react-file-base64';

import { addPost } from '../../Redux/postsReducer/postsActions';
import { useDispatch } from 'react-redux';

const Form = () => {
  const [postData, setPostData] = useState({
    creator: '', title: '', message: '', tags: '', selectedFile: ''
  });

  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    addPost(postData, dispatch);
    setPostData({
      creator: '', title: '', message: '', tags: '', selectedFile: ''
    });
  };

  const clear = () => {
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <form
        autoComplete='off'
        noValidate
        onSubmit={handelSubmit}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1rem'
        }}
      >
        <Typography variant='h6'>Create A Memory</Typography>
        <TextField
          name='creator'
          variant='outlined'
          label='creator'
          fullWidth
          value={postData.creator}
          onChange={e => setPostData({ ...postData, creator: e.target.value })}
        />
        <TextField
          name='title'
          variant='outlined'
          label='title'
          fullWidth
          value={postData.title}
          onChange={e => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name='message'
          variant='outlined'
          label='message'
          fullWidth
          value={postData.message}
          onChange={e => setPostData({ ...postData, message: e.target.value })}
        />
        <TextField
          name='tags'
          variant='outlined'
          label='tags'
          fullWidth
          value={postData.tags}
          onChange={e => setPostData({ ...postData, tags: e.target.value })}
        />

        <div style={{ width: '97%', margin: '10px 0' }}>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>

        <Button type='submit' variant='contained' color='primary' size='large' mb={10} fullWidth>
          Submit
        </Button>

        <Button type='clear' variant='contained' color='secondary' size='small' onClick={clear} fullWidth>
          Clear
        </Button>
      </form >
    </Paper >
  );
};

export default Form;