import { createTheme } from '@mui/material/styles';
import { blue, pink, red } from "@mui/material/colors";
const { palette } = createTheme();
const { augmentColor } = palette;


const Krumbletheme = createTheme({
    
    palette: {
      krumbleBlue: augmentColor({ color: { main: "#1B69E4" }}),

      krumbleGray: augmentColor ({
          color: {
            dark: '#232221',
            main: '#716F6D',
            light: '#C0C0C0'
          }       
      }),

      popYellow: augmentColor({ color: { main: "#FFC54D" } }),
      popRed: augmentColor({ color: { main: "#F94C66" } }),
      popGreen: augmentColor({ color: { main: "#53BF9D" } }),

      cream: augmentColor({ color: { main: "#F8F5F0" }}),
      white: augmentColor({ color: { main: "#FAFAF9" }}),
    },

    typography: {
      body1_medium: {
        lineHeight: 1.6,
        fontSize: 24,
        fontWeight: 500,
      },
    }
  });

export default Krumbletheme;
