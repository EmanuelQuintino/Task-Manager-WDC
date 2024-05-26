import { PropsWithChildren, createContext, useContext, useState, useEffect } from "react";
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
};

export const AuthContext = createContext<AuthContextTypes>({} as AuthContextTypes);

export function AuthProvider({ children }: PropsWithChildren) {
  const [userAuth, setUserAuth] = useState({});

  async function signIn({ email, password }: HandleLoginTypes) {
    try {
      if (!email || !password) throw alert("Por favor informar email e senha!");

      const response = await API.post("/login", { email, password });
      const cookieHeader = response.headers["set-cookie"];

      console.log(response);
      console.log(cookieHeader);

      setUserAuth({ userID: response.data.id });
      return alert(response?.data.message);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Um erro inesperado ao fazer login!");
        console.error(error);
      }
    }
  }

  function signOut() {
    const resp = confirm("Deseja sair da aplicação?");
    if (resp) {
      setUserAuth({});
    }
  }

  // useEffect(() => {
  //   try {
  //     const token = localStorage.getItem("@FoodExplorer:token");

  //     if (token) {
  //       const userDecodedToken = jwt_decode(token) as { exp: number };
  //       const expirationTime = userDecodedToken.exp * 1000;

  //       if (Date.now() > expirationTime) return handleLogout();

  //       API.defaults.headers.common["Authorization"] = token;
  //       setUserAuth(userDecodedToken);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     return handleLogout();
  //   }
  // }, []);

  return (
    <AuthContext.Provider value={{ signIn, userAuth, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
