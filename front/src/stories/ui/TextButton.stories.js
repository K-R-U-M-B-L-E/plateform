import { ThemeProvider } from '@mui/material'
import TextButton from '../../components/ui/TextButton'
import Krumbletheme from '../../assets/global'

export default {
   title: 'Ui/Buttons/TextButton',
   component: TextButton,
   argTypes: {
      message: { control: 'text' },
   },
}

function Template(args) {
   return (
      <ThemeProvider theme={Krumbletheme}>
         {/* eslint-disable-next-line react/jsx-props-no-spreading */}
         <TextButton {...args} />
      </ThemeProvider>
   )
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
   color: '#FFC54D',
}
