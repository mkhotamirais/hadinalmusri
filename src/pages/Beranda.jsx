import Carousel from "../components/Carousel";
import { H1, H2, P } from "../components/Tags";
import slider2 from "../assets/images/slider2.jpg";
import hadin1 from "../assets/images/hadin1.jpg";
import hadin2 from "../assets/images/hadin2.jpg";
import hadin3 from "../assets/images/hadin3.jpg";
import hadin4 from "../assets/images/hadin4.jpg";
import hadin5 from "../assets/images/hadin5.jpg";
import hadin6 from "../assets/images/hadin6.jpg";
import { Link } from "react-router-dom";

const Hadins = [hadin1, hadin2, hadin3, hadin4, hadin5, hadin6];

const Beranda = () => {
  return (
    <section id="beranda">
      <Carousel />
      {/* tentang kami */}
      <div className="min-h-[calc(50vh)] my-8">
        <H1 className={"mb-8 sm:mb-12"}>Tentang Hadin Al-Musri&apos;</H1>
        <div className="flex flex-col md:flex-row gap-3">
          <div className="rounded-md w-full h-full flex-1 border p-1">
            <img src={slider2} alt="" />
          </div>
          <div className="w-full h-full flex-1 text-gray-600">
            <p className="indent-8 mb-3 text-sm sm:text-base">
              Media Center Hadin Al Musri hadir dalam berbagai platform digital, untuk menegaskan eksistensi Yayasan Hadin Al
              Musri Katomas Subang sebagai salah satu Pusat Dakwah Islam di Pagaden Subang. Media Center Hadin Al Musri
              berangkat dengan misi besar untuk memproduksi berbagai konten edukasi islami dan hiburan santun secara
              berkelanjutan...
            </p>
            <Link
              to="/profil"
              className="border rounded-md p-2 leading-none px-5 bg-green-500 text-white hover:opacity-70 my-2 inline-block"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
      {/* galeri */}
      <div className="min-h-[calc(50vh)] my-8">
        <H1 className={"mb-8 sm:mb-12"}>Galeri</H1>
        <div id="imgGaleri" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
          {Hadins.map((h, i) => (
            <a target="_blank" rel="noopener noreferrer" key={i} href={h}>
              <img src={h} alt={h} />
            </a>
          ))}
        </div>
      </div>
      {/* artikel */}
      <div className="min-h-[calc(50vh)] my-8">
        <H1 className={"mb-8 sm:mb-12"}>Artikel</H1>
        <div id="articlesGrid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2">
          <div className="border rounded p-3">
            <H2>pedoman media siber</H2>
            <P className={"indent-5"}>
              Kemerdekaan berpendapat, kemerdekaan berekspresi, dan kemerdekaan pers adalah hak asasi manusia yang dilindungi
              Pancasila, Undang-Undang Dasar 1945, dan Deklarasi Universal Hak Asasi Manusia PBB...
            </P>
            <Link
              to="/articles/pedoman-media-siber"
              className="border rounded-md p-2 leading-none px-5 bg-green-500 text-white hover:opacity-70 my-2 inline-block"
            >
              Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beranda;
