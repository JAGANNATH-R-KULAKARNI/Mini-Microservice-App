import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TitleUI from './titleUI';
import ContentUI from './contentUI';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  return (
    <Card sx={{minWidth : 300}} elevation='10'>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <h3>Create Post</h3>
        </Typography>
        <Typography variant="h5" component="div">
        <TitleUI textChangeHandler={props.textChangeHandler}/>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        </Typography>
        <Typography variant="body2">
          <ContentUI textChangeHandler={props.textChangeHandler}/>
          <br />
        </Typography>
      </CardContent>
      <CardActions  style={{paddingLeft : '70%'}}>
      <Button variant="contained" endIcon={<SendIcon />} onClick={props.postHandler}>
        Post
      </Button>
      </CardActions>
    </Card>
  );
}
