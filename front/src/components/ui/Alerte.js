import { Alert, AlertTitle } from '@mui/material'

function MyAlert(props) {
   return (
      <div>
         <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {props}
         </Alert>
      </div>
   )
}

export default MyAlert
