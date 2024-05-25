import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "../pages/SignIn";

export const authRouter = createBrowserRouter([
  { path: "/", element: <SignIn /> },
  { path: "/signup", element: <h1>Cadastro</h1> },
]);
