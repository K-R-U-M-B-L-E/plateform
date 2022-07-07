import React, {useEffect, useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from '@mui/material/TextField';

import filterController from "../../infrastructure/controller.js/FilterController";
import MediaCard from "../Card/MediaCard";


const defaultValue = ""

function SearchBar() {

    const [searchValue, setSearchValue] = useState(defaultValue);

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleInputChange = (value) => {
        setSearchValue({...searchValue,value,});
    };


    useEffect(() => { 
        const searchData = async () => {
            try {
                const response = await filterController.getTxt( { research: "epitas"});
                setData(response);
                setError(null);
                console.log(response)
    
            } catch(err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }  
        }
        searchData()
    }, [loading, searchValue])
    
  
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
            placeholder="Search..."
            size="small"
        />
        <IconButton type="submit" aria-label="search">
            <SearchIcon style={{ fill: "blue" }} />
        </IconButton>

        <ul>
        {data && data.associations.map(({ _id, name }) => (
            <li>
                <MediaCard id={_id} title={name} description="lorem ipsum" image="https://tse1.mm.bing.net/th?id=OIP.YuzpYI2Ya5mbjWLN_yj60QHaEf&pid=Api" />
            </li>
            ))}
        </ul>
  </form>
    )
}

export default SearchBar;