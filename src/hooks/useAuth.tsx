import { useContext } from "react";
import { AuthContext } from "../contexts/useAuth";

export function useAuth() {
  return useContext(AuthContext);
}
