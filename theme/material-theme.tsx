import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';

import palette from './palette';
import typography from './typography';

const theme = createTheme({
  palette,
  typography,
  // typography: {
  //   fontFamily: 'Hind, sans-serif',
  //   fontSize: 13,
  //   fontWeightLight: 300,
  //   fontWeightRegular: 400,
  //   fontWeightMedium: 500,
  // },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        action: {
          marginRight: '0px',
          marginTop: '0px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        labelIcon: {
          minHeight: '0px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "'Lato', sans-serif",
        },
        label: {
          fontFamily: "'Lato', sans-serif",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          // padding: '10px 14px',
          // height: '35px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          // padding: '10px 14px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow:
            '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
        },
        root: {
          borderRadius: '6px',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: palette.icon,
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
          },
        },
        sizeSmall: {
          height: 35,
          width: 35,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
        rounded: { borderRadius: 10 },
        elevation1: {
          boxShadow: '0 10px 40px 10px rgb(140 152 164 / 18%)',
        },
        elevation24: {
          boxShadow: '0 10px 40px 10px rgb(140 152 164 / 18%)',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 10,
          padding: '2px 8px',
          fontFamily: "'Lato', sans-serif",
          background: colors.blueGrey[900],
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: { color: '#878787' },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${palette.divider}`,
          padding: '8px',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: colors.grey[50],
          padding: '8px',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&$selected': {
            backgroundColor: palette.background.default,
          },
          '&$hover': {
            '&:hover': {
              backgroundColor: palette.background.default,
            },
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: 8,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        },
      },
    },
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  radius: 10,
  tableHeader: {
    fontWeight: 'bold',
    color: palette.primary.main,
    fontSize: '12px',
    width: 'auto',
    borderTop: 'solid 1px rgba(64, 23, 123, 0.1)',
    borderBottom: 'solid 1px rgba(64, 23, 123, 0.1)',
    background: palette.primaryLighter,
  } as React.CSSProperties,
  dtPaper: {
    borderRadius: 10,
    // boxShadow: '0 2px 5px 2px rgb(140 152 164 / 20%)',
    boxShadow: '0 10px 40px 10px rgb(140 152 164 / 18%)',
  },
  size: {
    avatarIcon: 'sm',
    emptyChartIcon: '2x',
    emptyChartFPIcon: '3x',
    buttonIcon: '15px',
    chartHeight: '280',
  },
  boxShadow: '0 10px 40px 10px rgb(140 152 164 / 18%)',

  paperShadow: '0 2px 5px 2px rgb(140 152 164 / 18%)',

  iconSize: '1.2rem',
});

export default theme;
