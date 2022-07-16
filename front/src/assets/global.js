import { createTheme } from '@mui/material/styles';
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const Krumbletheme = createTheme({
    palette: {
      krumbleBlue: createColor('#1B69E4'),
      darkGray: createColor('#232221'),
      gray: createColor('#716F6D'),
      lightGray: createColor('#C0C0C0'),
      beige: createColor('#CEC6BA'),
      cream: createColor('#F8F5F0'),
      white: createColor('#FAFAF9'),
      green: createColor("#53BF9D"),
      yellow: createColor("#FFC54D"),
      red: createColor("#F94C66")
    },
  });

export default Krumbletheme;
