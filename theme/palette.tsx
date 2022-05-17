import { colors } from '@mui/material';

const white = '#FFFFFF';
const black = '#2e3742';

export default {
  black,
  white,
  primary: {
    contrastText: white,
    dark: '#00385d',
    main: '#005086',
    light: '#33739e',
  },
  secondary: {
    contrastText: '#000000',
    dark: '#0d7ea3',
    main: '#13B5EA',
    light: '#42c3ee',
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    link: colors.blue[700],
    primary: '#333333',
    secondary: '#686868',
    disabled: '#686868',
  },
  background: {
    // default: '#F4F6F8',
    default: '#F9FAFC',
    paper: white,
  },
  icon: '#4a494b',
  divider: colors.grey[200],
  cardTitle: '#2e3742',
  chartTitle: '#34495E',
  primaryLighter: '#EEF8FF',
  highlighter: '#F8FBFF',
  money: colors.blue[700],
  stepperDefault: '#7135C6',
  rowHighlight: '#FAFAFA',
};
