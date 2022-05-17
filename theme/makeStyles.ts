import { createMakeAndWithStyles } from 'tss-react';

import theme from './material-theme';

function useTheme() {
  return theme;
}

export const { makeStyles, useStyles } = createMakeAndWithStyles({ useTheme });
