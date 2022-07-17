import * as React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';


export default function LightButton(props) {

  const theme = useTheme();

  return (
      <Button style={{
        borderRadius: 15,
        borderColor: theme.palette.krumbleGray.light,
        borderWidth: 1.4,
        padding: "8px 15px",
        fontSize: "20px",
        fontWeight: "550",
        color: theme.palette.krumbleGray.dark,
        textTransform: 'none',
        }} 
    variant="outlined" startIcon={props.icon} onClick={props.handleClick} >
        {props.message}
      </Button>
  );
}
