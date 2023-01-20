import React from 'react'

import InformationsCompteEmail from './InformationsCompteEmail'
import InformationsCompteMdp from './InformationsCompteMdp'

function InformationsCompte() {
   return (
      <div>
         <h2 style={{ paddingBottom: '20px' }}>Informations du compte</h2>

         <InformationsCompteEmail />

         <InformationsCompteMdp />
      </div>
   )
}

export default InformationsCompte
