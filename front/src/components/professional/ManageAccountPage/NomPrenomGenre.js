import React from 'react'
import TextField from '@mui/material/TextField'
import { Stack } from '@mui/material'
import GenderChose from './GenderChose'

function NomPrenomGenre() {
   return (
      <Stack direction="column" spacing={1}>
         <TextField
            margin="normal"
            required
            fullWidth
            id="lastname"
            name="nom"
            label="Nom"
            autoComplete="lastname" // A vérif que c'est bien ça
            autoFocus
         />
         <TextField
            margin="normal"
            required
            fullWidth
            id="firstname"
            name="prenom"
            label="Prénom"
            autoComplete="firstname" // A vérif que c'est bien ça
         />
         <GenderChose />
      </Stack>
   )
}

export default NomPrenomGenre
