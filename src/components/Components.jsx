import { useState } from "react";
import { H2 } from "./Tags";
import logo from "../assets/logo-hadinalmusri.jpg";

export const Logo = ({ className }) => {
  return (
    <a href="/" className={`flex w-max gap-2 items-center md:min-w-fit ${className}`}>
      <img src={logo} alt="logo hadinalmusri" className="w-8 h-8 rounded-full" />
      <div className="flex flex-col gap-1">
        <div className="text-xl font-bold rounded leading-none bg-gradient-to-t from-emerald-800 to-green-400 bg-clip-text text-transparent">
          Hadin Al-Musri
        </div>
        <div className="text-xs text-gray-500 leading-none">Katomas Pagaden Subang</div>
      </div>
    </a>
  );
};
Logo.propTypes;

export const ListTitles = ({ title, children, className = "pl-4" }) => {
  return (
    <li id={title.split(" ").join("-")} className="pt-1 scroll-mt-16">
      <span className="font-medium">{title}</span>
      <ol className={`${className} list-[lower-alpha]`}>{children}</ol>
    </li>
  );
};
ListTitles.propTypes;

export const ListTitlesPar = ({ title, children, className }) => {
  return (
    <div id={title.split(" ").join("-")} className={`${className} scroll-mt-16 mb-5`}>
      <H2>{title}</H2>
      {children}
    </div>
  );
};
ListTitlesPar.propTypes;

export const ContentSideList = ({ listTitles }) => {
  const [active, setActive] = useState(null);
  return (
    <div className="mt-5 col-span-1 md:sticky top-20 order-1 md:order-2 rounded p-1">
      <div className="rounded p-2 border-b font-semibold text-left md:text-center capitalize">Konten</div>
      <div className="flex items-start flex-col gap-2 text-sm py-2 px-1">
        {listTitles.map((lt, i) => (
          <a
            key={i}
            href={`#${lt.title.split(" ").join("-")}`}
            onClick={() => setActive(i)}
            className={`${active === i ? "text-green-700" : ""} hover:text-green-700`}
          >
            {lt.title}
          </a>
        ))}
      </div>
    </div>
  );
};
ContentSideList.propTypes;

import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const socialsList = [
  { href: "https://www.youtube.com/@HadinAl-MusriKatomas", icon: <FaYoutube />, title: "youtube hadinalmusri" },
  {
    href: "https://www.instagram.com/hadinalmusrikatomas?igshid=YmMyMTA2M2Y%3D",
    icon: <FaInstagram />,
    title: "instagram hadinalmusri",
  },
  { href: "https://www.tiktok.com/@hadinalmusrikatomas", icon: <FaTiktok />, title: "tiktok hadinalmusri" },
];

export const Socials = ({ className }) => {
  return (
    <div className={`${className} mt-0 md:mt-5 md:w-full md:flex justify-center`}>
      <div className={`flex gap-3 p-2`}>
        {socialsList.map((s) => (
          <a
            key={s.title}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 sm:w-7 hover:scale-110 hover:text-green-600 transition-all duration-100"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  );
};
Socials.propTypes;
