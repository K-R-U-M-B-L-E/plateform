import React from 'react';
import { useState, useEffect } from 'react';
import filterController from '../../infrastructure/controller.js/FilterController';
import CheckboxCategory from './CheckboxCategory';
import AssociationListStatic from '../AssociationListStatic';


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



const defaultSort = {
  sort: []
};


const filter = {
  "keys": ["university","city","tag"]
};


export default function FilterForm(props) {

  const [dataEffect, setDataEffect] = useState(null);
  const [loadingEffect, setLoadingEffect] = useState(true);
  const [errorEffect, setErrorEffect] = useState(null);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filterValues, setFilterValues] = useState(null);

  useEffect(() => {
    const getFilter = async () => {
      try {
        var response;
        response = await filterController.searchKey(JSON.stringify(filter))
        setDataEffect(response);
        console.log(response)
        setErrorEffect(null);

        setFilterValues(initDefaultFormValues(dataEffect))

      } catch(err) {
            setErrorEffect(err.message);
            setDataEffect(null);
      } finally {
            setLoadingEffect(false);
            return;
      }  
    }
    getFilter()
  }, [loadingEffect])


  const handleCategoryChange = (state, category) => {

    const formatCategory = category.toLowerCase();
    var checked = filterValues
    checked[formatCategory] = state
    setFilterValues(checked);
    console.log("FORM VALUE", filterValues)

    getData()
  };

  const getData = async () => {
      try {
        var response;
        response = await filterController.search(JSON.stringify(filterValues));
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
 
  return (
    <div>
      { errorEffect && <h1>{errorEffect}</h1>}
      <div>
      { dataEffect && filterValues &&
          Object.keys(dataEffect).map((e, i) => {
            return (
            <span key={i}>
               <CheckboxCategory list={dataEffect[e]} title={e} propagateCheck={handleCategoryChange}/>
            </span>)
          })
      }
      </div>
        {data && data.associations &&
          <div> <AssociationListStatic title="Result" associations={data.associations} /> </div> }
    </div>
  );
}