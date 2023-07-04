import { createContext } from "use-context-selector";

import { LoginProps } from "../../api/authenticator";
import { StudentProps } from "../../api/student";

interface AuthContextData {
  user: any | null;
  loading: boolean;
  signOut: () => void;
  loadingUser: boolean;
  setUser: (value: StudentProps) => void;
  signIn: (user: LoginProps) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;
