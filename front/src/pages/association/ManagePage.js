import PropTypes from 'prop-types'
import Presentation from '../../components/association/ManagePage/contents/Presentation'
import Caroussel from '../../components/association/ManagePage/contents/Caroussel'
import SecondaryInformationsGrid from '../../components/association/ManagePage/SecondaryInformationsGrid'
import MainInformationGrid from '../../components/association/ManagePage/MainInformationsGrid'
import Contacts from '../../components/association/ManagePage/contents/Contacts'
import HelpExplanation from '../../components/association/ManagePage/contents/HelpExplanation'
import Project from '../../components/association/ManagePage/contents/Project'

function ManagePage({ associationModel }) {
   const { presentation, photos, projects, contacts, helpExplanation } =
      associationModel

   const projectComponents = []
   if (projects !== null) {
      projects.forEach((project) => {
         projectComponents.push(<Project project={project} />)
      })
   }

   return (
      <>
         <MainInformationGrid>
            {[
               <Presentation presentation={presentation} />,
               <Caroussel photos={photos} />,
               projectComponents,
            ]}
         </MainInformationGrid>
         <SecondaryInformationsGrid>
            {[
               <Contacts
                  primaryContact={contacts.primaryContact}
                  secondaryContact={contacts.secondaryContact}
               />,
               <HelpExplanation helpExplanation={helpExplanation} />,
            ]}
         </SecondaryInformationsGrid>
      </>
   )
}

ManagePage.propTypes = {
   associationModel: PropTypes.shape({
      presentation: PropTypes.shape({
         name: PropTypes.string.isRequired,
         university: PropTypes.string.isRequired,
         city: PropTypes.string.isRequired,
         description: PropTypes.string.isRequired,
         image: PropTypes.string.isRequired,
         partnerPropositionAllowed: PropTypes.bool.isRequired,
      }).isRequired,
      photos: PropTypes.arrayOf(
         PropTypes.shape({
            img: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            order: PropTypes.number.isRequired, // compris entre [0, 4]
         }).isRequired
      ).isRequired,
      projects: PropTypes.arrayOf(
         PropTypes.shape({
            title: PropTypes.string,
            date: PropTypes.string, // TODO : format à spécifier pour une date
            description: PropTypes.string,
            advantagesForSponsor: PropTypes.string,
            needs: PropTypes.shape({
               money: {
                  isNeeded: PropTypes.bool,
                  amount: PropTypes.number,
               },
               material: {
                  isNeeded: PropTypes.bool,
                  description: PropTypes.string,
               },
               people: {
                  isNeeded: PropTypes.bool,
                  description: PropTypes.string,
               },
            }),
         })
      ).isRequired,
      contacts: PropTypes.shape({
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
      }).isRequired,
      helpExplanation: PropTypes.string,
   }).isRequired,
}

export default ManagePage
