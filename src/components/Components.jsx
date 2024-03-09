import { useState } from "react";
import { H2 } from "./Tags";

export const Logo = ({ className }) => {
  return (
    <a href="/" className={`flex flex-col w-max md:min-w-fit justify-start items-start ${className}`}>
      <span className="text-xl sm:text-2xl font-bold rounded leading-none bg-gradient-to-t from-emerald-800 to-green-400 bg-clip-text text-transparent">
        Hadin Al-Musri
      </span>
      <span className="text-xs sm:text-sm text-gray-500 leading-none">Katomas Pagaden Subang</span>
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
    <div id={title.split(" ").join("-")} className={`${className} pt-1 scroll-mt-16`}>
      <H2>{title}</H2>
      {children}
    </div>
  );
};
ListTitlesPar.propTypes;

export const ContentSideList = ({ listTitles }) => {
  const [active, setActive] = useState(null);
  return (
    <div className="mt-5 col-span-1 md:sticky top-20 order-1 md:order-2 rounded p-1 text-gray-600">
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
