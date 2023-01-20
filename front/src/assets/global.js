import { createTheme } from '@mui/material/styles'

const { palette } = createTheme()
const { augmentColor } = palette

const Krumbletheme = createTheme({
   palette: {
      background: {
         default: '#F8F5F0',
      },

      krumbleBlue: augmentColor({ color: { main: '#1B69E4' } }),

      krumbleGray: augmentColor({
         color: {
            dark: '#232221',
            main: '#716F6D',
            light: '#C0C0C0',
            gold: '#CEC6BA',
         },
      }),

      popYellow: augmentColor({ color: { main: '#FFC54D' } }),
      popRed: augmentColor({ color: { main: '#F94C66' } }),
      popGreen: augmentColor({ color: { main: '#53BF9D' } }),

      cream: augmentColor({ color: { main: '#F8F5F1' } }),
      white: augmentColor({ color: { main: '#FAFAF9' } }),
   },

   typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      categoryTitle: {
         fontSize: 32,
         color: 'black',
         padding: 0,
         margin: 0,
         fontWeight: '600',
         fontFamily: ['Inter', 'sans-serif'].join(','),
      },
      categoryTitleBlue: {
         fontSize: 32,
         color: '#1B69E4',
         fontWeight: '600',
         padding: 0,
         margin: 0,
         fontFamily: ['Inter', 'sans-serif'].join(','),
      },
      cardTitle: {
         fontSize: 18,
         color: 'black',
         fontFamily: ['Inter', 'sans-serif'].join(','),
      },
      cardSubTitle: {
         fontSize: 18,
         color: 'black',
         fontWeight: 'bold',
         fontFamily: ['Inter', 'sans-serif'].join(','),
      },
      body1: {
         fontSize: 14,
         color: 'black',
         lineHeight: '19px',
         fontFamily: ['Inter', 'sans-serif'].join(','),
      },
      body2: {
         fontSize: 14,
         color: '#1B69E4',
         lineHeight: '19px',
         fontFamily: ['Inter', 'sans-serif'].join(','),
      },
      title: {
         fontSize: 22,
         fontWeight: 500,
         color: 'black',
         fontFamily: ['Inter', 'sans-serif'].join(','),
      },
      subTitle: {
         fontSize: 22,
         fontWeight: 200,
         color: 'black',
         fontFamily: ['Inter', 'sans-serif'].join(','),
      },
      fieldLabel: {
         fontSize: 16,
         fontWeight: 300,
         color: '#716F6D',
         fontFamily: ['Inter', 'sans-serif'].join(','),
      },
   },
})

export default Krumbletheme
