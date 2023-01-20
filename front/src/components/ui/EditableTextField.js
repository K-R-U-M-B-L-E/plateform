import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

function EditableField(props) {
   const [text, setText] = useState(props.text)
   const [isTextFocused, setIsTextedFocused] = useState(false)
   const { width } = props

   return (
      <div>
         {!isTextFocused ? (
            <Typography
               className="Editabletext"
               width={width}
               onClick={() => {
                  setIsTextedFocused(true)
               }}
            >
               {text}
            </Typography>
         ) : (
            <TextField
               autoFocus
               variant="standard"
               multiline
               inputProps="EditableText"
               value={text}
               onChange={(event) => setText(event.target.value)}
               onBlur={(event) => setIsTextedFocused(false)}
               sx={{ width: { width } }}
            />
         )}
      </div>
   )
}

export default EditableField
