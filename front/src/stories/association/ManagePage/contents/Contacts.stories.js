import { ThemeProvider } from '@mui/material'
import Contacts from '../../../../components/association/ManagePage/contents/Contacts'
import Krumbletheme from '../../../../assets/global'

export default {
   title: 'Association/ManagePage/Contents/Contacts',
   component: Contacts,
   argTypes: {},
}

function Template(args) {
   return (
      <ThemeProvider theme={Krumbletheme}>
         {/* eslint-disable-next-line react/jsx-props-no-spreading */}
         <Contacts {...args} />
      </ThemeProvider>
   )
}

const primaryContact = {
   phoneNumber: '06 12 34 56 78',
   firstMail: null,
   secondMail: null,
   personnalInformations: null,
}

const secondaryContact = {
   website: null,
   facebook: null,
   instagram: null,
}

export const JustPhoneNumberGiven = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
JustPhoneNumberGiven.args = {
   primaryContact: primaryContact,
   secondaryContact: secondaryContact,
}

const allPrimaryContact = {
   phoneNumber: '06 12 34 56 78',
   firstMail: 'ab@gmail.com',
   secondMail: 'ab@gmail.com',
   personnalInformations: {
      firstName: 'Jean',
      lastName: 'Dupont',
      role: 'président',
   },
}

const allSecondaryContact = {
   website: 'www.krumble.com',
   facebook: 'krumble.fb',
   instagram: 'krumble.insta',
}

export const AllContactsGiven = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
AllContactsGiven.args = {
   primaryContact: allPrimaryContact,
   secondaryContact: allSecondaryContact,
}
