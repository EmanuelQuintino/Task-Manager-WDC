import { PropsWithChildren, createContext, useState, useEffect } from "react";
import { API } from "../configs/api";
// import jwt_decode from "jwt-decode";
// import { toast } from "react-toastify";

export type SignInTypes = {
  email: string;
  password: string;
};

export type SignUpTypes = {
  name: string;
  email: string;
  password: string;
};

type AuthContextTypes = {
  signIn: (params: SignInTypes) => Promise<boolean | void>;
  signUp: (params: SignUpTypes) => Promise<boolean | void>;
  userAuth: { userID?: string };
  signOut: () => void;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextTypes>({} as AuthContextTypes);

export function AuthProvider({ children }: PropsWithChildren) {
  const [userAuth, setUserAuth] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function signIn({ email, password }: SignInTypes) {
    if (!email || !password) throw alert("Por favor informar email e senha!");

    setIsLoading(true);

    return API.post("/login", { email, password })
      .then((response) => {
        const userData = { userID: response.data.id };

        setUserAuth(userData);
        localStorage.setItem("@task_manager:user", JSON.stringify(userData));
        return true;
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Um erro inesperado ao fazer login!");
        }

        console.error("erro ao fazer login:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function signUp({ name, email, password }: SignUpTypes) {
    if (!name || !email || !password)
      throw alert("Por favor informar name, email e senha!");

    setIsLoading(true);

    return API.post("/user", { name, email, password })
      .then((response) => {
        alert(response?.data.message);
        return true;
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Um erro inesperado ao cadastrar usuário!");
        }

        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function signOut() {
    setUserAuth({});
    localStorage.removeItem("@task_manager:user");

    API.post("/logout").catch((error) => {
      console.error("erro ao fazer logout:", error);
    });
  }

  useEffect(() => {
    const userDataStorage = localStorage.getItem("@task_manager:user");

    if (userDataStorage) {
      const userData = JSON.parse(userDataStorage);

      API.get("/user")
        .then((response) => {
          if (userData.userID == response.data.id) setUserAuth(userData);
        })
        .catch((error) => {
          console.error(error);
          if (error.response?.status == 401) signOut();
        });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signUp, userAuth, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
