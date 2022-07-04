import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href="https://localhost:3000/:props.id">
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default MediaCard;
