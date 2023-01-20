import { ThemeProvider } from '@mui/material'
import Caroussel from '../../../../components/association/ManagePage/contents/Caroussel'
import Krumbletheme from '../../../../assets/global'
import AssociationModelWithPhotos from '../../../models/AssociationModelWithPhotos'

export default {
   title: 'Association/ManagePage/Contents/Caroussel',
   component: Caroussel,
   argTypes: {},
}

function Template(args) {
   return (
      <ThemeProvider theme={Krumbletheme}>
         {/* eslint-disable-next-line react/jsx-props-no-spreading */}
         <Caroussel {...args} />
      </ThemeProvider>
   )
}

export const WithPhotos = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithPhotos.args = {
   photos: AssociationModelWithPhotos.photos,
}

export const WithoutPhotos = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithoutPhotos.args = {
   photos: null,
}
