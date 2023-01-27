import * as React from 'react'
import PropTypes from 'prop-types'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

function HeaderSetup({ title, page }) {
   return (
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
         <Button size="small" href="/">
            KAMPUS
         </Button>
         <Typography color="inherit" align="center" noWrap sx={{ flex: 1 }}>
            {title}
         </Typography>
         <Typography>{page}</Typography>
      </Toolbar>
   )
}

HeaderSetup.propTypes = {
   title: PropTypes.string.isRequired,
   page: PropTypes.string.isRequired,
}

export default HeaderSetup
