import * as React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'

export default function Contacts({ primaryContact, secondaryContact }) {
   const { phoneNumber, firstMail, secondMail, personnalInformations } =
      primaryContact
   let complentaryInfos = ''
   if (personnalInformations) {
      const { firstName, lastName, role } = personnalInformations
      complentaryInfos = `${firstName} ${lastName}, ${role}`
   }
   const { website, facebook, instagram } = secondaryContact

   let phoneHTML
   if (phoneNumber && complentaryInfos !== '') {
      phoneHTML = contactHTMLFactory(
         `${phoneNumber}, ${complentaryInfos}`,
         '☎️'
      )
   } else {
      phoneHTML = contactHTMLFactory(phoneNumber, '☎️')
   }
   let mailHTML
   if (firstMail && secondMail) {
      mailHTML = contactHTMLFactory(`${firstMail}, ${secondMail}`, '📧')
   } else {
      mailHTML = contactHTMLFactory(firstMail || secondMail, '📧')
   }
   const websiteHTML = contactHTMLFactory(website, '🌐')
   const facebookHTML = contactHTMLFactory(facebook, '📖')
   const instagramHTML = contactHTMLFactory(instagram, '📷')

   return (
      <Box sx={{ paddingTop: '10%' }}>
         {phoneHTML}
         {mailHTML}
         {websiteHTML}
         {facebookHTML}
         {instagramHTML}
      </Box>
   )
}

function contactHTMLFactory(contact, contactName) {
   let contactHTML
   const theme = useTheme()
   if (contact) {
      contactHTML = (
         <Box>
            <Typography variant="h3" sx={theme.typography.subTitle}>
               {contactName}
               <Typography variant="p" sx={theme.typography.body1}>
                  {contact}
               </Typography>
            </Typography>
         </Box>
      )
   }
   return contactHTML
}

Contacts.propTypes = {
   primaryContact: PropTypes.shape({
      phoneNumber: PropTypes.string.isRequired,
      firstMail: PropTypes.string.isRequired,
      secondMail: PropTypes.string,
      personnalInformations: PropTypes.shape({
         firstName: PropTypes.string.isRequired,
         lastName: PropTypes.string.isRequired,
         role: PropTypes.string,
      }).isRequired,
   }).isRequired,
   secondaryContact: PropTypes.shape({
      website: PropTypes.string,
      facebook: PropTypes.string,
      instagram: PropTypes.string,
   }).isRequired,
}

Contacts.defaultProps = {}
