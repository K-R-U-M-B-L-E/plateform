import { ThemeProvider } from '@mui/material'
import SecondaryInformationsGrid from '../../../components/professional/AssociationPresentationPage/SecondaryInformationsGrid'
import Krumbletheme from '../../../assets/global'

export default {
   title: 'Professional/AssociationPresentationPage/SecondaryInformationsGrid',
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

const HelpExchangesComponent = (
   <div
      style={{
         width: '100%',
         height: '300px',
         backgroundColor: 'bisque',
         textAlign: 'center',
      }}
   >
      Explication pour garantir le win-win du sponsor...
   </div>
)
const children = HelpExchangesComponent
export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
   children: children,
}
