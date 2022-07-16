import * as React from 'react';
import Button from '@mui/material/Button';


export default function LightButton(props) {
  return (
      <Button style={{
        borderRadius: 15,
        borderColor: "#C0C0C0",
        borderWidth: 1.4,
        padding: "8px 15px",
        fontSize: "20px",
        fontWeight: "550",
        color: "#232221",
        textTransform: 'none',
        }} 
    variant="outlined" startIcon={props.icon} onClick={props.handleClick} >
        {props.message}
      </Button>
  );
}
