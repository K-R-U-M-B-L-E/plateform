import * as React from 'react';
import Button from '@mui/material/Button';


export default function BlueButton(props) {
  return (
      <Button style={{
        borderRadius: 10,
        fontSize: "20px",
        fontWeight: "550",
        textTransform: 'none',
        backgroundColor: "#1B69E4",
        color: "#FFFFFF",
        boxShadow: 'none',
        width: "270px",
        height: "70px"
        }} 
    variant="contained" startIcon={props.icon} onClick={props.handleClick} >
        {props.message}
      </Button>
  );
}
