import { ThemeProvider } from '@mui/material'

import MainInformationsGrid from '../../../components/professional/AssociationPresentationPage/MainInformationsGrid'
import Krumbletheme from '../../../assets/global'

export default {
   title: 'Professional/AssociationPresentationPage/MainInformationsGrid',
   component: MainInformationsGrid,
   argTypes: {},
}
function Template(args) {
   return (
      <ThemeProvider theme={Krumbletheme}>
         {/* eslint-disable-next-line react/jsx-props-no-spreading */}
         <MainInformationsGrid {...args} />
      </ThemeProvider>
   )
}

const presentationComponent = (
   <div
      style={{
         width: '100%',
         height: '300px',
         backgroundColor: 'bisque',
         textAlign: 'center',
      }}
   >
      Présentation (Infos Générales)
   </div>
)
const carousselComponent = (
   <div
      style={{
         width: '100%',
         height: '300px',
         backgroundColor: 'black',
         color: 'white',
         textAlign: 'center',
      }}
   >
      Caroussel
   </div>
)

const projectComponent1 = (
   <div
      style={{
         width: '100%',
         height: '300px',
         backgroundColor: 'green',
         textAlign: 'center',
      }}
   >
      Projet 1
   </div>
)

const projectComponent2 = (
   <div
      style={{
         width: '100%',
         height: '300px',
         backgroundColor: 'green',
         textAlign: 'center',
      }}
   >
      Projet 2
   </div>
)

const children = [
   presentationComponent,
   carousselComponent,
   [projectComponent1, projectComponent2],
]
export const ColoredRepresentation = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ColoredRepresentation.args = {
   children: children,
}
