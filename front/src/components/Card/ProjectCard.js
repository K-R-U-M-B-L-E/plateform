import * as React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CardActionArea, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { SupportIcons } from './SupportIcons';
import MyDivider from '../ui/Divider';


function ProjectCard(props) {

  const theme = useTheme();
  const url=("/project/" + props.id);

  return (
    <Card sx={{ width: 270, height: 369, border: 1.4, borderColor: theme.palette.krumbleGray.light, borderRadius: 2, boxShadow: "none" }}>
      <CardActionArea>
      
        <CardHeader sx={{paddingBottom: 0}}
          avatar={<Avatar sx={{ width:81, height:81, border: 1, color: theme.palette.krumbleGray.light, alignItems : "left", justifyContent: "left" }} alt="" src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg" variant="rounded" />}
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

          <Box sx={{paddingTop: "auto", paddingBottom: 20}}>  
            <MyDivider />         
            <SupportIcons support={props.support} />
          </Box>

        </CardContent>

      </CardActionArea>
    </Card>
  );
}

export default ProjectCard;
