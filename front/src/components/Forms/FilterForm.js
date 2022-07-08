import { Fab } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import filterController from '../../infrastructure/controller.js/FilterController';
import CheckboxCategory from './CheckboxCategory';


//dump list of choice
const UNIVERSITY = [
  { key: 0, label: "UNIVERSITY", name: "EPITA" },
  { key: 1, label: "UNIVERSITY", name: "ISEP" },
  { key: 2, label: "UNIVERSITY", name: "ESILV" },
];


const CITY = [
  { key: 0, label: "CITY", name: "PARIS" },
  { key: 1, label: "CITY", name: "LYON" },
  { key: 2, label: "CITY", name: "MARSEILLE" },
  { key: 3, label: "CITY", name: "TOULOUSE" },
  { key: 4, label: "CITY", name: "STRASBOURG" },
  { key: 5, label: "CITY", name: "RENNES" }
];


const JSONCITY = {
  PARIS: false,
  LYON: false,
  MARSEILLE: false,
  TOULOUSE: false,
  STRASBOURG: false,
  RENNES: false
}

const JSONUNIVERSITY = {
  EPITA: false,
  ISEP: false,
  ESILV: false
}

const defaultFilter = {
  university: JSONUNIVERSITY,
  city: JSONCITY
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



export default function FilterForm() {

  const [filterValues, setFilterValues] = useState(defaultFilter);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        <CheckboxCategory list={UNIVERSITY} title="University" propagateCheck={handleCategoryChange}/>
        <CheckboxCategory list={CITY} title="City" propagateCheck={handleCategoryChange}/>
      </div>
    </div>
  );
}