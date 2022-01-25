import {createTheme} from '@mui/material/styles';
import {green, purple} from '@mui/material/colors';

const theme = createTheme({
  typography: {
    "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  },
  palette: {
    background: {
      default: '#000000'
    },
    primary: {
      main: "#2F92E1",
      contrastText: "#fff"
    },
    secondary: {
      main: '#123196',
      contrastText: "#fff"
    },
  }
});

export default theme;