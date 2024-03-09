import { Outlet, ScrollRestoration } from "react-router-dom";
// import Carousel from "../components/Carousel";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-16 min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};

export default Layout;
