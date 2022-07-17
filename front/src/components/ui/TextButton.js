import * as React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';


export default function TextButton(props) {

  const theme = useTheme();

  return (
      <Button style={{
        fontSize: "18px",
        fontWeight: "400",
        textTransform: 'none',
        textDecoration: "underline",
        color: theme.palette.krumbleGray.dark,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        }} 
    variant="contained" onClick={props.handleClick} >
        {props.message}
      </Button>
  );
}
