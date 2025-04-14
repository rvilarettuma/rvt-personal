import { createTheme } from '@mui/material/styles';
import lightThemeOptions from './lightTheme'
import darkThemeOptions from './darkTheme'

const lightTheme = createTheme(lightThemeOptions);
const darkTheme = createTheme(darkThemeOptions);

const themeConfig = {
  light: lightTheme,
  dark: darkTheme,
};

export default themeConfig;