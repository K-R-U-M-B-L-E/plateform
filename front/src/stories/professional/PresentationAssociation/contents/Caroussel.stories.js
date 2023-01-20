import { ThemeProvider } from '@mui/material'
import Caroussel from '../../../../components/professional/AssociationPresentationPage/contents/Caroussel'
import Krumbletheme from '../../../../assets/global'
import AssociationModelWithPhotos from '../../../models/AssociationModelWithPhotos'

export default {
   title: 'Professional/AssociationPresentationPage/Contents/Caroussel',
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

export const WithoutPhotosNothingToBePrint = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithoutPhotosNothingToBePrint.args = {
   photos: null,
}

export const With5Photos = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
With5Photos.args = {
   photos: AssociationModelWithPhotos.photos,
}

const AssociationModelWith4Photos = JSON.parse(
   JSON.stringify(AssociationModelWithPhotos)
)

AssociationModelWith4Photos.photos.splice(-1)

export const With4Photos = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
With4Photos.args = {
   photos: AssociationModelWith4Photos.photos,
}

const AssociationModelWith3Photos = JSON.parse(
   JSON.stringify(AssociationModelWith4Photos)
)

AssociationModelWith3Photos.photos.splice(-1)

export const With3Photos = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
With3Photos.args = {
   photos: AssociationModelWith3Photos.photos,
}

const AssociationModelWith2Photos = JSON.parse(
   JSON.stringify(AssociationModelWith3Photos)
)

AssociationModelWith2Photos.photos.splice(-1)
export const With2Photos = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
With2Photos.args = {
   photos: AssociationModelWith2Photos.photos,
}

const AssociationModelWith1Photo = JSON.parse(
   JSON.stringify(AssociationModelWith2Photos)
)

AssociationModelWith1Photo.photos.splice(-1)
export const With1Photo = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
With1Photo.args = {
   photos: AssociationModelWith1Photo.photos,
}
