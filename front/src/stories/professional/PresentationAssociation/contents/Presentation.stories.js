import { ThemeProvider } from '@mui/material'
import Presentation from '../../../../components/professional/AssociationPresentationPage/contents/Presentation'
import Krumbletheme from '../../../../assets/global'
import AssociationModelWithMinimumInformations from '../../../models/AssociationModelWithMinimumInformations'
import AssociationModelWithoutPhotos from '../../../models/AssociationModelWithoutPhotos'

export default {
   title: 'Professional/AssociationPresentationPage/Contents/Presentation',
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

export const WithDescriptionAndLogo = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithDescriptionAndLogo.args = {
   presentation: AssociationModelWithoutPhotos.presentation,
}
