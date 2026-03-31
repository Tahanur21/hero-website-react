import { createBrowserRouter } from "react-router";
import LayOuts from "../components/LayOuts";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";
import Details from "../pages/semi-pages/Details";
import ErrorPage from "../components/ErrorPage";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const routes = createBrowserRouter([
  {
    path: "/",
    Component: LayOuts,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        Component: Home,
        loader: async () => {
          await delay(500);
          return fetch("/application.json");
        },
      },
      {
        path: "/app",
        Component: Apps,
        loader: async () => {
          await delay(500);
          return fetch("/application.json");
        },
      },
      {
        path: "/installation",
        Component: Installation,
        loader: async () => {
          await delay(500);
          return fetch("/application.json");
        },
      },
      {
        path: "/details",
        Component: Details,
        loader: async () => {
          await delay(500);
          return fetch("/application.json");
        },
      },
      {
        path: "/details/:id",
        Component: Details,
        loader: async () => {
          await delay(500);
          return fetch("/application.json");
        },
      },
    ],
  },
]);

export default routes;