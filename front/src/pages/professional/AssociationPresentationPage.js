// Argument à prendre => liste des asso et projet poussés
import PropTypes from 'prop-types'
import Presentation from '../../components/professional/AssociationPresentationPage/contents/Presentation'
import MainInformationGrid from '../../components/professional/AssociationPresentationPage/MainInformationsGrid'
import Caroussel from '../../components/professional/AssociationPresentationPage/contents/Caroussel'
import Project from '../../components/professional/AssociationPresentationPage/contents/Project'
import SecondaryInformationsGrid from '../../components/professional/AssociationPresentationPage/SecondaryInformationsGrid'
import HelpExplanation from '../../components/professional/AssociationPresentationPage/contents/HelpExplanation'

function AssociationPresentationPage({association, projects}) {
   const {image, name, university, city, description, photos, contacts, helpExplanation } =
      association

   console.log("asso prez", association)
   const presentation = {
      image,
      name,
      description,
      university,
      city,
   }

   let CarousselComponent = null
   if (photos !== null && photos.length !== 0) {
      CarousselComponent = <Caroussel photos={photos} />
   }

   const projectComponents = []

   if (projects !== null) {
      projects.forEach((project) => {
         projectComponents.push(<Project project={project} />)
      })
   }

   let secondaryInformationGrid = null
   if (helpExplanation !== null && helpExplanation !== '') {
      secondaryInformationGrid = (
         <SecondaryInformationsGrid>
            <HelpExplanation helpExplanation={helpExplanation} />
         </SecondaryInformationsGrid>
      )
   }

   return (
      <>
         <MainInformationGrid>
            {[
               <Presentation presentation={presentation} />,
               CarousselComponent,
               projectComponents,
            ]}
         </MainInformationGrid>
         {secondaryInformationGrid}
      </>
   )
}

/*AssociationPresentationPage.propTypes = {
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
*/
export default AssociationPresentationPage
