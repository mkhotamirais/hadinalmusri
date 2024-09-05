import { Container, Title } from "@/components/wrapper";
import Link from "next/link";
import { TigaPilarAcc } from "./tiga-pilar-acc";

export default function ProfilPage() {
  return (
    <section>
      <Container>
        <Title title="Profil" />
        <div className="flex w-full py-8 gap-6">
          <div>
            <div id="tentang-kami" className="w-full py-4 scroll-mt-16">
              <h2 className="text-xl font-bold text-green-600 py-3">Tentang Kami</h2>
              <p className="">
                Syiar Islam dan edukasi lintas generasi harus seiring sejalan dengan pemanfaatan teknologi digital yang
                terus berkembang. Media Center Hadin Al Musri hadir dalam berbagai platform digital, untuk menegaskan
                eksistensi Yayasan Hadin Al Musri Katomas Subang sebagai salah satu Pusat Dakwah Islam di Pagaden
                Subang. Media Center Hadin Al Musri berangkat dengan misi besar untuk memproduksi berbagai konten
                edukasi islami dan hiburan santun secara berkelanjutan. Didukung oleh berbagai Lembaga di bawah naungan
                Yayasan (PAUD, MI An-Nazah, SMP Plus Darunnaah, Pondok Pesantren Miftahul Huda Al-Musri Katomas) dan
                seluruh keluarga besar Yayasan Hadin Al Musri, semoga ikatan silaturahim tetap terjaga tanpa terbatas
                ruang dan waktu.
              </p>
            </div>
            <div id="tiga-pilar" className="w-full py-4">
              <h2 className="text-xl font-bold text-green-600">Tiga Pilar</h2>
              <TigaPilarAcc />
            </div>
          </div>

          <div className="min-w-48 sticky top-16 self-start py-6">
            <h2 className="border text-white p-2 bg-green-500 rounded-lg">Content</h2>
            <div className="flex flex-col gap-2 text-muted-foreground text-sm p-2 py-4">
              <Link href="#tentang-kami">Tentang Kami</Link>
              <Link href="#tiga-pilar">Tiga Pilar</Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}