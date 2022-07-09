import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from '@mui/material/TextField';

import filterController from "../../infrastructure/controller.js/FilterController";
import MediaCard from "../Card/MediaCard";
import AssociationListStatic from "../AssociationListStatic";


const defaultValue = ""

function SearchBar() {

    const [searchValue, setSearchValue] = useState(defaultValue);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleInputChange = (value) => {
        setSearchValue(value);
        searchData(value);
    };


    const searchData = async (value) => {
            try {
                console.log("searchData",value)
                const response = await filterController.searchText(value);
                setData(response);
                setError(null);
                console.log(response)
    
            } catch(err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }  
        };    
  
    return (
        <form>
        <TextField
            id="search-bar"
            className="text"
            onChange={(e) => {
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

        <ul>
        {data && <AssociationListStatic associations={data.associations} />}
        </ul>
  </form>
    )
}

export default SearchBar;