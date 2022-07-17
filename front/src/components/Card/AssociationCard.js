import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

function AssociationCard(props) {
  //let navigate = useNavigate();

  const url=("/association/" + props.id);
  const theme = useTheme();

  const HandleClick = () => {
    console.log("handle click");
    //navigate(url, { replace: true });
  }

  return (
    <Card onClick={HandleClick} sx={{width: 300, height: 360, border: 0, borderColor: theme.palette.white, background: theme.palette.white.main}}>
      <CardActionArea>
        <CardMedia sx={{width: 300, height: 280, //background: theme.palette.krumbleGray.dark, 
        border: 1,
        borderColor: theme.palette.krumbleGray.light,
        borderRadius: 5}}
          component="img"
          height="140"
          image={props.image}
          alt=""
        />

        
        <CardContent>
            <Typography variant="cardTitle">
            {props.name} 
            </Typography>
            <Typography variant="cardSubTitle">
            , {props.university}
            </Typography>
          
          <Typography variant="body1">
          {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default AssociationCard;
