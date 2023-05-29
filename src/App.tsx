import { ThemeProvider } from "styled-components";

import { Register } from "./pages/register";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Register />
    </ThemeProvider>
  );
}

export default App;