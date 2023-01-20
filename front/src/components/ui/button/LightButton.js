import * as React from 'react'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'

export default function LightButton(props) {
   const theme = useTheme()
   const { message, handleClick, startIcon, endIcon } = props

   return (
      <Button
         style={{
            borderRadius: 15,
            borderColor: theme.palette.krumbleGray.light,
            borderWidth: 1.4,
            padding: '8px 15px',
            fontSize: '14px',
            fontWeight: '550',
            color: theme.palette.krumbleGray.dark,
            textTransform: 'none',
            backgroundColor: theme.palette.white.main,
         }}
         variant="outlined"
         startIcon={startIcon}
         endIcon={endIcon}
         onClick={handleClick}
      >
         {message}
      </Button>
   )
}

LightButton.propTypes = {
   message: PropTypes.string,
   handleClick: PropTypes.func,
   startIcon: PropTypes.element,
   endIcon: PropTypes.element,
}

LightButton.defaultProps = {
   handleClick: () => {},
   startIcon: null,
   endIcon: null,
   message: 'Click here',
}
