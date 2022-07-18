import * as React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';


export default function BlueButton(props) {

  const theme = useTheme();
  
  return (
      <Button style={{
        borderRadius: 10,
        fontSize: "20px",
        fontWeight: "550",
        textTransform: 'none',
        backgroundColor: theme.palette.krumbleBlue.main,
        color: theme.palette.white.main,
        boxShadow: 'none',
        width: "270px",
        height: "70px"
        }} 
    variant="contained" startIcon={props.icon} onClick={props.handleClick} >
        {props.message}
      </Button>
  );
}
