import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";
import { globalStyles } from "./styles/global";
import { AuthProvider } from "./contexts/Auth";
import { StudentsContextProvider } from "./hooks/useStudent";
import { CollegesContextProvider } from "./hooks/useColleges";
import { PretensesContextProvider } from "./hooks/usePretense";

function App() {
  globalStyles();

  return (
    <BrowserRouter>
      <AuthProvider>
        <CollegesContextProvider>
          <StudentsContextProvider>
            <PretensesContextProvider>
              <Router />
            </PretensesContextProvider>
          </StudentsContextProvider>
        </CollegesContextProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;