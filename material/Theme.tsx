import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#42eda0"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    },
    background: {
      default: grey[100]
    }
  }
});

export default theme;
