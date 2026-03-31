import { createBrowserRouter } from "react-router";
import LayOuts from "../components/LayOuts";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import Details from "../pages/semi-pages/Details";
import ErrorPage from "../components/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    Component: LayOuts,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        Component: Home,
        loader: async () => fetch("../../public/application.json"),
      },
      {
        path: "/app",
        Component: Apps,
        loader: async () => fetch("../../public/application.json"),
      },
      {
        path: "/installation",
        Component: Installation,
        loader: async () => fetch("../../public/application.json"),
      },
      {
        path: "/details",
        Component: Details,
        loader: async () => fetch("../../public/application.json"),
      },
      {
        path: "/details/:id",
        Component: Details,
        loader: async () => fetch("../../public/application.json"),
      },
    ],
  },
]);

export default routes;
