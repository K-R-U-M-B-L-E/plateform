import { ThemeProvider } from '@mui/material'
import ManagePage from '../../../pages/association/ManagePage'
import Krumbletheme from '../../../assets/global'
import AssociationModelWithoutPhotos from '../../models/AssociationModelWithoutPhotos'
import AssociationModelWithMinimumInformations from '../../models/AssociationModelWithMinimumInformations'
import AssociationModelWithMultipleProjects from '../../models/AssociationModelWithMultipleProjects'

export default {
   title: 'Association/ManagePage/Page',
   component: ManagePage,
   argTypes: { title: { control: 'text' }, page: { control: 'text' } },
}

function Template(args) {
   return (
      <ThemeProvider theme={Krumbletheme}>
         {/* eslint-disable-next-line react/jsx-props-no-spreading */}
         <ManagePage {...args} />
      </ThemeProvider>
   )
}

export const PageWithMinimumInformations = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PageWithMinimumInformations.args = {
   associationModel: AssociationModelWithMinimumInformations,
}

export const PageWithoutPhotos = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PageWithoutPhotos.args = {
   associationModel: AssociationModelWithoutPhotos,
}

export const PageWithProjects = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PageWithProjects.args = {
   associationModel: AssociationModelWithMultipleProjects,
}
