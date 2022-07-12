import React from 'react';
import { useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';


function initDefaultChecked(props) {
    var defaultChecked = {}
    props.map((m) => (
        defaultChecked[m] = false
    ))

    return defaultChecked
}

/* parses check box data from props.list element
 * @params {{title: string, list:{name: string, id: number}[]}} props
 */
const CheckboxCategory = (props) => {
  //const [filters, setFilters] = useState([]);
  const [checked, setChecked] = useState(initDefaultChecked(props.list));

  // logic to add or remove elements check or unchecked form an array.
  /*const handleCheckboxChange = (event) => {
    const id = event.target.id;
    setFilters((currentFilter) =>
      currentFilter.includes(id)
        ? currentFilter.filter((f) => f !== id)
        : [...currentFilter, id]
    );

    console.log(props.title, filters);
  };*/

  //logic to turn an element as true when checked
  const handleCheckboxChange = (e) => {
    const id = e.target.id;
    var checks = checked
    checks[id] = !checks[id]
    setChecked(checks);
      
    props.propagateCheck(checked, props.title)
    
};

  // creates all the checkbox based on the list array.
  const checkboxGroup = props.list.map((m) => (
    <span key={m}>
      <FormControlLabel control={<Checkbox id={m} onChange={handleCheckboxChange}/>} label={m} labelPlacement='end'/>
    </span>
  ));

  return (
    <div>
      <FormGroup >
            <h1>{props.title}</h1>
            {checkboxGroup}
    </FormGroup>
    </div>
  );
};

export default CheckboxCategory;