import React from 'react';
import { useState } from 'react';
import SearchBar from '../Search Category/SearchBar';
import FilterForm from './FilterForm';
import AssociationListStatic from '../AssociationListStatic';
import { CircularProgress } from "@mui/material";
import searchController from '../../infrastructure/controller.js/SearchController';


const defaultSort = {
    sort: []
  };

function SearchForm() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [searchValue, setSearchValue] = useState({text: "", filter: ""})

    const getData = async (props) => {

        console.log("props", props)
        if (props.filter !== undefined)
        {
            var json = searchValue
            json["filter"] = JSON.stringify(props.filter)
            setSearchValue(json)
        }
        else if (props.text !== undefined)
        {
            var json = searchValue
            json["text"] = props.text
            setSearchValue(json)       
        }

        try {
          var response;
          response = await searchController.search({ text: searchValue.text, filter: searchValue.filter});
          console.log("response",response)
          setData(response);
          setError(null);
  
        } catch(err) {
              setError(err.message);
              setData(null);
        } finally {
              setLoading(false);
              return;
        }  
    }

    return (<div>
        <SearchBar search={getData}/>
        <FilterForm search={getData}/>

        <div>
            {loading && <div><CircularProgress /></div>}
            {error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)}
            {data && <AssociationListStatic associations={data.associations} />}
        </div>
        
    </div>)
}

export default SearchForm;