import { createTheme } from '@mui/material/styles';
import { green, lightBlue } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: green[500]
        },
        secondary: {
            main: lightBlue[800],
            midNightBlue: "#003366"
        }
    }
});
