import React from 'react';
import { Card, CardActions, CardMedia, CardContent, Typography, Button } from '@mui/material';
import moment from 'moment';
// import { red } from '@mui/material/colors';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ThumbUp from '@mui/icons-material/ThumbUp';
import { deletePost } from '../../../Redux/postsReducer/postsActions';
import { useDispatch } from 'react-redux';




const Post = ({ post, setCurrentId }) => {

  const dispatch = useDispatch();

  const handelDelete = (id) => {
    deletePost(id, dispatch);
  };


  return (
    <Card sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      borderRadius: '15px',
      height: '100%',
      position: 'relative'
    }}>
      <CardMedia sx={{
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken',
      }}
        image={post.selectedFile}
        title={post.title}
        component='div'
      />
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
      }}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body1'>{moment(post.createAt).fromNow(true)}</Typography>
      </div>
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white'
      }}>
        <Button style={{ color: 'white' }} size='small' onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px'
      }}>
        <Typography variant='body2' color='textSecondary'>
          {post.tags ? post.tags.map(tag => `#${tag} `) : ''}
        </Typography>
      </div>
      <Typography variant='h5' gutterBottom pl={2} pr={2}>{post.title}</Typography>
      <CardContent>
        <Typography variant='h5' gutterBottom pl={2} pr={2}>{post.message}</Typography>
      </CardContent>
      <CardActions style={{
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Button size='small' color='primary' onClick={() => { }} >
          <ThumbUp fontSize='small ' />
          {post.likeCount} Like
        </Button>
        <Button size='small' color='error' onClick={() => handelDelete(post._id)}>
          <DeleteIcon fontSize='small ' />
          Delete {post.likeCount}
        </Button>
      </CardActions>
    </Card >
  );
};

export default Post;