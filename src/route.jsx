import { createBrowserRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
// import "./general.css";
import Home from "./pages/home/Home";
import Property from "./pages/property/Property";
import Relocation from "./pages/relocation/Relocation";
import VenuBooking from "./pages/venuBooking/VenuBooking";
import Contact from "./pages/contact/Contact";
import Rentals from "./pages/rentals/Rentals";
import Layout from "./components/layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/venue-booking",
        element: <VenuBooking />,
      },
      {
        path: "/property",
        element: <Property />,
      },
      {
        path: "/rentals",
        element: <Rentals />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/relocation",
        element: <Relocation />,
      },
    ],
  },
]);
