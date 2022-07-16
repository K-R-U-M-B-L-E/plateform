import * as React from 'react';
import Button from '@mui/material/Button';


export default function PlainButton(props) {
  return (
      <Button style={{
        borderRadius: 20,
        padding: "2px 15px",
        fontSize: "16px",
        fontWeight: "550",
        textTransform: 'none',
        backgroundColor: props.color,
        color: "#232221",
        boxShadow: 'none'
        }} 
    variant="contained" onClick={props.handleClick} >
        {props.message}
      </Button>
  );
}
