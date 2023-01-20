import { ThemeProvider } from '@mui/material'
import SecondaryInformationsGrid from '../../../components/association/ManagePage/SecondaryInformationsGrid'
import Krumbletheme from '../../../assets/global'
import AssociationModelWithPhotos from '../../models/AssociationModelWithPhotos'
import HelpExplanation from '../../../components/association/ManagePage/contents/HelpExplanation'
import Contacts from '../../../components/association/ManagePage/contents/Contacts'

export default {
   title: 'Association/ManagePage/SecondaryInformationsGrid',
   component: SecondaryInformationsGrid,
   argTypes: {},
}

function Template(args) {
   return (
      <ThemeProvider theme={Krumbletheme}>
         {/* eslint-disable-next-line react/jsx-props-no-spreading */}
         <SecondaryInformationsGrid {...args} />
      </ThemeProvider>
   )
}

const ContactComponent = (
   <Contacts
      primaryContact={AssociationModelWithPhotos.contacts.primaryContact}
      secondaryContact={AssociationModelWithPhotos.contacts.secondaryContact}
   />
)
const HelpExchangesComponent = (
   <HelpExplanation
      helpExplanation={AssociationModelWithPhotos.helpExplanation}
   />
)
const children = [ContactComponent, HelpExchangesComponent]
export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
   children: children,
}
