import React from 'react';
import { useState, useEffect } from 'react';
import filterController from '../../infrastructure/controller.js/FilterController';
import CheckboxCategory from './CheckboxCategory';
import AssociationListStatic from '../AssociationListStatic';


//dump list of choice
const UNIVERSITY = ["EPITA","IPSA","ISEP"];


const CITY = ["LYON","MARSEILLE","PARIS","RENNES","STRASBOURG","TOULOUSE"];


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

/*function FilterForm() {

    const [filterValues, setFilterValues] = useState(defaultFilter);
    const [answerStatus, setAnswerStatus] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        sendData();
    };

    const sendData = async () => {

      try {
        const response = await filterController.add(filterValues)
        setAnswerStatus(response)
      } 
      catch(err) {
        setAnswerStatus(err)
      }
    }*/

const testData = {
  "university": [
      "EPITA",
      "IPSA",
      "ISEP",
  ],
  "city": ["LYON","MARSEILLE","PARIS","RENNES","STRASBOURG","TOULOUSE"],
  "tag": []
}

const filter = {
  "keys": ["university","visible","tag"]
};


export default function FilterForm(props) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [dataEffect, setDataEffect] = useState(null);
  const [loadingEffect, setLoadingEffect] = useState(true);
  const [errorEffect, setErrorEffect] = useState(null);

  const [filterValues, setFilterValues] = useState(initDefaultFormValues(dataEffect));

  useEffect(() => {
    const getFilter = async () => {
      try {
        var response;
        console.log(filter)
        response = await filterController.searchKey(JSON.stringify(filter))
        setDataEffect(response);
        console.log(response)
        setErrorEffect(null);

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
      <div>
      {
          Object.keys(testData).map((e, i) => {
            return (
            <span key={i}>
               <CheckboxCategory list={testData[e]} title={e} propagateCheck={handleCategoryChange}/>
            </span>)
          })
      }
      </div>
        {data && data.associations &&
          <div> <AssociationListStatic title="Result" associations={data.associations} /> </div> }
    </div>
  );
}