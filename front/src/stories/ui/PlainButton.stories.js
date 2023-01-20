import { ThemeProvider } from '@mui/material'
import PlainButton from '../../components/ui/PlainButton'
import Krumbletheme from '../../assets/global'

export default {
   title: 'Ui/Buttons/PlainButton',
   component: PlainButton,
   argTypes: {
      message: { control: 'text' },
      color: { control: 'color' },
   },
}

function Template(args) {
   return (
      <ThemeProvider theme={Krumbletheme}>
         {/* eslint-disable-next-line react/jsx-props-no-spreading */}
         <PlainButton {...args} />
      </ThemeProvider>
   )
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
   color: '#FFC54D',
}
