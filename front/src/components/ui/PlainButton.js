import * as React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';


export default function PlainButton(props) {

  const theme = useTheme();

  return (
      <Button style={{
        borderRadius: 20,
        padding: "2px 15px",
        fontSize: "16px",
        fontWeight: "550",
        textTransform: 'none',
        backgroundColor: props.color,
        color: theme.palette.krumbleGray.dark,
        boxShadow: 'none'
        }} 
    variant="contained" onClick={props.handleClick} >
        {props.message}
      </Button>
  );
}
