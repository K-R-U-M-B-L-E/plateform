import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

/* COPY OF src/components/association/ManagePage/ModifyableContentZone */
export default function ContentZone({ title, children }) {
   const theme = useTheme()
   const whiteColor = theme.palette.white.main

   const containerCSS = {
      position: 'relative',
      paddingRight: '15px',
      paddingLeft: '15px',
      paddingTop: '15px',
      paddingBottom: '15px',
      backgroundColor: whiteColor,
      border: '1px solid #E5E5E5',
      borderRadius: '20px',
      overflow: 'auto',
   }

   const headerCSS = {
      paddingBottom: '2%',
   }
   if (!title) {
      headerCSS.paddingBottom = '0%'
   }

   const titleCSS = {
      position: 'absolute',
      left: '15px',
      top: '8px',
   }

   return (
      <Box sx={containerCSS}>
         <Box sx={headerCSS}>
            <Box sx={titleCSS}>
               <Typography
                  variant="h2"
                  sx={{ ...theme.typography.title, fontWeight: '600' }}
               >
                  {title}
               </Typography>
            </Box>
         </Box>
         {children}
         <Box />
      </Box>
   )
}

ContentZone.propTypes = {
   title: PropTypes.string,
   children: PropTypes.node.isRequired,
}

ContentZone.defaultProps = {
   title: null,
}
