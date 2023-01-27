import * as React from 'react'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import PropTypes from 'prop-types'

import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'

import artsImg from '../../../assets/img/tags/arts.svg'
import bdeImg from '../../../assets/img/tags/bde.svg'
import caritatifImg from '../../../assets/img/tags/caritatif.svg'
import conferencesImg from '../../../assets/img/tags/conferences.svg'
import divertissementImg from '../../../assets/img/tags/divertissement.svg'
import educatifImg from '../../../assets/img/tags/educatif.svg'
import innovationImg from '../../../assets/img/tags/innovation.svg'
import sportsImg from '../../../assets/img/tags/sports.svg'
import favorisImg from '../../../assets/img/tags/favoris.svg'

function TagsBar() {
   const tagsList = [
      { name: 'Innovation', img: innovationImg },
      { name: 'Conférences', img: conferencesImg },
      { name: 'Sports', img: sportsImg },
      { name: 'Éducatif', img: educatifImg },
      { name: 'Divertissement', img: divertissementImg },
      { name: 'Caritatif', img: caritatifImg },
      { name: 'BDE', img: bdeImg },
      { name: 'Arts', img: artsImg },
   ]
   const theme = useTheme()
   const borderColor = `1px solid ${theme.palette.krumbleGray.light}`

   return (
      <Box
         sx={{
            borderBottom: 1,
            borderColor: 'divider',
            backgroundColor: theme.palette.white.main,
            position: 'relative',
            width: '100%',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
            height: '80xpx',
         }}
      >
         <Box
            sx={{
               position: 'absolute',
               top: '0',
               left: '0',
               width: '130px',
               backgroundColor: theme.palette.white.main,
               height: '100%',
               borderRight: borderColor,
            }}
         >
            <TagButton img={favorisImg} name="favoris" />
         </Box>

         <Box
            sx={{
               display: 'flex',
               flexDirection: 'row',
               flexWrap: 'wrap',
               justifyContent: 'center',
               alignItems: 'stretch',
               margin: '0 auto',
               width: '90%',
            }}
         >
            {tagsList.map((tag) => (
               <>
                  <TagButton img={tag.img} name={tag.name} />
                  <Box sx={{ width: '5px' }} />
               </>
            ))}
         </Box>
      </Box>
   )
}

function TagButton({ name, img }) {
   return (
      <Tooltip title={name} placement="bottom">
         <Button
            sx={{
               textTransform: 'none',
               display: 'block',
               width: '130px',
            }}
         >
            <img src={img} alt={name} />
         </Button>
      </Tooltip>
   )
}
TagButton.propTypes = {
   name: PropTypes.string.isRequired,
   img: PropTypes.string.isRequired,
}

export default TagsBar
