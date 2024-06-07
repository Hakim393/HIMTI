import React from "react";
import styles from "../../../style";
import Carousel from "./Carousel";
import { activity1, activity2, activity3, activity4 } from "../../../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} bg-[#a5c2fe] m-5 p-10 border-8 border-white rounded-3xl `}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-8 px-4`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[32px] text-[40px] sm:text-[52px] text-black ss:leading-[48px] leading-[60px] sm:leading-[75px]">
            Himpunan Mahasiswa <br className="sm:block hidden" />{" "}
            <span className="text-black">Teknik Informatika</span>{" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          <span className="text-black ">
            HIMTI UG merupakan kelengkapan non struktural yang bersifat
            independen dan berkedudukan di Jurusan Teknik Informatika
            Universitas Gunadarma. HIMTI didirikan di Depok pada tahun 1992
            untuk waktu yang tidak ditentukan lamanya. Asas HIMTI adalah
            Persaudaraan yang didasarkan pada prinsip dari, oleh dan untuk
            Mahasiswa dengan memberikan peranan dan keleluasaan yang lebih besar
            kepada Mahasiswa dalam berorganisasi.
          </span>
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <Carousel
          activity1={activity1}
          activity2={activity2}
          activity3={activity3}
          activity4={activity4}
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}></div>
    </section>
  );
};

export default Hero;
