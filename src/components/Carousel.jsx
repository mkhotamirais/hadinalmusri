import img1 from "../assets/images/slider1.jpg";
import img2 from "../assets/images/slider2.jpg";
import img3 from "../assets/images/slider3.jpg";
import CarouselSlider from "./CarouselSlider";

const BtnDaftar = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=6282218828384&text=Assalamualaikum+wr+wb%0ABapa%2FIbu+pengurus+Media+Center+Yayasan+Hadin+Al-Musri%27%0ANama+saya+...%2C+saya+ingin+menanyakan+terkait+pendaftaran+sekolah%0ATerima+kasih&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="border rounded-lg p-1 sm:p-2 px-2 sm:px-4 leading-none text-sm sm:text-base bg-green-500 bg-opacity-50 hover:bg-opacity-100"
    >
      Daftar
    </a>
  );
};

const sliders = [
  { img: img1, title: `media center yayasan hadin al-musri'`, content: <BtnDaftar /> },
  { img: img2, title: "Hadin Al-Musri'", content: "" },
  { img: img3, title: "Hadin Al-Musri'", content: "" },
];

const Carousel = () => {
  return (
    <div className="max-w-[1200px] overflow-hidden w-full aspect-[4/2] lg:aspect-[5/2]  my-2 rounded-lg mx-auto">
      <CarouselSlider sliders={sliders} />
    </div>
  );
};

export default Carousel;
