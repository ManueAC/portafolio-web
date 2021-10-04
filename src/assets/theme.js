import { createMuiTheme } from '@material-ui/core/styles';
import * as COLORS from './colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY_MAIN,
    },
    secondary: {
      main: COLORS.SECONDARY_MAIN,
    },
    error: {
      main: COLORS.ERROR_MAIN,
    },
    common: {
      black: COLORS.COMMON_BLACK,
    },
  },
  props: {
    MuiButton: {
      variant: 'contained',
    },
    MuiTextField: {
      variant: 'outlined',
      size: 'small',
      fullWidth: true,
    },
    MuiDialog: {
      fullWidth: true,
    },
    MuiCheckbox: {
      color: 'primary',
    },
    MuiLinearProgress: {
      variant: 'determinate',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
      outlined: {
        borderWidth: '2px !important',
      },
    },
    MuiTableCell: {
      head: {
        fontWeight: 'bold',
        fontSize: 20,
      },
      body: {
        fontSize: 16,
      },
    },
    MuiLinearProgress: {
      root: {
        height: 10,
        borderRadius: 5,
      },
      bar: {
        borderRadius: 5,
        backgroundColor: '#1a90ff',
      },
    },
    MuiDialogActions: {
      root: {
        padding: '12px 24px',
      },
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Sans-serif'].join(','),
  },
});
