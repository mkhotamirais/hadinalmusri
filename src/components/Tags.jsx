// import { useSelector } from "react-redux";

export const H1 = ({ children = "H1", className }) => {
  // const { dark } = useSelector((state) => state.basic);
  return (
    <div
      style={{ textShadow: "0 1px 1px green" }}
      className={`${className} mt-6 mb-4 relative text-center leading-loose text-xl sm:text-2xl text-transparent font-medium`}
    >
      {children}
      <div className="w-16 h-[0.15rem] absolute rounded-lg -bottom-2 bg-emerald-700 left-1/2 -translate-x-1/2"></div>
    </div>
  );
};
H1.propTypes;

export const H2 = ({ children = "H2", className }) => (
  <div className={`${className} font-medium text-lg mb-1 mt-2 capitalize`}>{children}</div>
);
H2.propTypes;

export const P = ({ children = "P", className }) => (
  <p className={`text-sm sm:text-base mb-2 leading-relaxed ${className}`}>{children}</p>
);
P.propTypes;

export const Section = ({ children, id }) => {
  return (
    <section id={id} className="px-3 lg-px-16">
      {children}
    </section>
  );
};
Section.propTypes;
