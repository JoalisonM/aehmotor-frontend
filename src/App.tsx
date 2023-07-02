import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";
import { globalStyles } from "./styles/global";
import { AuthProvider } from "./contexts/Auth";
import { StudentsContextProvider } from "./hooks/useStudent";

function App() {
  globalStyles();

  return (
    <BrowserRouter>
      <AuthProvider>
        <StudentsContextProvider>
          <Router />
        </StudentsContextProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;