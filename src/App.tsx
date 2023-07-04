import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";
import { globalStyles } from "./styles/global";
import { AuthProvider } from "./contexts/Auth";
import { StudentsContextProvider } from "./hooks/useStudent";
import { CollegesContextProvider } from "./hooks/useColleges";

function App() {
  globalStyles();

  return (
    <BrowserRouter>
      <AuthProvider>
        <CollegesContextProvider>
          <StudentsContextProvider>
            <Router />
          </StudentsContextProvider>
        </CollegesContextProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;