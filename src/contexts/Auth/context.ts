import { createContext } from "use-context-selector";

import { LoginProps } from "../../api/authenticator";

interface AuthContextData {
  user: any | null;
  loading: boolean;
  signOut: () => void;
  loadingUser: boolean;
  signIn: (user: LoginProps) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default AuthContext;
