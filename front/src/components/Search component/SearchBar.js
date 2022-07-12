import React, {useState} from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from '@mui/material/TextField';

const defaultValue = ""

function SearchBar(props) {

    const [searchValue, setSearchValue] = useState(defaultValue);

    const handleInputChange = (value) => {

        setSearchValue(value);
        props.search({ text : value });

    };
  
    return (
        <div>
            <TextField
                id="search-bar"
                className="text"
                onKeyUp={(e) => {
                    handleInputChange(e.target.value);
                }}
                label="Chercher une association..."
                variant="outlined"
                placeholder="Rechercher..."
                size="small"
            />
            <IconButton aria-label="search">
                <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
        </div>
    )
}

export default SearchBar;