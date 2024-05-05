import { Link } from "react-router-dom";
import { H1, P, Section } from "../../components/Tags";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";

const InfoIklan = () => {
  return (
    <Section>
      <H1>Info Iklan</H1>
      <div className="text-white text-center leading-relaxed rounded-lg w-full sm:w-2/3 lg:w-1/2 my-10 mx-auto p-5 flex flex-col gap-3 bg-gradient-to-b from-green-300 via-green-700 to-green-300">
        <p>Kontak untuk Kerja Sama Iklan dan Media Partner Media Center Yayasan hadin Al Musri:</p>
        <div className="flex items-center justify-center text-lg gap-2 w-full">
          <FaEnvelope /> email@gmail.com
        </div>
        <div className="flex items-center justify-center text-lg gap-2">
          <FaWhatsapp /> 0812 1226 1780
        </div>
        <P>
          <Link to="/kontak" className="text-white underline">
            Draft dan Kontrak Kerja Sama Iklan dan Media Partner,{" "}
          </Link>
        </P>
      </div>
    </Section>
  );
};

export default InfoIklan;
