import { pink } from '@mui/material/colors';

const lightStyle = {
  primary: {
    main: '#6a6ecd',
    light: '#f3f3f3',
  },
  secondary: {
    main: '#6a6ecd',
  },
  alert: {
    main: pink[500],
  },
  text: {
    primary: 'rgba(0,0,0, 1)',
    secondary: '#f3f3f3',
  },
};
const darkStyle = {
  primary: {
    main: '#455a64',
    light: 'rgb(106, 123, 131)',
    dark: 'rgb(48,62,70)',
  },
  secondary: {
    main: '#00bcd4',
    light: 'rgb(51,201,220)',
    dark: 'rgb(0,131,148)',
    contrastText: 'rgba(0,0,0,0.87)',
  },
  error: {
    main: '#f44336',
    light: '#e57373',
    dark: '#d32f2f',
    contrastText: '#fff',
  },
  divider: 'rgba(255,255,255,0.12)',
  background: {
    default: '#303030',
    paper: '#424242',
  },
  text: {
    primary: '#fff',
    secondary: '#00bcd4',
    disabled: 'rgba(255,255,255,0.5)',
    hint: 'rgba(255,255,255,0.7)',
  },
};

export const creaThemeMode = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light' ? lightStyle : darkStyle),
  },
});
