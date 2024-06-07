import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { himti } from "../../../assets"; // Menghapus menu dan close
import { navLinks } from "../../../Important";
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'; // Import ikon yang diperlukan

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split("/")[1];
    const activeNav = navLinks.find(
      (nav) => nav.id === (path === "" ? "beranda" : path)
    );
    setActive(activeNav ? activeNav.title : "Home");
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center bg-white p-4 shadow-xl">
      <div className="flex items-center">
        <Link to="/">
          <img
            src={himti}
            alt="himti"
            className="w-15 h-20 mr-10"
            onClick={() => setActive("Home")}
          />
        </Link>
        <h1 className="text-black text-xl font-bold">
          Himpunan Mahasiswa Teknik Informatika
        </h1>
      </div>

      <ul className="hidden sm:flex justify-end items-center flex-1 space-x-8">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`cursor-pointer text-black ${
              active === nav.title ? "font-bold" : "font-normal"
            } hover:underline`}
            onClick={() => setActive(nav.title)}
          >
            <Link to={nav.id === "beranda" ? "/" : `/${nav.id}`}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex justify-end items-center">
        <button ref={buttonRef} onClick={(e) => {
          e.stopPropagation();
          setToggle((prev) => !prev);
        }}>
          {toggle ? (
            <XMarkIcon className="w-7 h-7 text-black" />
          ) : (
            <Bars4Icon className="w-7 h-7 text-black" />
          )}
        </button>

        {toggle && (
          <div
            ref={menuRef}
            className="p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl shadow-lg"
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-medium cursor-pointer text-gray-800 ${
                    active === nav.title ? "font-bold" : "font-normal"
                  } mb-4 hover:underline`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                  }}
                >
                  <Link to={nav.id === "beranda" ? "/" : `/${nav.id}`}>
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
