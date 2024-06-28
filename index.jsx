import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, useRouteError } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import CountryDetail from "./components/CountryDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/contact',
            element: <div>Contact us</div>
        },
        {
            path: '/:country',
            element: <CountryDetail />
        },
    ]
  }
]);

const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
