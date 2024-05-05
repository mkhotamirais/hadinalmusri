import { Outlet, ScrollRestoration } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeOpenNav } from "./app/features/basicSlice";

const App = () => {
  const { dark, openNav } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (openNav) dispatch(removeOpenNav());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {});
  }, []);

  return (
    <div className={`${dark ? "bg-slate-800 text-white" : "bg-white"} text-gray-700 transition-all duration-100`}>
      <Header />
      <main onClick={handleClick} className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default App;
