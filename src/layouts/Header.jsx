import { NavLink } from "react-router-dom";
import { Logo } from "../components/Components";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Socials from "../components/Socials";

const menus = [
  { to: "/", text: "beranda" },
  { to: "/profil", text: "profil" },
  { to: "/tim-redaksi", text: "tim redaksi" },
  { to: "/info-iklan", text: "info iklan" },
  { to: "/kontak", text: "kontak" },
  { to: "/karir", text: "karir" },
];

const Header = () => {
  const [active, setActive] = useState(null);
  const [openNav, setOpenNav] = useState(false);

  const clickNav = (dt) => {
    setActive(dt);
    setOpenNav(false);
  };

  return (
    <header
      className={`z-50 border-b h-16 px-3 lg:px-16 sticky top-0 md:backdrop-blur bg-white md:bg-opacity-80 shadow shadow-green-100`}
    >
      <div className="flex justify-between items-center h-full">
        <Logo className={"mr-8 lg:mr-16"} />
        <button
          onClick={() => setOpenNav(!openNav)}
          className={`${openNav && "rotate-180"} block md:hidden transition-all duration-150`}
        >
          {openNav ? <FaTimes className="text-2xl text-green-600" /> : <FaBars className="text-2xl text-green-600" />}
        </button>
        <nav
          className={`w-full shadow-lg md:shadow-none md:h-auto ${
            openNav ? "h-[265px] p-3" : "h-0 p-0"
          }  overflow-hidden fixed bg-white md:bg-transparent md:block md:static top-16 left-0 right-0 md:p-0 rounded-b-lg md:rounded-none transition-all duration-200`}
        >
          <div className="flex flex-col md:flex-row gap-0 md:gap-3 lg:gap-4">
            {menus.map((m) => (
              <NavLink
                key={m.text}
                to={m.to}
                onClick={() => clickNav(m.text)}
                className={`${
                  active === m.text ? "text-green-600" : "text-gray-600"
                } hover:text-green-600 capitalize font-medium transition-all duration-150 border-b md:border-none block md:w-max p-2 md:p-0`}
              >
                {m.text}
              </NavLink>
            ))}
          </div>
        </nav>
        <Socials className={"hidden md:block"} />
      </div>
    </header>
  );
};

export default Header;
