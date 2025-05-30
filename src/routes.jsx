import { createBrowserRouter } from "react-router";
import Layout from "../src/Layout/Layout";
import Home from "../src/pages/Home";
import About from "../src/pages/AboutUs";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Solutions from "./pages/Solutions";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "solutions",
        element: <Solutions />,
      },
    ],
  },
]);

export default routes;
