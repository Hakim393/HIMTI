import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import * as images from "../../assets/index";

const hierarchyData = [
  {
    id: 1,
    title: "Ketua Himpunan",
    name: "Nama Ketua",
    image: images.Orang1,
    children: [2, 3, 4, 5, 6],
  },
  {
    id: 2,
    title: "Sekretaris Umum",
    name: "Nama Sekretaris",
    image: images.Orang2,
  },
  {
    id: 3,
    title: "Bendahara Umum",
    name: "Nama Bendahara",
    image: images.Orang3,
  },
  {
    id: 4,
    title: "Koordinator Wilayah 1",
    name: "Nama Koordinator Wilayah 1",
    image: images.Orang4,
  },
  {
    id: 5,
    title: "Koordinator Wilayah 2",
    name: "Nama Koordinator Wilayah 2",
    image: images.Orang5,
  },
  {
    id: 6,
    title: "Koordinator Wilayah 3",
    name: "Nama Koordinator Wilayah 3",
    image: images.Orang6,
  },
  {
    id: 7,
    title: "Kepala Bidang 1",
    name: "Nama Kepala Bidang 1",
    image: images.Orang7,
    children: [9, 10],
  },
  {
    id: 8,
    title: "Kepala Bidang 2",
    name: "Nama Kepala Bidang 2",
    image: images.Orang8,
    children: [11, 12, 13, 14, 15],
  },
  {
    id: 9,
    title: "Akademik",
    image: images.Orang9,
    path: "/DIVISI/Akademik",
  },
  {
    id: 10,
    title: "Litbang",
    image: images.Orang10,
    path: "/DIVISI/Litbang",
  },
  {
    id: 11,
    title: "Olahraga",
    image: images.Orang11,
    path: "/DIVISI/Olahraga",
  },
  {
    id: 12,
    title: "Seni Dan Media Kreatif",
    image: images.Orang12,
    path: "/DIVISI/Senmed",
  },
  {
    id: 13,
    title: "Hubungan Masyarakat",
    image: images.Orang13,
    path: "/DIVISI/Humas",
  },
  {
    id: 14,
    title: "Sosial Masyarakat",
    image: images.Orang14,
    path: "/DIVISI/Sosmas",
  },
  {
    id: 15,
    title: "Dana Usaha",
    image: images.Orang15,
    path: "/DIVISI/DanaUsaha",
  },
];

// Pembuatan Card
const Card = ({ division, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
      <div className="bg-white p-10 rounded-3xl shadow-2xl relative w-full max-w-2xl mx-4 transform animate-slide-up">
        <span
          className="absolute top-4 right-4 p-2 text-gray-900 cursor-pointer transition-transform duration-300 hover:rotate-90"
          onClick={onClose}
        >
          <XMarkIcon className="w-8 h-8" />
        </span>
        <div className="flex flex-col items-center">
          <div className="relative mb-6">
            <img
              src={division.image}
              alt={division.title}
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-600 shadow-lg transition-transform duration-300 hover:scale-110"
              style={{ position: "relative", zIndex: 1 }}
            />
          </div>
          <div className="bg-gray-100 p-6 rounded-xl w-full text-center">
            <h2 className="text-3xl font-bold text-black mb-2">
              {division.title}
            </h2>
            {division.name && (
              <p className="text-xl text-gray-800">{division.name}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Konten Tentang
const Tentang = () => {
  const [selectedDivision, setSelectedDivision] = useState(null);

  const handleDivisionClick = (division) => {
    const divisionPaths = [
      "Akademik",
      "Litbang",
      "Olahraga",
      "Seni Dan Media Kreatif",
      "Hubungan Masyarakat",
      "Sosial Masyarakat",
      "Dana Usaha",
    ];
    if (divisionPaths.includes(division.title)) {
      window.open(division.path, "_blank");
    } else {
      setSelectedDivision(division);
    }
  };

  const handleCloseCard = () => {
    setSelectedDivision(null);
  };

  return (
    <>
      <section className="flex flex-col items-center p-10  bg-[#a5c2fe] m-5 border-8 border-white rounded-3xl shadow-xl">
      <div className="bg-white p-6 m-4 rounded-lg shadow-md mt-1 w-full">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#0061FF]">
          Himpunan Mahasiswa Teknik Informatika (HIMTI)
        </h1>
        <p className="mb-10 font-poppins  text-black leading-relaxed text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius
          optio eveniet natus, facilis, iusto veniam culpa reprehenderit numquam
          quod placeat eos aspernatur error rerum suscipit laudantium illo
          obcaecati esse repellat soluta labore autem recusandae provident! Sed
          totam repudiandae voluptatum quos debitis dolores vitae velit tempore
          nemo eaque. Rerum placeat magnam architecto est consequuntur quis
          eligendi fuga. Molestias necessitatibus, ab voluptate earum esse
          facere molestiae consequatur ipsum quisquam quo dicta, doloribus,
          debitis odit cum incidunt repudiandae recusandae quis! Magni quo nisi
          eveniet ex pariatur porro cupiditate. Tempora expedita blanditiis
          consequuntur dolorum voluptate eos quos tempore perspiciatis quo
          repudiandae accusantium impedit iusto obcaecati iste inventore
          incidunt odit quas ex harum cupiditate culpa, asperiores libero. Natus
          aspernatur enim repellat pariatur alias blanditiis laborum cupiditate
          veniam harum, placeat eius neque quis iure possimus porro earum
          aliquid! Cupiditate, nobis. Odio repellat culpa asperiores molestias
          autem sit sunt ipsam. Atque suscipit libero harum sed ullam dolor,
          commodi consectetur est quisquam ratione minima cupiditate cum iusto
          sit ipsa neque, sunt repellat esse nesciunt aperiam fugit totam quae
          necessitatibus dignissimos. Impedit similique omnis quod quisquam
          suscipit doloremque! Consequuntur adipisci animi assumenda hic optio
          illum dolorum facilis perspiciatis sapiente, minima tenetur voluptates
          aperiam deserunt totam reprehenderit ipsum exercitationem.
        </p>
        </div>  
        <section className="bg-white p-6 m-4 rounded-lg shadow-md mt-1 w-full">
          <div className="text-black text-2xl md:text-4xl lg:text-lg mb-4 p-4 font-poppins">
            <h1 className="text-[#0061FF] underline text-2xl p-2 text-center font-bold ">
              VISI HIMTI
            </h1>
            <p>
              Menjadikan HIMTI BINUS University sebagai Himpunan Mahasiswa yang
              dikenal se-Asia Tenggara pada tahun 2025
            </p>
            <h1 className="text-[#0061FF] underline text-2xl p-2 text-center font-bold ">
              MISI HIMTI
            </h1>
            <p>
              Memperkuat ikatan antar sesama anggota keluarga HIMTI dengan
              pengetahuan, pengalaman, dan nilai-nilai baik dalam membentuk satu
              keluarga HIMTI yang solid. Menanamkan dan mengembangkan sikap
              profesional dalam setiap individu di dalam HIMTI, agar siap
              menghadapi dunia industri, karir, dan pengembangan lingkungan
              global. Menjunjung tinggi rasa nasionalisme, menunjukkan bahwa
              HIMTI berbakti pada Indonesia.
            </p>
          </div>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mt-1 w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-[#0061FF] underline">
            Struktur Keanggotaan HIMTI
          </h2>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center mb-6">
              <div
                className="cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => handleDivisionClick(hierarchyData[0])}
              >
                <div className="font-bold text-black text-center">
                  {hierarchyData[0].title}
                </div>
                {hierarchyData[0].name && (
                  <div className="text-gray-700 text-center">
                    {hierarchyData[0].name}
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-wrap justify-center space-x-0 sm:space-x-6 mb-6">
              {hierarchyData.slice(1, 6).map((division) => (
                <div
                  key={division.id}
                  className="cursor-pointer w-full sm:w-auto mb-6 sm:mb-0 transition-transform duration-300 hover:scale-105"
                  onClick={() => handleDivisionClick(division)}
                >
                  <div className="font-bold text-black text-center">
                    {division.title}
                  </div>
                  {division.name && (
                    <div className="text-gray-700 text-center">
                      {division.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center space-x-0 sm:space-x-6 mb-6">
              {hierarchyData.slice(6, 8).map((division) => (
                <div
                  key={division.id}
                  className="cursor-pointer w-full sm:w-auto mb-6 sm:mb-0 transition-transform duration-300 hover:scale-105"
                  onClick={() => handleDivisionClick(division)}
                >
                  <div className="font-bold text-black text-center">
                    {division.title}
                  </div>
                  {division.name && (
                    <div className="text-gray-700 text-center">
                      {division.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center space-x-0 sm:space-x-6 mb-6">
              {hierarchyData.slice(8).map((division) => (
                <div
                  key={division.id}
                  className="cursor-pointer w-full sm:w-auto mb-6 sm:mb-0 transition-transform duration-300 hover:scale-105"
                  onClick={() => handleDivisionClick(division)}
                >
                  <div className="font-bold text-black text-center">
                    {division.title}
                  </div>
                  {division.name && (
                    <div className="text-gray-700 text-center">
                      {division.name}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {selectedDivision && (
            <Card division={selectedDivision} onClose={handleCloseCard} />
          )}
        </section>
      </section>
    </>
  );
};

export default Tentang;
