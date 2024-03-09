import { Link } from "react-router-dom";
import { H1, P } from "../components/Tags";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const InfoIklan = () => {
  return (
    <section>
      <H1>Info Iklan</H1>
      <div className="text-white leading-relaxed rounded-lg w-full sm:w-2/3 lg:w-1/2 my-10 mx-auto p-5 flex flex-col gap-3 bg-gradient-to-b from-green-300 via-green-700 to-green-300">
        <p>Kontak untuk Kerja Sama Iklan dan Media Partner Media Center Yayasan hadin Al Musri:</p>
        <div className="grid grid-cols-2 text-lg xl:text-xl">
          <div className="col-span-1">
            <FaEnvelope className="inline-block" /> Email
          </div>
          <div>: email@gmail.com</div>
        </div>
        <div className="grid grid-cols-2 text-lg xl:text-xl">
          <div className="col-span-1">
            <FaWhatsapp className="inline-block" /> WhatsApp
          </div>
          <div>: 0812 1226 1780</div>
        </div>
        <P>
          <Link to="/kontak" className="text-white hover:underline">
            Draft dan Kontrak Kerja Sama Iklan dan Media Partner,{" "}
          </Link>
        </P>
      </div>
    </section>
  );
};

export default InfoIklan;
