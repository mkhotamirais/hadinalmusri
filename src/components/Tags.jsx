export const H3Footer = ({ children = "H3Footer", className }) => (
  <div className="relative mb-4 md:mb-8">
    <h3 className={`${className} border-black text-gray-500 capitalize`}>{children}</h3>
    <div className="absolute h-0.5 w-10 -bottom-1 bg-gray-500"></div>
  </div>
);
H3Footer.propTypes;

export const H1 = ({ children = "H1", className }) => (
  <div
    style={{ textShadow: "0 1px 1px green" }}
    className={`${className} mt-8 relative text-center leading-loose text-xl sm:text-2xl text-gray-700 font-medium`}
  >
    {children}
    <div className="w-16 h-[0.2rem] absolute rounded-lg -bottom-2 bg-emerald-700 left-1/2 -translate-x-1/2"></div>
  </div>
);
H1.propTypes;

export const H2 = ({ children = "H2", className }) => (
  <div className={`${className} font-medium text-lg text-gray-600 mb-1 mt-2 capitalize`}>{children}</div>
);
H2.propTypes;

export const P = ({ children = "P", className }) => (
  <div className={`${className} mb-2 text-sm sm:text-base`}>{children}</div>
);
P.propTypes;
