import { ThemeProvider } from '@mui/material'
import Presentation from '../../../../components/association/ManagePage/contents/Presentation'
import Krumbletheme from '../../../../assets/global'
import AssociationModelWithMinimumInformations from '../../../models/AssociationModelWithMinimumInformations'

export default {
   title: 'Association/ManagePage/Contents/Presentation',
   component: Presentation,
   argTypes: { title: { control: 'text' }, page: { control: 'text' } },
}

function Template(args) {
   return (
      <ThemeProvider theme={Krumbletheme}>
         {/* eslint-disable-next-line react/jsx-props-no-spreading */}
         <Presentation {...args} />
      </ThemeProvider>
   )
}

export const WithMinimumInformations = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithMinimumInformations.args = {
   presentation: AssociationModelWithMinimumInformations.presentation,
}

const asso = {
   name: 'Krumble',
   university: 'Université de Lille',
   city: 'Lille',
   description: "description de l'association",
   image: 'https://source.unsplash.com/random',
   partnerPropositionAllowed: true,
}
export const WithDescriptionAndLogo = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithDescriptionAndLogo.args = { presentation: asso }
