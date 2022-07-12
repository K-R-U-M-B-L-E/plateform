import React from 'react';
import { useState, useEffect } from 'react';
import searchController from '../../infrastructure/controller.js/SearchController';
import CheckboxCategory from './CheckboxCategory';


function initDefaultFormValues(props) {

  var defaultFilter = {}
  var i;
  for (i in props)
  {
      var jsonstate = {}
      var j;
      for (j in props[i])
      {
          jsonstate[props[i][j]] = false
      }
      defaultFilter[i] = jsonstate;
  } 
  return defaultFilter
}


const filter = {
  "keys": ["university","city","tag"]
};


export default function FilterForm(props) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filterValues, setFilterValues] = useState(null);


  useEffect(() => {
    const getFilter = async () => {
      try {
        var response;
        response = await searchController.searchKey(JSON.stringify(filter))
        setData(response);
        console.log(response)
        setError(null);

        setFilterValues(initDefaultFormValues(data))

      } catch(err) {
            setError(err.message);
            setData(null);
      } finally {
            setLoading(false);
            return;
      }  
    }
    getFilter()
  }, [loading])


  const handleCategoryChange = (state, category) => {

    const formatCategory = category.toLowerCase();
    var checked = filterValues
    checked[formatCategory] = state
    setFilterValues(checked);
    console.log("FORM VALUE", filterValues)

    props.search({ filter: filterValues })
  };

  return (
    <div>
      { error && <h1>{error}</h1>}
      { data && filterValues &&
          Object.keys(data).map((e, i) => {
            return (
            <span key={i}>
               <CheckboxCategory list={data[e]} title={e} propagateCheck={handleCategoryChange}/>
            </span>)
          })
      }
    </div>
  );
}