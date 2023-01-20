import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import EditIcon from '@mui/icons-material/Edit'
import { Typography } from '@mui/material'
import PropTypes from 'prop-types'
import TextButton from '../../ui/button/TextButton'

export default function ModifyableContentZone({ title, children }) {
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
   const editButtonCSS = {
      position: 'absolute',
      right: '10px',
      top: '0',
   }

   return (
      <Box sx={containerCSS}>
         <Box sx={headerCSS}>
            <Box sx={editButtonCSS}>
               <TextButton message="Modifier" startIcon={<EditIcon />} />
            </Box>
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

ModifyableContentZone.propTypes = {
   title: PropTypes.string,
   children: PropTypes.node.isRequired,
}

ModifyableContentZone.defaultProps = {
   title: null,
}
