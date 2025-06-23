import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import lightThemeOptions from './lightTheme'
import darkThemeOptions from './darkTheme'

let lightTheme = createTheme(lightThemeOptions);
lightTheme = responsiveFontSizes(lightTheme)
let darkTheme = createTheme(darkThemeOptions);
darkTheme = responsiveFontSizes(darkTheme)

const themeConfig = {
  light: lightTheme,
  dark: darkTheme,
};

export default themeConfig;