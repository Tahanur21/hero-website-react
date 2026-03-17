import { createBrowserRouter } from "react-router";
import LayOuts from "../components/LayOuts";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import Installation from "../pages/Installation";

const routes = createBrowserRouter([
  {
    path: '/',
    Component : LayOuts,
    children: [
        {
            path: '/',
            Component: Home,
            loader: async () => fetch('../../public/application.json'),
        },
        {
          path: '/app',
          Component: Apps,
        },
        {
          path: '/installation',
          Component: Installation,
        },

    ]
  }
])

export default routes;