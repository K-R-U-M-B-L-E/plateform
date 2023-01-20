import * as React from 'react'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'

export default function PlainButton(props) {
   const theme = useTheme()
   const { message, handleClick, color } = props

   return (
      <Button
         style={{
            borderRadius: 20,
            padding: '2px 15px',
            fontSize: '16px',
            fontWeight: '550',
            textTransform: 'none',
            backgroundColor: color,
            color: theme.palette.krumbleGray.dark,
            boxShadow: 'none',
            display: 'block',
            margin: 'auto',
         }}
         variant="contained"
         onClick={handleClick}
      >
         {message}
      </Button>
   )
}

PlainButton.propTypes = {
   message: PropTypes.string,
   handleClick: PropTypes.func,
   color: PropTypes.string,
}

PlainButton.defaultProps = {
   handleClick: () => {},
   color: '#F2F2F2',
   message: 'Click here',
}
