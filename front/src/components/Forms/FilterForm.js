import React from 'react';
import { useState } from 'react';
import filterController from '../../infrastructure/controller.js/FilterController';
import CheckboxCategory from './CheckboxCategory';

const defaultFilter = {
    university: 
    {
      "label 1": false,
      "label 2": false
    },
    tags: {
      "label 1": false,
      "label 2": false
    }
  };  

const defaultSort = {
  sort: []
};

function FilterForm() {

    const [filterValues, setFilterValues] = useState(defaultFilter);
    const [answerStatus, setAnswerStatus] = useState("");

    const handleInputChange = (data, category) => {

      const formatCategory = category.toLowerCase();
      var checked = filterValues
      checked[formatCategory] = data
      setFilterValues(checked);
      console.log(checked)

    };

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
    }

    return (
      <div>
        <CheckboxCategory title="University" propagateCheck={handleInputChange} />
        <CheckboxCategory title="Tags" propagateCheck={handleInputChange} />
    </div>)

}

export default FilterForm;