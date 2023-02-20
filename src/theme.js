import { createTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500]
    },
    secondary: {
      main: indigo[800],
      contrastText: indigo[50]
    }
  }
});
