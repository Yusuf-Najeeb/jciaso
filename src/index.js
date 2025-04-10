import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

import ContactUs from "./components/contactpage/ContactUs";
import InfoCollection from "./components/info-collection/InfoCollection";
import Events from "./components/events-page/AllEvents";
import Donate from "./components/donate/Donate";
import App from "./App";
import Home from "./components/homepage/LandingPage";
import Excos from "./components/excos/Excos";
import Article from "./components/article-page/Article";
import About from "./components/about-page/About";
import Gallery from "./components/gallery/Gallery";
import Individual from "./components/services/Individual";
import Business from "./components/services/Business";
import Community from "./components/services/Community";
import International from "./components/services/International";
import QLV from "./components/QLV/Landing";
import Attendees from "./components/qlvAttendees/Attendees";
import Error from "./components/Error";

const router = createBrowserRouter([
  { path: "/qlv2024", element: <QLV /> },
  { path: "/attendees", element: <Attendees /> },
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/excos", element: <Excos /> },
      { path: "/articles", element: <Article /> },
      { path: "/about", element: <About /> },
      { path: "/events", element: <Events /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/donate", element: <Donate /> },
      { path: "/join", element: <InfoCollection /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/individual", element: <Individual /> },
      { path: "/business", element: <Business /> },
      { path: "/community", element: <Community /> },
      { path: "/international", element: <International /> },
      { path: "/QLV", element: <QLV /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
