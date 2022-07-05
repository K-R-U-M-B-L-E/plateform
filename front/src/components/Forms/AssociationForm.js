import React, {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import associationController from "../../infrastructure/controller.js/AssociationController.js";
import MyAlert from "../Alerte.js";

const defaultValues = {
    name: "",
    university: "",
    visible: false
  };  

function AssociationForm() {

    const [formValues, setFormValues] = useState(defaultValues);
    const [answerStatus, setAnswerStatus] = useState("");

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormValues({...formValues,[id]: value,});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        sendData();
    };

    const sendData = async () => {

      try {
        const response = await associationController.add(JSON.stringify(formValues))
        setAnswerStatus(response)
      } 
      catch(err) {
        setAnswerStatus(err)
      }
    }
  
    return (
        <form onSubmit={handleSubmit}>
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <div>
                    <TextField
                        id="name"
                        type="text"
                        label="Nom"
                        required={true}
                        onChange={handleInputChange}
                    />
                    <TextField
                         id="university"
                         type="text"
                         label="Ecole"
                         required={true}
                         onChange={handleInputChange}
                    />
                </div>

                <Button variant="contained" color="primary" type="submit">
                    Valider
                </Button>
            </Box>
        </form>
    );
}

export default AssociationForm;
