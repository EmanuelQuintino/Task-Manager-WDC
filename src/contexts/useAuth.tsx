import { PropsWithChildren, createContext, useState, useEffect } from "react";
import { API } from "../configs/api";
// import jwt_decode from "jwt-decode";
// import { toast } from "react-toastify";

export type HandleLoginTypes = {
  email: string;
  password: string;
};

type AuthContextTypes = {
  signIn: (params: HandleLoginTypes) => void;
  userAuth: { userID?: string };
  signOut: () => void;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextTypes>({} as AuthContextTypes);

export function AuthProvider({ children }: PropsWithChildren) {
  const [userAuth, setUserAuth] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  function signIn({ email, password }: HandleLoginTypes) {
    if (!email || !password) throw alert("Por favor informar email e senha!");

    setIsLoading(true);

    API.post("/login", { email, password })
      .then((response) => {
        const cookieHeader = response.headers["set-cookie"];

        console.log(response);
        console.log(cookieHeader);

        const userData = { userID: response.data.id };

        setUserAuth(userData);
        localStorage.setItem("@task_manager:user", JSON.stringify(userData));
        return alert(response?.data.message);
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Um erro inesperado ao fazer login!");
        }

        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function signOut() {
    const resp = confirm("Deseja sair da aplicação?");
    if (resp) {
      setUserAuth({});
      localStorage.removeItem("@task_manager:user");
    }
  }

  useEffect(() => {
    try {
      const userDataStorage = localStorage.getItem("@task_manager:user");

      if (userDataStorage) {
        const userData = JSON.parse(userDataStorage);
        setUserAuth(userData);
      }
    } catch (error) {
      console.error(error);
      return signOut();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, userAuth, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
