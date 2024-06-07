import React, { useState, useEffect } from "react";
import {
  nature1,
  nature2,
  nature3,
  nature5,
  nature6,
} from "../../assets/index";

const initialProducts = [
  {
    id: 1,
    name: "Nama Artikel",
    img: nature1,
    button: "Lihat",
  },
  {
    id: 2,
    name: "Nama Artikel",
    img: nature2,
    button: "Lihat",
    sale: true,
  },
  {
    id: 3,
    name: "Nama Artikel",
    img: nature3,
    button: "Lihat",
  },
  {
    id: 4,
    name: "Nama Artikel",
    img: nature5,
    button: "Lihat",
  },
  {
    id: 5,
    name: "Nama Artikel",
    img: nature5,
    button: "Lihat",
  },
  {
    id: 6,
    name: "Nama Artikel",
    img: nature6,
    button: "Lihat",
  },
];

const Article = ({ productsFromBackend }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (productsFromBackend) {
      setProducts(productsFromBackend);
    } else {
      setProducts(initialProducts);
    }
  }, [productsFromBackend]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5">
      <div className="bg-[#a5c2fe] p-10 rounded-3xl border-8 border-white w-full max-w-7xl mx-5">
        <div className="text-black font-poppins  min-h-screen p-8">
          <h1 className="text-5xl underline font-bold text-center mb-4">
            Kumpulan Artikel Kami
          </h1>
          <p className="text-center text-black mb-12">
            Himpunan Mahasiswa Teknik Informatika
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg p-6 transform transition duration-500 hover:scale-105"
              >
                <img src={product.img} alt={product.name} className="w-full h-60 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      {product.oldPrice && (
                        <span className="line-through text-gray-500 mr-2">
                          {product.oldPrice}
                        </span>
                      )}
                      <span className="text-xl">{product.price}</span>
                    </div>
                  </div>
                  <button className="mt-6 bg-black hover:bg-blue-600 text-white py-3 px-6 rounded text-lg">
                    {product.button}
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

export default Article;
