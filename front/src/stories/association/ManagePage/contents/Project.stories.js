import { ThemeProvider } from '@mui/material'
import Project from '../../../../components/association/ManagePage/contents/Project'
import Krumbletheme from '../../../../assets/global'
import AssociationModelWithProject from '../../../models/AssociationModelWithProject'

export default {
   title: 'Association/ManagePage/Contents/Project',
   component: Project,
   argTypes: {},
}

function Template(args) {
   return (
      <ThemeProvider theme={Krumbletheme}>
         {/* eslint-disable-next-line react/jsx-props-no-spreading */}
         <Project {...args} />
      </ThemeProvider>
   )
}

export const WithMoneyNeeds = Template.bind({})
WithMoneyNeeds.args = {
   project: AssociationModelWithProject.projects[0],
}

const AssociationModelWithProjectWithTwoNeeds = JSON.parse(
   JSON.stringify(AssociationModelWithProject)
)
AssociationModelWithProjectWithTwoNeeds.projects[0].needs.material.isNeeded = true
AssociationModelWithProjectWithTwoNeeds.projects[0].needs.material.description =
   'Deux chaises, une table, un ordinateur, un écran'
export const WithMoneyAndMaterialNeeds = Template.bind({})
WithMoneyAndMaterialNeeds.args = {
   project: AssociationModelWithProjectWithTwoNeeds.projects[0],
}

const AssociationModelWithProjectWithAllNeeds = JSON.parse(
   JSON.stringify(AssociationModelWithProjectWithTwoNeeds)
)
AssociationModelWithProjectWithAllNeeds.projects[0].needs.people.isNeeded = true
AssociationModelWithProjectWithAllNeeds.projects[0].needs.people.description =
   'Deux intervenants pour jury, deux conférenciers'
export const WithAllNeeds = Template.bind({})
WithAllNeeds.args = {
   project: AssociationModelWithProjectWithAllNeeds.projects[0],
}
