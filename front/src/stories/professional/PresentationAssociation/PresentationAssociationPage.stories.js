import { ThemeProvider } from '@mui/material'
import Krumbletheme from '../../../assets/global'
import AssociationPresentationPage from '../../../pages/professional/AssociationPresentationPage'
import AssociationModelWithMinimumInformations from '../../models/AssociationModelWithMinimumInformations'
import AssociationModelWithMultipleProjects from '../../models/AssociationModelWithMultipleProjects'

export default {
   title: 'Professional/AssociationPresentationPage/Page',
   component: AssociationPresentationPage,
   argTypes: { title: { control: 'text' }, page: { control: 'text' } },
}

function Template(args) {
   return (
      <ThemeProvider theme={Krumbletheme}>
         {/* eslint-disable-next-line react/jsx-props-no-spreading */}
         <AssociationPresentationPage {...args} />
      </ThemeProvider>
   )
}

export const PageWithMinimumInformations = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PageWithMinimumInformations.args = {
   associationModel: AssociationModelWithMinimumInformations,
}

export const PageWithProjectsAndPhotos = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PageWithProjectsAndPhotos.args = {
   associationModel: AssociationModelWithMultipleProjects,
}
