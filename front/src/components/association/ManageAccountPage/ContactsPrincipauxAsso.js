import React from 'react'

import InformationsCompteMdp from './InformationsCompteMdp'
import InformationsContactEmail from './InformationsContactEmail'
import InformationsContactTelephone from './InformationsContactTelephone'

function ContactsPrincipauxAsso() {
   return (
      <div>
         <h2 style={{ paddingBottom: '20px' }}>
            Contacts principaux de l'association
         </h2>

         <InformationsContactEmail />

         <InformationsContactTelephone />
      </div>
   )
}

export default ContactsPrincipauxAsso
