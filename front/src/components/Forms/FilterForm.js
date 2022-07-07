import React from 'react';
import filterController from '../../infrastructure/controller.js/FilterController';

const defaultValues = {
    university: []
  };  

function FilterForm() {

    const [filterValues, setFilterValues] = useState(defaultValues);
    const [answerStatus, setAnswerStatus] = useState("");

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFilterValues({...filterValues,[id]: value,});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendData();
    };

    const sendData = async () => {

      try {
        const response = await filterController.add(JSON.stringify(filterValues))
        setAnswerStatus(response)
      } 
      catch(err) {
        setAnswerStatus(err)
      }
    }

    return
}

export default FilterForm;