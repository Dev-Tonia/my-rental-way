import { Navigate, createBrowserRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
// import "./general.css";
import Home from "./pages/home/Home";
import Property from "./pages/property/Property";
import Relocation from "./pages/relocation/Relocation";
import VenueBooking from "./pages/venueBooking/VenueBooking";
import Contact from "./pages/contact/Contact";
import Rentals from "./pages/rentals/Rentals";
import Layout from "./components/layout/layout";
import Tents from "./pages/rentalsTab/Tents";
import AllProducts from "./pages/rentalsTab/AllProduct";
import Chair from "./pages/rentalsTab/Chair";
import Lighting from "./pages/rentalsTab/Lighting";
import Table from "./pages/rentalsTab/Table";
import Centerpiece from "./pages/rentalsTab/Centerpiece";
import Accessories from "./pages/rentalsTab/Accessories";
import Inflatable from "./pages/rentalsTab/Inflatable";
import AboutUs from "./pages/aboutUs/AboutUs";
import TermsAndCondition from "./pages/termsAndCondition/TermsAndCondition";

import { lazy } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/venue-booking",
        element: <VenueBooking />,
      },
      {
        path: "/property",
        element: <Property />,
      },
      {
        path: "/rentals",
        element: <Rentals />,
        children: [
          { index: true, element: <Navigate to="all-products" /> },
          {
            path: "all-products",
            element: <AllProducts />,
          },

          {
            path: "tents",
            element: <Tents />,
          },
          {
            path: "chair",
            element: <Chair />,
          },
          {
            path: "lighting",
            element: <Lighting />,
          },
          {
            path: "table",
            element: <Table />,
          },
          {
            path: "centerpiece",
            element: <Centerpiece />,
          },
          {
            path: "accessories",
            element: <Accessories />,
          },

          {
            path: "inflatable",
            element: <Inflatable />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/relocation",
        element: <Relocation />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndCondition />,
      },
    ],
  },
]);
