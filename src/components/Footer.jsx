import { FaEnvelope, FaHouse, FaMap, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Logo, Socials } from "./Components";
import { useSelector } from "react-redux";

// footer components
const footerHomeLinks = [
  { href: "/profil", text: "profil", icon: "" },
  { href: "/tim-redaksi", text: "tim redaksi", icon: "" },
  { href: "/info-iklan", text: "info iklan", icon: "" },
  { href: "/kontak", text: "kontak", icon: "" },
  { href: "/karir", text: "karir", icon: "" },
];

const footerLembagaPendidikanLinks = [
  { href: "#", text: "PAUD", icon: "" },
  { href: "#", text: "Raudhatul Athfal", icon: "" },
  { href: "#", text: "Ponpes Al-Musri'", icon: "" },
  { href: "#", text: "SMP Plus Darun Nazah", icon: "" },
];

const footerAlamat = [
  { href: "/profile", text: "PAUD", icon: <FaHouse /> },
  {
    href: "https://api.whatsapp.com/send/?phone=6282218828384&text=Assalamualaikum+wr+wb%0ABapa%2FIbu+pengurus+Media+Center+Yayasan+Hadin+Al-Musri%27%0ANama+saya+...%2C+saya+ingin+menanyakan+terkait+pendaftaran+sekolah%0ATerima+kasih&type=phone_number&app_absent=0",
    text: "+62 822 1882 8384",
    icon: <FaWhatsapp />,
  },
  { href: "mailto:hadinalmusri@gmail.com", text: "hadinalmusri@gmail.com", icon: <FaEnvelope /> },
  {
    href: "https://www.google.com/maps/place/Yayasan+Hadin+Al+Musri'/@-6.427813,107.777905,13z/data=!4m6!3m5!1s0x2e69475850fcbe57:0x4487b67cc5756858!8m2!3d-6.4278131!4d107.7779053!16s%2Fg%2F11f041208j?hl=en&entry=ttu",
    text: "Maps",
    icon: <FaMap />,
  },
];

export const Footer = () => {
  const { dark } = useSelector((state) => state.basic);
  return (
    <footer className={`${dark ? "bg-slate-800" : "bg-gradient-to-b from-white to-green-200"} border-t mt-8`}>
      <div className="px-3 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 my-12">
          <div className="flex md:flex-col justify-between md:justify-start items-center md:items-start">
            <Logo />
            <Socials />
          </div>
          <div className="links w-full grid grid-cols-1 md:grid-cols-3 gap-3">
            <FooterLinkLinks title="media center yayasan hadin almusri" list={footerHomeLinks} />
            <FooterAnchorLinks title="lembaga pendidikan" list={footerLembagaPendidikanLinks} />
            <FooterAnchorLinks title="alamat kantor" list={footerAlamat} />
          </div>
        </div>
        <div className={`${dark ? "text-white" : "text-gray-600"} px-3 py-5 text-sm  text-center sm:text-left`}>
          Copyright <sup>&copy;</sup> {new Date().getFullYear()}{" "}
          <a href="/" className="text-green-600">
            hadin al-musri&apos;
          </a>
        </div>
      </div>
    </footer>
  );
};

const FooterLinkLinks = ({ title, list }) => {
  const { dark } = useSelector((state) => state.basic);
  return (
    <div>
      <h3 className="capitalize mb-2">{title}</h3>
      <div className="flex flex-col items-start gap-2">
        {list.map((item, i) => (
          <Link key={i} to={item.href} className="capitalize">
            <div className={`${dark ? "text-slate-300" : "text-slate-600"}`}>
              {item.icon && <span>{item.icon}</span>}
              {item.text}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
FooterLinkLinks.propTypes;

const FooterAnchorLinks = ({ title, list }) => {
  const { dark } = useSelector((state) => state.basic);
  return (
    <div>
      <h3 className="capitalize mb-2">{title}</h3>
      <div className="flex flex-col items-start gap-2">
        {list.map((item, i) => (
          <a key={i} href={item.href} target="_blank" rel="noopener noreferrer">
            <div className={`${dark ? "text-slate-300" : "text-slate-600"} flex gap-2 items-center`}>
              {item.icon && <span>{item.icon}</span>}
              {item.text}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
FooterAnchorLinks.propTypes;

const FooterMap = ({ className }) => {
  return (
    <div className={`${className} border rounded-lg overflow-hidden p-1`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.948372289151!2d107.77790500000002!3d-6.427813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69475850fcbe57%3A0x4487b67cc5756858!2sYayasan%20Hadin%20Al%20Musri&#39;!5e0!3m2!1sen!2sid!4v1709824469873!5m2!1sen!2sid"
        width="100%"
        loading="lazy"
        // allowfullscreen=""
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
FooterMap.propTypes;
