import { useState } from "react";
import { ContentSideList, ListTitlesPar } from "../../components/Components";
import { H1, P, Section } from "../../components/Tags";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Profil = () => {
  const dataTigaPilar = [
    {
      title: "Media pendidikan inklusif",
      content:
        "Tim Media Center memproduksi berbagai konten kreatif berbasis pendidikan inklusif. Seluruh keluarga besar Yayasan Hadin Al Musri dan alumni berpartisipasi aktif untuk mendokumentasikan berbagai kegiatan, prestasi, info bermanfaat, hingga",
    },
    {
      title: "Media syariah islam",
      content:
        "Pengetahuan dan wawasan keislaman disebarkan secara massif di semua platform Media Center (Website, Facebook, Instagram, WhatsApp, Twitter, Tiktok) di bawah bimbingan para Kiai dan Ustads/Ustadah Yayasan Hadin Al Musri.",
    },
    {
      title: "Media silaturahim Keluarga Besar Hadin Al-Musri'",
      content:
        "Keluarga besar Yayasan Hadin Al Musri meliputi siswa siswi PAUD, MI, SMP, dan santri Pondok Pesantren, hingga orang tua murid dan alumni bisa saling berinteraksi dan bertukar informasi melalui berbagai platform Media Center Hadin Al Musri.",
    },
  ];

  const TentangKamiContent = (
    <P className={"indent-7"}>
      Syiar Islam dan edukasi lintas generasi harus seiring sejalan dengan pemanfaatan teknologi digital yang terus
      berkembang. Media Center Hadin Al Musri hadir dalam berbagai platform digital, untuk menegaskan eksistensi Yayasan
      Hadin Al Musri Katomas Subang sebagai salah satu Pusat Dakwah Islam di Pagaden Subang. Media Center Hadin Al Musri
      berangkat dengan misi besar untuk memproduksi berbagai konten edukasi islami dan hiburan santun secara berkelanjutan.
      Didukung oleh berbagai Lembaga di bawah naungan Yayasan (PAUD, MI An-Nazah, SMP Plus Darunnaah, Pondok Pesantren
      Miftahul Huda Al-Musri Katomas) dan seluruh keluarga besar Yayasan Hadin Al Musri, semoga ikatan silaturahim tetap
      terjaga tanpa terbatas ruang dan waktu.
    </P>
  );

  const TigaPilarContent = dataTigaPilar.map((item, i) => <TigaPilarContentList key={i} item={item} />);

  const listTitles = [
    { title: "Tentang kami", content: TentangKamiContent },
    { title: "Tiga pilar Media Center Hadin Al-Musri' Katomas Pagaden Subang", content: TigaPilarContent },
  ];

  return (
    <Section>
      <H1>Profil</H1>
      <article className="grid grid-rows md:grid-cols-4 xl:grid-cols-5 sm:items-start gap-3">
        <ContentSideList listTitles={listTitles} />
        <div className="md:col-span-3 xl:col-span-4 order-2 md:order-1">
          {listTitles.map((lt, i) => (
            <ListTitlesPar key={i} title={lt.title}>
              {lt.content}
            </ListTitlesPar>
          ))}
        </div>
      </article>
    </Section>
  );
};

export default Profil;

const TigaPilarContentList = ({ item }) => {
  const [selected, setSelected] = useState(false);

  const handleSelected = (e) => {
    let target = e.target.nextElementSibling;
    target.classList.toggle("buka");
    if (target.classList.contains("buka")) {
      setSelected(true);
      target.style.height = target.scrollHeight + "px";
    } else {
      setSelected(false);
      target.style.height = 0;
    }
  };
  return (
    <div className="">
      <button
        onClick={(e) => handleSelected(e)}
        className={`hover:text-green-500 w-full text-left p-2 border-b border-green-700 rounded overflow-hidden flex justify-between items-center`}
      >
        {item.title}
        <span className="text-sm">{selected ? <FaMinus /> : <FaPlus />}</span>
      </button>
      <p className={`h-0 overflow-hidden transition-all duration-200`}>
        <span className="block leading-relaxed mb-0 m-0 p-3 text-sm sm:text-base">{item.content}</span>
      </p>
    </div>
  );
};
TigaPilarContentList.propTypes;
