import React from 'react'
import TextField from '@mui/material/TextField'
import { Stack } from '@mui/material'
import GenderChose from './GenderChose'

function TextFieldsInfosEntreprises() {
   return (
      <div>
         <Stack direction="column">
            <TextField
               margin="normal"
               required
               fullWidth
               id="company-name"
               name="role-dans-lentreprise"
               label="Rôle dans l'entreprise"
            />
            <TextField
               margin="normal"
               required
               fullWidth
               id="company-pole"
               name="pole-entreprise"
               label="Pôle de l'entreprise"
            />
            <TextField
               margin="normal"
               required
               fullWidth
               id="company-name"
               name="nom-entreprise"
               label="Nom de l'entreprise"
            />
         </Stack>
      </div>
   )
}

export default TextFieldsInfosEntreprises
