import * as React from 'react'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import PropTypes from 'prop-types'

export default function BlueButton(props) {
   const { icon, message, handleClick } = props
   const theme = useTheme()

   return (
      <Button
         style={{
            borderRadius: 10,
            fontSize: '20px',
            fontWeight: '550',
            textTransform: 'none',
            backgroundColor: theme.palette.krumbleBlue.main,
            color: theme.palette.white.main,
            boxShadow: 'none',
            width: '270px',
            height: '70px',
         }}
         variant="contained"
         startIcon={icon}
         onClick={handleClick}
      >
         {message}
      </Button>
   )
}

BlueButton.propTypes = {
   message: PropTypes.string.isRequired,
   icon: PropTypes.node,
   handleClick: PropTypes.func,
}

BlueButton.defaultProps = {
   icon: null,
   handleClick: () => {},
}
