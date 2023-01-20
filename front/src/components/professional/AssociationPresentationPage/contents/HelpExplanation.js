import { Typography } from '@mui/material'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import PlainButton from '../../../ui/button/PlainButton'

/* COPY OF src/components/association/ManagePage/ */
export default function HelpExplanation({ helpExplanation }) {
   const theme = useTheme()
   let addExplanationButton = null
   if (helpExplanation === null) {
      addExplanationButton = (
         <Box sx={{ paddingTop: '5%' }}>
            <PlainButton
               color={theme.palette.popGreen.main}
               message="Compléter"
            />
         </Box>
      )
   }

   return (
      <Box
         sx={{
            paddingTop: '5%',
         }}
      >
         <Typography
            variant="body1"
            sx={{ Padding: '0', ...theme.typography.body1 }}
         >
            {helpExplanation}
         </Typography>
         {addExplanationButton}
      </Box>
   )
}

HelpExplanation.propTypes = {
   helpExplanation: PropTypes.string,
}

HelpExplanation.defaultProps = {
   helpExplanation: '',
}
