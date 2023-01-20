import { ThemeProvider } from '@mui/material'

import MainInformationsGrid from '../../../components/association/ManagePage/MainInformationsGrid'
import Krumbletheme from '../../../assets/global'
import Presentation from '../../../components/association/ManagePage/contents/Presentation'
import Caroussel from '../../../components/association/ManagePage/contents/Caroussel'

import AssociationModelWithPhotos from '../../models/AssociationModelWithPhotos'
import AssociationModelWithMinimumInformations from '../../models/AssociationModelWithMinimumInformations'
import AssociationModelWithProject from '../../models/AssociationModelWithProject'
import AssociationWithMultipleProjects from '../../models/AssociationModelWithMultipleProjects'
import Project from '../../../components/association/ManagePage/contents/Project'

export default {
   title: 'Association/ManagePage/MainInformationsGrid',
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
   <Presentation
      presentation={AssociationModelWithMinimumInformations.presentation}
   />
)
const carousselComponent = (
   <Caroussel photos={AssociationModelWithMinimumInformations.photos} />
)
const children = [presentationComponent, carousselComponent, []]
export const MinimumInformationGiven = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MinimumInformationGiven.args = {
   children: children,
}

const presentationComponent2 = (
   <Presentation presentation={AssociationModelWithPhotos.presentation} />
)
const carousselComponentWithPhotos = (
   <Caroussel photos={AssociationModelWithPhotos.photos} />
)
const childrenWithPhotos = [
   presentationComponent2,
   carousselComponentWithPhotos,
   [],
]
export const WithPhotos = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithPhotos.args = {
   children: childrenWithPhotos,
}

const projectComponent = (
   <Project project={AssociationModelWithProject.projects[0]} />
)
const childrenWithProject = [
   presentationComponent2,
   carousselComponentWithPhotos,
   [projectComponent],
]
export const WithProject = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithProject.args = {
   children: childrenWithProject,
}

const projectComponent2 = (
   <Project project={AssociationWithMultipleProjects.projects[0]} />
)
const projectComponent3 = (
   <Project project={AssociationWithMultipleProjects.projects[1]} />
)
const childrenWithMultipleProjects = [
   presentationComponent2,
   carousselComponentWithPhotos,
   [projectComponent2, projectComponent3],
]
export const WithMultipleProjects = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithMultipleProjects.args = {
   children: childrenWithMultipleProjects,
}
