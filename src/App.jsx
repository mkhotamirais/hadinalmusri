import { Outlet, ScrollRestoration } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeOpenNav } from "./app/features/basicSlice";
import { Helmet } from "react-helmet";
import usePath from "./hooks/usePath";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { dark, openNav } = useSelector((state) => state.basic);
  const { path } = usePath();
  let title = path.length && path[1].split("-").join(" ");

  // const toCapitalize = (str) => {
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // };
  const toCapitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  const dispatch = useDispatch();
  const handleClick = () => {
    if (openNav) dispatch(removeOpenNav());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {});
  }, []);

  return (
    <div className={`${dark ? "bg-slate-800 text-white" : "bg-white"} text-gray-700 transition-all duration-100`}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{toCapitalize(title)} Hadin Al-Musri`</title>
        <link rel="canonical" href="http://hadinalmusri.com" />
      </Helmet>
      <Header />
      <main onClick={handleClick} className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
      <Toaster />
    </div>
  );
};

export default App;
