import { ContentSideList, ListTitles } from "../../components/Components";
import { H2, P } from "../../components/Tags";

const ArticleMediaSiber = () => {
  const ruangLingkupContent = (
    <>
      <li>
        Media siber adalah segala bentuk media yang menggunakan wahana internet dan melaksanakan kegiatan jurnalistik, serta
        memenuhi persyaratan Undang-Undang Pers dan Standar Perusahaan Pers yang ditetapkan Dewan Pers.
      </li>
      <li>
        Isi buatan pengguna (user generated content) adalah segala isi yang dibuat dan atau dipublikasikan oleh pengguna
        media siber, antara lain, artikel, gambar, komentar, suara, video dan berbagai bentuk unggahan yang melekat pada
        media siber, seperti blog, forum, komentar pembaca atau pemirsa, dan bentuk lain.
      </li>
    </>
  );

  const VerifikasDanKeberimbanganBeritaContent = (
    <>
      <li>Pada prinsipnya setiap berita harus melalui verifikasi.</li>
      <li>
        Berita yang dapat merugikan pihak lain memerlukan verifikasi pada berita yang sama untuk memenuhi prinsip akurasi dan
        keberimbangan.
      </li>
      <li>
        <span>Ketentuan dalam butir (a) di atas dikecualikan, dengan syarat:</span>
        <ul className="list-disc pl-4">
          <li>Berita benar-benar mengandung kepentingan publik yang bersifat mendesak;</li>
          <li>Sumber berita yang pertama adalah sumber yang jelas disebutkan identitasnya, kredibel, dan kompeten;</li>
          <li>Subyek berita yang harus dikonfirmasi tidak diketahui keberadaannya dan atau tidak dapat diwawancarai;</li>
          <li>
            Media memberikan penjelasan kepada pembaca bahwa berita tersebut masih memerlukan verifikasi lebih lanjut yang
            diupayakan dalam waktu secepatnya. Penjelasan dimuat pada bagian akhir dari berita yang sama, di dalam kurung dan
            menggunakan huruf miring.
          </li>
        </ul>
      </li>
      <li>
        Setelah memuat berita sesuai dengan butir (c), media wajib meneruskan upaya verifikasi, dan setelah verifikasi
        didapatkan, hasil verifikasi dicantumkan pada berita pemutakhiran (update) dengan tautan pada berita yang belum
        terverifikasi.
      </li>
    </>
  );

  const IsiBuatanPenggunaContent = (
    <>
      <li>
        Media siber wajib mencantumkan syarat dan ketentuan mengenai Isi Buatan Pengguna (User Generated Content) yang tidak
        bertentangan dengan Undang-Undang No. 40 Tahun 1999 tentang Pers dan Kode Etik Jurnalistik, yang ditempatkan secara
        terang dan jelas.
      </li>
      <li>
        Media siber mewajibkan setiap pengguna untuk melakukan registrasi keanggotaan dan melakukan proses log-in terlebih
        dahulu untuk dapat mempublikasikan semua bentuk Isi Buatan Pengguna. Ketentuan mengenai log-in akan diatur lebih
        lanjut.
      </li>
      <li>
        <span>
          Dalam registrasi tersebut, media siber mewajibkan pengguna memberi persetujuan tertulis bahwa Isi Buatan Pengguna
          yang dipublikasikan:
        </span>
        <ul className="list-disc pl-4">
          <li>Tidak memuat isi bohong, fitnah, sadis dan cabul;</li>
          <li>
            Tidak memuat isi yang mengandung prasangka dan kebencian terkait dengan suku, agama, ras, dan antargolongan
            (SARA), serta menganjurkan tindakan kekerasan;
          </li>
          <li>
            Tidak memuat isi diskriminatif atas dasar perbedaan jenis kelamin dan bahasa, serta tidak merendahkan martabat
            orang lemah, miskin, sakit, cacat jiwa, atau cacat jasmani.
          </li>
        </ul>
        <li>
          Media siber memiliki kewenangan mutlak untuk mengedit atau menghapus Isi Buatan Pengguna yang bertentangan dengan
          butir (c).
        </li>
        <li>
          Media siber wajib menyediakan mekanisme pengaduan Isi Buatan Pengguna yang dinilai melanggar ketentuan pada butir
          (c). Mekanisme tersebut harus disediakan di tempat yang dengan mudah dapat diakses pengguna.
        </li>
        <li>
          Media siber wajib menyunting, menghapus, dan melakukan tindakan koreksi setiap Isi Buatan Pengguna yang dilaporkan
          dan melanggar ketentuan butir (c), sesegera mungkin secara proporsional selambat-lambatnya 2 x 24 jam setelah
          pengaduan diterima.
        </li>
        <li>
          Media siber yang telah memenuhi ketentuan pada butir (a), (b), (c), dan (f) tidak dibebani tanggung jawab atas
          masalah yang ditimbulkan akibat pemuatan isi yang melanggar ketentuan pada butir (c).
        </li>
        <li>
          Media siber bertanggung jawab atas Isi Buatan Pengguna yang dilaporkan bila tidak mengambil tindakan koreksi
          setelah batas waktu sebagaimana tersebut pada butir (f).
        </li>
      </li>
    </>
  );

  const RalatKoreksiHakJawabContent = (
    <>
      <li>
        Ralat, koreksi, dan hak jawab mengacu pada Undang-Undang Pers, Kode Etik Jurnalistik, dan Pedoman Hak Jawab yang
        ditetapkan Dewan Pers.
      </li>
      <li>
        Ralat, koreksi dan atau hak jawab wajib ditautkan pada berita yang diralat, dikoreksi atau yang diberi hak jawab.
      </li>
      <li>
        Di setiap berita ralat, koreksi, dan hak jawab wajib dicantumkan waktu pemuatan ralat, koreksi, dan atau hak jawab
        tersebut.
      </li>
      <li>
        <span>Bila suatu berita media siber tertentu disebarluaskan media siber lain, maka:</span>
        <ul className="list-disc pl-4">
          <li>
            Tanggung jawab media siber pembuat berita terbatas pada berita yang dipublikasikan di media siber tersebut atau
            media siber yang berada di bawah otoritas teknisnya;
          </li>
          <li>
            Koreksi berita yang dilakukan oleh sebuah media siber, juga harus dilakukan oleh media siber lain yang mengutip
            berita dari media siber yang dikoreksi itu;
          </li>
          <li>
            Media yang menyebarluaskan berita dari sebuah media siber dan tidak melakukan koreksi atas berita sesuai yang
            dilakukan oleh media siber pemilik dan atau pembuat berita tersebut, bertanggung jawab penuh atas semua akibat
            hukum dari berita yang tidak dikoreksinya itu.
          </li>
        </ul>
        <li>
          Sesuai dengan Undang-Undang Pers, media siber yang tidak melayani hak jawab dapat dijatuhi sanksi hukum pidana
          denda paling banyak Rp 500.000.000 (lima ratus juta rupiah).
        </li>
      </li>
    </>
  );

  const PencabutanBeritaContent = (
    <>
      <li>
        Berita yang sudah dipublikasikan tidak dapat dicabut karena alasan penyensoran dari pihak luar redaksi, kecuali
        terkait masalah SARA, kesusilaan, masa depan anak, pengalaman traumatik korban atau berdasarkan pertimbangan khusus
        lain yang ditetapkan Dewan Pers.
      </li>
      <li>Media siber lain wajib mengikuti pencabutan kutipan berita dari media asal yang telah dicabut.</li>
      <li>Pencabutan berita wajib disertai dengan alasan pencabutan dan diumumkan kepada publik.</li>
    </>
  );

  const IklanContent = (
    <>
      <li>Media siber wajib membedakan dengan tegas antara produk berita dan iklan.</li>
      <li>
        Setiap berita/artikel/isi yang merupakan iklan dan atau isi berbayar wajib mencantumkan keterangan
        &apos;advertorial&apos;, &apos;iklan&apos;, &apos;ads&apos;, &apos;sponsored&apos;, atau kata lain yang menjelaskan
        bahwa berita/artikel/isi tersebut adalah iklan.
      </li>
    </>
  );

  const HakCiptaContent = (
    <>Media siber wajib menghormati hak cipta sebagaimana diatur dalam peraturan perundang-undangan yang berlaku.</>
  );

  const PencantumanPedomanContent = (
    <>Media siber wajib mencantumkan Pedoman Pemberitaan Media Siber ini di medianya secara terang dan jelas.</>
  );

  const SengketaContent = (
    <>Penilaian akhir atas sengketa mengenai pelaksanaan Pedoman Pemberitaan Media Siber ini diselesaikan oleh Dewan Pers.</>
  );

  const listTitles = [
    { title: "Ruang lingkup", content: ruangLingkupContent },
    { title: "Verifikasi dan keberimbangan berita", content: VerifikasDanKeberimbanganBeritaContent },
    { title: "Isi buatan pengguna", content: IsiBuatanPenggunaContent },
    { title: "Ralat, koreksi, hak jawab", content: RalatKoreksiHakJawabContent },
    { title: "Pencabutan berita", content: PencabutanBeritaContent },
    { title: "Iklan", content: IklanContent },
    { title: "Hak cipta", content: HakCiptaContent },
    { title: "Pencantuman pedoman", content: PencantumanPedomanContent },
    { title: "Sengketa", content: SengketaContent },
  ];

  return (
    <article className="grid grid-rows md:grid-cols-4 xl:grid-cols-5 sm:items-start gap-3">
      <ContentSideList listTitles={listTitles} />
      <div className="md:col-span-3 xl:col-span-4 order-2 md:order-1 text-gray-700">
        <H2>Pedoman Media Siber</H2>
        <P className={"indent-7"}>
          Kemerdekaan berpendapat, kemerdekaan berekspresi, dan kemerdekaan pers adalah hak asasi manusia yang dilindungi
          Pancasila, Undang-Undang Dasar 1945, dan Deklarasi Universal Hak Asasi Manusia PBB. Keberadaan media siber di
          Indonesia juga merupakan bagian dari kemerdekaan berpendapat, kemerdekaan berekspresi, dan kemerdekaan pers.{" "}
        </P>
        <P className={"indent-7"}>
          Media siber memiliki karakter khusus sehingga memerlukan pedoman agar pengelolaannya dapat dilaksanakan secara
          profesional, memenuhi fungsi, hak, dan kewajibannya sesuai Undang-Undang Nomor 40 Tahun 1999 tentang Pers dan Kode
          Etik Jurnalistik. Untuk itu Dewan Pers bersama organisasi pers, pengelola media siber, dan masyarakat menyusun
          Pedoman Pemberitaan Media Siber sebagai berikut:{" "}
        </P>
        <P>
          <ol className="article-list-titles list-decimal pl-4">
            {listTitles.map((lt, i) => (
              <ListTitles
                key={i}
                title={lt.title}
                className={`${
                  lt.title == "Hak cipta" || lt.title == "Pencantuman pedoman" || lt.title == "Sengketa" ? "pl-0" : ""
                }`}
              >
                {lt.content}
              </ListTitles>
            ))}
          </ol>
        </P>
        <div className="border-t border-gray-300 mt-5 text-sm">
          Jakarta, 3 Februari 2012
          <br />
          (Pedoman ini ditandatangani oleh Dewan Pers dan komunitas pers di Jakarta, 3 Februari 2012). Sumber: Dewan Pers
        </div>
      </div>
    </article>
  );
};

export default ArticleMediaSiber;
