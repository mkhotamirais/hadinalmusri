import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./layouts/Layout.jsx";
import Beranda from "./pages/Beranda.jsx";
import InfoIklan from "./pages/InfoIklan";
import Karir from "./pages/Karir";
import Kontak from "./pages/Kontak";
import Profil from "./pages/Profil";
import TimRedaksi from "./pages/TimRedaksi";
import Articles from "./pages/articles/Articles.jsx";
import ArticleMediaSiber from "./pages/articles/ArticleMediaSiber.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Beranda />} />
      <Route path="/info-iklan" element={<InfoIklan />} />
      <Route path="/karir" element={<Karir />} />
      <Route path="/kontak" element={<Kontak />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/tim-redaksi" element={<TimRedaksi />} />
      <Route path="/articles" element={<Articles />}>
        <Route path="pedoman-media-siber" element={<ArticleMediaSiber />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
