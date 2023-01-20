import * as React from 'react'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'

export default function TextButton(props) {
   const theme = useTheme()
   const { message, startIcon, endIcon, handleClick } = props

   return (
      <Button
         style={{
            fontSize: '14px',
            fontWeight: '400',
            textTransform: 'none',
            textDecoration: 'underline',
            color: theme.palette.krumbleGray.dark,
            boxShadow: 'none',
            backgroundColor: 'transparent',
            textAlign: 'left',
         }}
         onClick={handleClick}
         startIcon={startIcon}
         endIcon={endIcon}
         fullWidth
      >
         {message}
      </Button>
   )
}

TextButton.propTypes = {
   message: PropTypes.string,
   handleClick: PropTypes.func,
   // eslint-disable-next-line react/forbid-prop-types
   startIcon: PropTypes.element,
   endIcon: PropTypes.element,
}

TextButton.defaultProps = {
   handleClick: () => {},
   startIcon: null,
   endIcon: null,
   message: 'Click here',
}
