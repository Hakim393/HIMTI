import React, { useState } from "react";
import { nature1, nature2, nature3, nature4, nature5, nature6 } from "../../assets/index";

const Info = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    { id: 1, name: "UPDATE UNIVERSITAS GUNADARMA" },
    { id: 2, name: "PRESTASI MAHASISWA INFORMATIKA" },
    { id: 3, name: "INFORMASI HIMTI" },
    { id: 4, name: "PENDAFTARAN HIMTI" },
  ];

  // function untuk ubah kategori
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredImages = () => {
    switch (selectedCategory) {
      case "UPDATE UNIVERSITAS GUNADARMA":
        return [nature1];
      case "PRESTASI MAHASISWA INFORMATIKA":
        return [nature2];
      case "INFORMASI HIMTI":
        return [nature3];
      case "PENDAFTARAN HIMTI":
        return [nature4];
      default:
        // kalau tidak memilih kategori, maka akan menampilkan semua gambar
        return [nature1, nature2, nature3, nature4, nature5, nature6];
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <div className="bg-[#a5c2fe] p-10 rounded-3xl border-8 border-white w-full max-w-7xl mx-5">
        <div id="portfolio" className="container mx-auto p-4 sm:p-6">
        <h1 className="text-5xl underline font-bold font-poppins text-center mb-4">
            Kumpulan Informasi
          </h1>
          <p className="text-center text-black mb-12">
            Himpunan Mahasiswa Teknik Informatika
          </p>
          <div className="mb-7">
            <select
              id="category"
              name="category"
              className="mt-2 block w-full p-5 border border-black rounded-md bg-[#a5c2fe]  font-bold  text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm truncate"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="">INFORMASI TERBARU</option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages().map((image, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg p-6 transform transition duration-500 hover:scale-105"
              >
                <img src={image} alt={`Project ${index + 1}`} className="w-full h-60 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">
                    {selectedCategory || `Nature ${index + 1}`}
                  </h2>
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <span className="text-xl">Category</span>
                    </div>
                  </div>
                  <button className="mt-6 bg-black hover:bg-blue-600 text-white py-3 px-6 rounded text-lg">
                    Lihat
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
