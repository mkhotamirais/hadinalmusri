import Image from "next/image";
import Link from "next/link";

export default function TentangKami() {
  return (
    <div className="min-h-[calc(50vh)] my-8">
      <h2 className={"mb-8 sm:mb-12"}>Tentang Hadin Al-Musri&apos;</h2>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="rounded-md w-full h-full flex-1 border p-1">
          <Image
            width={500}
            height={500}
            src="/images/slider2.jpg"
            alt="hadin image"
            className="object-center object-cover"
          />
        </div>
        <div className="w-full h-full flex-1">
          <p className="indent-8 mb-3 text-sm sm:text-base">
            Media Center Hadin Al Musri hadir dalam berbagai platform digital, untuk menegaskan eksistensi Yayasan Hadin
            Al Musri Katomas Subang sebagai salah satu Pusat Dakwah Islam di Pagaden Subang. Media Center Hadin Al Musri
            berangkat dengan misi besar untuk memproduksi berbagai konten edukasi islami dan hiburan santun secara
            berkelanjutan...
          </p>
          <Link
            href="/profil"
            className="border rounded-md p-2 leading-none px-5 bg-green-500 text-white hover:opacity-70 my-2 inline-block"
          >
            Selengkapnya
          </Link>
        </div>
      </div>
    </div>
  );
}
