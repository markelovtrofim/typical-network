import {createTheme} from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      "color": "#FFFFFF",
    },
    "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
  },
  palette: {
    primary: {
      main: "#2F92E1",
      contrastText: "#fff"
    },
    secondary: {
      main: '#545B69',
      contrastText: "#fff"
    },
  }
});

export default theme;