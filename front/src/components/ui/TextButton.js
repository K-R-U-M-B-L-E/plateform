import * as React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';


export default function TextButton(props) {

  const theme = useTheme();

  return (
      <Button style={{
        fontSize: "14px",
        fontWeight: "400",
        textTransform: 'none',
        textDecoration: "underline",
        color: theme.palette.krumbleGray.dark,
        boxShadow: 'none',
        backgroundColor: 'transparent',
        textAlign: 'left'
        }} 
    onClick={props.handleClick} startIcon={props.startIcon} endIcon={props.endIcon} fullWidth={true}>
        {props.message}
      </Button>
  );
}
