import React, {useState} from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const defaultValue = 0;

function SortMenu(props) {

    const [sortValue, setSortValue] = useState(defaultValue);

    const handleInputChange = (e) => {

        setSortValue(e.target.value);
        props.search({ sort: e.target.value });

    };
  
    return (
        <div>
            <Box sx={{ minWidth: 120 }}>
            <FormControl>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Trier par
                </InputLabel>
                <NativeSelect
                defaultValue={0}
                inputProps={{
                    name: 'Trier par',
                    id: 'uncontrolled-native',
                }}
                onChange={handleInputChange}
                >
                
                { props.sortOptions && props.sortOptions.map((e, i) => {
                    return (
                        <option value={i}>{e}</option>
                    )})
                }
                </NativeSelect>
            </FormControl>
            </Box>
        </div>
    )
}

export default SortMenu;