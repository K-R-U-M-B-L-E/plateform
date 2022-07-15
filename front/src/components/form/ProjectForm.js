import React, {useState, useEffect} from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const defaultValues = {
    name: "",
    description: "",
  };


function ProjectForm() {

    const [formValues, setFormValues] = useState(defaultValues);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues)
    };

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
        const response = await fetch(`/projects`, requestOptions);
        if (!response.ok) {
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        }
        let serverAnswer = await response.json();
        console.log(serverAnswer)

      } 
      catch(err) {
        console.error(err)
      }
    }
  
    return (
        <form onSubmit={handleSubmit}>
            <Box
                component="AssociationForm"
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
                         id="description"
                         type="text"
                         label="Description"
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

export default ProjectForm;
