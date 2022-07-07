import React from 'react';
import { useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
//import filterController from '../../infrastructure/controller.js/FilterController';

const defaultChecked = {
    "label 1": false,
    "label 2": false
};

function CheckboxCategory(props) {

    const [checked, setChecked] = useState(defaultChecked);

    const handleCheck = (e) => {
        const id = e.target.id
        var checks = checked
        checks[id] = !checks[id]
        setChecked(checks);
          
        console.log(checked)
        props.propagateCheck(checked, props.title)
        
    };

    return (
        <div>
        <FormGroup>
            <h1>{props.title}</h1>
            <FormControlLabel control={<Checkbox id="label 1" onChange={handleCheck}/>} label="Label 1" labelPlacement='end'/>
            <FormControlLabel control={<Checkbox id="label 2" onChange={handleCheck}/>} label="Label 2" labelPlacement='end'/>
        </FormGroup>
    </div>
    )
}

export default CheckboxCategory;