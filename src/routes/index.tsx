import { RouterProvider } from "react-router-dom";
import { appRouter } from "./app.routes";
import { authRouter } from "./auth.routes";

const userIsAuth = false;

export function AppRoutes() {
  return <RouterProvider router={userIsAuth ? appRouter : authRouter} />;
}
