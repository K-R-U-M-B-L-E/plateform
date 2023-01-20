import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

function GenderChose() {
   return (
      <FormControl>
         <FormLabel id="gender-chose-buttons-label">Sexe</FormLabel>
         <RadioGroup
            row
            aria-labelledby="gender-chose-buttons-label"
            name="gender-chose-buttons-label"
         >
            <FormControlLabel
               value="Female"
               control={<Radio />}
               label="Femme"
            />
            <FormControlLabel value="Male" control={<Radio />} label="Homme" />
            <FormControlLabel value="Other" control={<Radio />} label="Autre" />
         </RadioGroup>
      </FormControl>
   )
}

export default GenderChose
