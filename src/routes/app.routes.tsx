import { createBrowserRouter } from "react-router-dom";
import { App } from "../pages/App";
import { Page404 } from "../pages/Page404";
import { Home } from "../pages/Home";
import { Tasks } from "../pages/Tasks";
import { CreateTasks } from "../pages/CreateTasks";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/tasks", element: <Tasks /> },
      { path: "/create-task", element: <CreateTasks /> },
    ],
  },
]);
