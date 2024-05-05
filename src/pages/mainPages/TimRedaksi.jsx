import { ContentSideList, ListTitlesPar } from "../../components/Components";
import { H1, Section } from "../../components/Tags";

const TimRedaksi = () => {
  const timRedaksiContent = (
    <table className="w-full border-separate">
      <tbody>
        <tr className="">
          <th>Pemimpin Umum </th>
          <td>Dedih Alawi</td>
        </tr>
        <tr>
          <th>Pemimpin Redaksi</th>
          <td>Sonia Fitri</td>
        </tr>
        <tr>
          <th>Bendahara Redaksi</th>
          <td>Siti Rosihoh</td>
        </tr>
        <tr>
          <th>Fotografer</th>
          <td>Fahmi</td>
        </tr>
        <tr>
          <th>Videografer</th>
          <td>Wafi</td>
        </tr>
        <tr>
          <th>Editor Konten</th>
          <td>Oby</td>
        </tr>
        <tr>
          <th>Editor Audio Visual </th>
          <td>Abub</td>
        </tr>
        <tr>
          <th>Reporter</th>
          <td>Bu Haji Nani, Pak Guru Toha, The Ega, The Novi, Bu Aab, Bu Elih</td>
        </tr>
        <tr>
          <th>Admin (Uploader) </th>
          <td>Camay</td>
        </tr>
      </tbody>
    </table>
  );
  const timPerusahaanIklanContent = (
    <table className="w-full border-separate">
      <tbody>
        <tr>
          <th>Pimpinan</th>
          <td>Haji Heli</td>
        </tr>
        <tr>
          <th>Anggota</th>
          <td>Gigin, Heru, Abu, Tomi</td>
        </tr>
      </tbody>
    </table>
  );
  const listTitles = [
    { title: "Tim Redaksi", content: timRedaksiContent },
    { title: "Tim Perusahaan dan Iklan", content: timPerusahaanIklanContent },
  ];
  return (
    <Section id="timRedaksi">
      <H1>Tim Redaksi</H1>
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

export default TimRedaksi;
