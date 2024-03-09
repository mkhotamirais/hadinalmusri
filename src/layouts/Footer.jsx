import { Link } from "react-router-dom";
import { Logo } from "../components/Components";
import Socials from "../components/Socials";
import { H3Footer } from "../components/Tags";
import { FaEnvelope, FaHome, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t bg-gradient-to-b from-white to-green-200 mt-8">
      <div className="px-3 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 my-12">
          <div className="flex md:flex-col justify-between md:justify-start items-center md:items-start">
            <Logo className={"mr-0 lg:mr-12"} />
            <Socials className={"mt-0 md:mt-8"} />
          </div>
          <div className="links w-full grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <H3Footer>Media Center Yayasan Hadin Almusri</H3Footer>
              <div className="flex flex-col items-start gap-2">
                <Link to="/profil">Profil</Link>
                <Link to="/tim-redaksi">Tim Redaksi</Link>
                <Link to="/info-iklan">Info Iklan</Link>
                <Link to="/kontak">Kontak</Link>
                <Link to="/karir">Karir</Link>
              </div>
            </div>
            <div>
              <H3Footer>lembaga pendidikan</H3Footer>
              <div className="flex flex-col items-start gap-2">
                <a href="#">PAUD</a>
                <a href="#">Raudhatul Athfal</a>
                <a href="#">Ponpes Al-Musri&apos;</a>
                <a href="#">SMP Plus Darun Nazah</a>
              </div>
            </div>
            <div>
              <H3Footer>Alamat Kantor</H3Footer>
              <div className="flex flex-col items-start gap-2">
                <a href="/profil" className="flex items-center gap-2">
                  <FaHome className="inline-block" /> Katomas Pagaden Subang
                </a>
                <a
                  className="flex items-center gap-2"
                  href="https://api.whatsapp.com/send/?phone=6282218828384&text=Assalamualaikum+wr+wb%0ABapa%2FIbu+pengurus+Media+Center+Yayasan+Hadin+Al-Musri%27%0ANama+saya+...%2C+saya+ingin+menanyakan+terkait+pendaftaran+sekolah%0ATerima+kasih&type=phone_number&app_absent=0"
                >
                  <FaWhatsapp className="inline-block" /> +62 822 1882 8384
                </a>
                <a className="flex items-center gap-2" href="mailto:hadinalmusri@gmail.com">
                  <FaEnvelope className="inline-block" /> hadinalmusri@gmail.com
                </a>
              </div>
              <div className="border rounded-lg overflow-hidden mt-5 p-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15858.948372289151!2d107.77790500000002!3d-6.427813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69475850fcbe57%3A0x4487b67cc5756858!2sYayasan%20Hadin%20Al%20Musri&#39;!5e0!3m2!1sen!2sid!4v1709824469873!5m2!1sen!2sid"
                  width="100%"
                  loading="lazy"
                  // allowfullscreen=""
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 py-5 text-sm text-gray-600 text-center sm:text-left">
          Copyright <sup>&copy;</sup> {new Date().getFullYear()}{" "}
          <a href="/" className="text-green-600">
            hadin al-musri&apos;
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
