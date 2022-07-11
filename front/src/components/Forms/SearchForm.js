import React from 'react';
import { useState, useEffect } from 'react';
import SearchController from '../../infrastructure/controller.js/SearchController';
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

    const [searchValue, setSearchValue] = useState({text: "",filter: ""})
    //var value = ["",""];

    const getData = async (props) => {

        console.log("props", props)
        if (props.filter !== undefined)
        {
            var json = searchValue
            json["filter"] = JSON.stringify(props.filter)
            setSearchValue(json)
            //value[1] = JSON.stringify(props.filter)
        }
        else if (props.text !== undefined)
        {
            var json = searchValue
            json["text"] = JSON.stringify(props.text)
            setSearchValue(json)
            //value[0] = JSON.stringify(props.text)            
        }

        console.log("value", searchValue)

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