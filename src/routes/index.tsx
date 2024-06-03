import { RouterProvider } from "react-router-dom";
import { appRouter } from "./app.routes";
import { authRouter } from "./auth.routes";
import { useAuth } from "../hooks/useAuth";

export function AppRoutes() {
  const { userAuth } = useAuth();
  const router = userAuth.userID ? appRouter : authRouter;
  return <RouterProvider router={router} />;
}
