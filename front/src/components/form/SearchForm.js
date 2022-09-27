import React from 'react';
import { useState } from 'react';
import SearchBar from '../Search component/SearchBar';
import FilterForm from '../Search component/FilterForm';
import AssociationListStatic from '../AssociationListStatic';
import { CircularProgress } from "@mui/material";
import searchController from '../../services/controllers/SearchController';
import SortMenu from '../Search component/SortMenu';
import { DisplayResult } from '../Result';
import inlightBuilder from '../../utils/inlightBuilder';


const sortOptions = [
    "A->Z",
    "Z->A",
    "Par Ecole",
    "Par nombre de partenariat réalisé",
]

function SearchForm(props) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const areFilterVisible = props.areFilterVisible;

    const [searchValue, setSearchValue] = useState({text: "", filter: "", sort: ""})

    const feedSearchValue = (props) => {

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
        else if (props.sort !== undefined)
        {
            var json = searchValue
            json["sort"] = props.sort
            setSearchValue(json)
        }
    }

    const getData = async (props) => {

        feedSearchValue(props);

        try {
          var response;
          response = await searchController.search({ text: searchValue.text, filter: searchValue.filter, sort: searchValue.sort });
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
        <SortMenu search={getData} sortOptions={sortOptions} />
        <SearchBar search={getData}/>

        <FilterForm search={getData}/>     

        <div>
            {loading && <div><CircularProgress /></div>}
            {error && (<div>{`There is a problem fetching the post data - ${error}`}</div>)}
            {data && <DisplayResult projects={[]} projectsInlight={[]} associations={data.associations} associationsInlight={inlightBuilder(data.associations)}  />}
        </div>
        
    </div>)
}

export default SearchForm;