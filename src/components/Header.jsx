import { Logo } from "./Components";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { FaBars, FaSun, FaXmark } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { removeOpenNav, toggleDark, toggleOpenNav } from "../app/features/basicSlice";
import { FaMoon } from "react-icons/fa";
import usePath from "../hooks/usePath";

// header components
const headerMenus = [
  { href: "", text: "beranda" },
  { href: "profil", text: "profil" },
  { href: "tim-redaksi", text: "tim redaksi" },
  { href: "info-iklan", text: "info iklan" },
  { href: "kontak", text: "kontak" },
  { href: "karir", text: "karir" },
];

const Header = () => {
  const { dark } = useSelector((state) => state.basic);
  return (
    <>
      <header
        className={`z-50 border-b h-16 px-3 lg:px-16 sticky top-0 ${
          dark ? "bg-slate-800" : "bg-white"
        } shadow shadow-green-100`}
      >
        <div className="flex justify-between items-center h-full">
          <Logo className={"mr-8 lg:mr-16"} />
          <NavMain />
          <div className="flex items-center gap-4 text-xl">
            <DarkMode />
            <NavBtn />
          </div>
        </div>
      </header>
      <NavCollapse />
    </>
  );
};
Header.propTypes;

export default Header;

const NavBtn = () => {
  const { openNav } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(toggleOpenNav())}
      className={`block md:hidden ${openNav ? "rotate-180" : ""} text-green-600 transition-all duration-150`}
    >
      {openNav ? <FaXmark /> : <FaBars />}
    </button>
  );
};

const NavContent = ({ className }) => {
  const [active, setActive] = useState("");
  const { path } = usePath();

  useEffect(() => {
    setActive(path[1]);
  }, [path]);

  const handleActiveNav = (data) => {
    setActive(data);
  };

  return headerMenus.map((item, i) => (
    <NavLink
      to={`/${item.href}`}
      key={i}
      onClick={() => handleActiveNav(item.href)}
      className={`${
        active === item.href ? "text-green-600" : ""
      } ${className} hover:text-green-600 capitalize  transition-all duration-150`}
    >
      {item.text}
    </NavLink>
  ));
};
NavContent.propTypes;

const NavMain = () => {
  return (
    <div className={`w-full hidden md:block`}>
      <div className="flex gap-5">
        <NavContent />
      </div>
    </div>
  );
};

const NavCollapse = () => {
  const { openNav } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(removeOpenNav())}
      className={`${
        openNav ? "scale-100" : "scale-y-0"
      } z-50 origin-top block md:hidden p-3 border-b rounded-b-lg shadow fixed top-16 w-full bg-inherit transition-all duration-150`}
    >
      <div className={`flex flex-col`}>
        <NavContent className={`py-2 border-b`} />
      </div>
    </div>
  );
};

const DarkMode = () => {
  const { dark } = useSelector((state) => state.basic);
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(toggleDark())} className="w-4 h-4 text-base overflow-hidden">
      <FaMoon className={`${dark ? "-translate-y-full" : "translate-y-0"} transition-all duration-300`} />
      <FaSun className={`${dark ? "-translate-y-full" : "translate-y-0"} transition-all duration-300`} />
    </button>
  );
};
