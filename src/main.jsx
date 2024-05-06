import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import InfoIklan from "./pages/mainPages/InfoIklan.jsx";
import Karir from "./pages/mainPages/Karir.jsx";
import Kontak from "./pages/mainPages/Kontak.jsx";
import Profil from "./pages/mainPages/Profil.jsx";
import TimRedaksi from "./pages/mainPages/TimRedaksi.jsx";
import Articles from "./pages/articles/Articles.jsx";
import ArticleMediaSiber from "./pages/articles/ArticleMediaSiber.jsx";
import Admin from "./pages/admin/Admin.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/info-iklan" element={<InfoIklan />} />
        <Route path="/karir" element={<Karir />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/tim-redaksi" element={<TimRedaksi />} />
        <Route path="/articles" element={<Articles />}>
          <Route path="pedoman-media-siber" element={<ArticleMediaSiber />} />
        </Route>
      </Route>
      <Route path="/admin" element={<Admin />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
