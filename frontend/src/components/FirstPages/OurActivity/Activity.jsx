import React, { useState } from "react";
import {
  nature1,
  nature2,
  nature3,
  nature4,
  nature5,
  nature6,
} from "../../../assets";

const Activity = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // list kategorinya
  const categories = [
    { id: 1, name: "AKADEMIK" },
    { id: 2, name: "LITBANG" },
    { id: 3, name: "OLAHRAGA" },
    { id: 4, name: "DANUS" },
    { id: 5, name: "HUMAS" },
    { id: 6, name: "SENMED" },
  ];

  // function untuk ubah ketegori
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // filter gambar sesuai request
  const filteredImages = () => {
    switch (selectedCategory) {
      case "AKADEMIK":
        return [nature1];
      case "LITBANG":
        return [nature2];
      case "OLAHRAGA":
        return [nature3];
      case "DANUS":
        return [nature4];
      case "HUMAS":
        return [nature5];
      case "SENMED":
        return [nature6];
      default:
        // kalo tidak memilih kategori, maka akan menampilkan semua gambar
        return [nature1, nature2, nature3, nature4, nature5, nature6];
    }
  };

  return (
    <div id="portfolio" className="container mx-auto p-4 sm:p-6">
      <div className="mb-7">
        <select
          id="category"
          name="category"
          className="mt-1 block w-full p-5 border border-black rounded-md bg-[#a5c2fe] font-bold font-poppins text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm truncate"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="">SEMUA DIVISI</option>
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
            className="portfolio-item relative overflow-hidden rounded-lg"
          >
            <img
              src={image}
              alt={`Project ${index + 1}`}
              className="w-full h-auto"
            />
            <div className="portfolio-overlay absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-yellow-400 bg-opacity-50 transition-opacity duration-300 ease-in-out hover:opacity-100">
              <div className="project-category font-bold uppercase text-xs text-white">
                Category
              </div>
              <div className="project-name text-lg text-white">
                {selectedCategory || `Nature ${index + 1}`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
