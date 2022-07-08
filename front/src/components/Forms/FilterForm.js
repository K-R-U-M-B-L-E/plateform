import React from 'react';
import { useState } from 'react';
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

const defaultFilter = {
  university: UNIVERSITY,
  city: CITY
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

    const handleCategoryChange = (data, category) => {

      const formatCategory = category.toLowerCase();
      var checked = filterValues
      checked[formatCategory] = data
      setFilterValues(checked);
      console.log("FORM VALUE",checked)
    };
  
  return (
    <div>
      <div>
        <CheckboxCategory list={UNIVERSITY} title="University" propagateCheck={handleCategoryChange}/>
        <CheckboxCategory list={CITY} title="City" propagateCheck={handleCategoryChange}/>
      </div>
    </div>
  );
}