import * as React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SupportIcons } from './SupportIcons';
import MyDivider from '../ui/Divider';


function ProjectCard(props) {

  const theme = useTheme();
  const url=("/project/" + props.id);

  return (
    <Card sx={{ width: 300, height: 400, border: 1.4, borderColor: theme.palette.krumbleGray.light, borderRadius: 2, boxShadow: "none" }}>
      <CardActionArea>
      
        <CardHeader
          avatar={<Avatar sx={{ width:90, height:90, border: 1, color: theme.palette.krumbleGray.light, alignItems : "left", justifyContent: "left" }} alt="" src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg" variant="rounded" />}
          title={<div>
            <Typography gutterBottom variant="body1">{props.date}</Typography>
            <div>
              <Typography gutterBottom variant="cardTitle">{props.title} par</Typography>
              <Typography gutterBottom variant="cardTitle"> {props.association}</Typography>
            </div>
            <Typography variant="cardSubTitle">{props.university}</Typography> 
          </div>}
        />

        <CardContent>
          <Typography gutterBottom variant="body1">{props.description}</Typography>     
          <MyDivider />         
          <SupportIcons support={props.support} />
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;
