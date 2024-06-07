import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./style";
import { Footer, Navbar, Hero, Banner } from "./components/Utils";
import Activity from "./components/FirstPages/OurActivity/Activity";
import Tentang from "./components/About/Tentang";
import Info from "./components/Information/Info";
import Article from "./components/Article/Article";
import Event from "./components/Event/Event";
import {
  Akademik,
  Litbang,
  Olahraga,
  Senmed,
  Humas,
  Sosmas,
  DanaUsaha,
} from "./components/DIVISI/index";

const App = () => (
  <Router>
    <div className="min-h-screen bg-gradient-to-b from-[#28292c] via-[#20327A] via-[#20327A] via-[#6981C2] to-[#0F173C]">
      <div className="w-full overflow-hidden">
        <div className={`${styles.nav}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Hero />
                </div>
              </div>
              <Banner />
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Activity />
                </div>
              </div>
              <div
                className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}
              >
                <div className={`${styles.boxWidth}`}>
                  <Footer />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/tentang"
          element={
            <div className="from-[#7088C9] via-[#20327A] via-[#20327A] via-[#6981C2] to-[#0F173C]">
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Tentang />
                </div>
              </div>
              <div
                className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}
              >
                <div className={`${styles.boxWidth}`}>
                  <Footer />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/article"
          element={
            <div className="from-[#7088C9] via-[#20327A] via-[#20327A] via-[#6981C2] to-[#0F173C]">
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Article />
                </div>
              </div>
              <div
                className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}
              >
                <div className={`${styles.boxWidth}`}>
                  <Footer />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/event"
          element={
            <div className="from-[#7088C9] via-[#20327A] via-[#20327A] via-[#6981C2] to-[#0F173C]">
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Event />
                </div>
              </div>
              <div
                className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}
              >
                <div className={`${styles.boxWidth}`}>
                  <Footer />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/artikel"
          element={
            <div className="from-[#7088C9] via-[#20327A] via-[#20327A] via-[#6981C2] to-[#0F173C]">
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Article />
                </div>
              </div>
              <div
                className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}
              >
                <div className={`${styles.boxWidth}`}>
                  <Footer />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/info"
          element={
            <div className="from-[#7088C9] via-[#20327A] via-[#20327A] via-[#6981C2] to-[#0F173C]">
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Info />
                </div>
              </div>
              <div
                className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}
              >
                <div className={`${styles.boxWidth}`}>
                  <Footer />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/DIVISI/Akademik"
          element={
            <div className="from-[#7088C9] via-[#20327A] via-[#20327A] via-[#6981C2] to-[#0F173C]">
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Akademik />
                </div>
              </div>
              <div
                className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}
              >
                <div className={`${styles.boxWidth}`}>
                  <Footer />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/DIVISI/Litbang"
          element={
            <div className="from-[#7088C9] via-[#20327A] via-[#20327A] via-[#6981C2] to-[#0F173C]">
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Litbang />
                </div>
              </div>
              <div
                className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}
              >
                <div className={`${styles.boxWidth}`}>
                  <Footer />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/DIVISI/Olahraga"
          element={
            <div className="from-[#7088C9] via-[#20327A] via-[#20327A] via-[#6981C2] to-[#0F173C]">
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Olahraga />
                </div>
              </div>
              <div
                className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}
              >
                <div className={`${styles.boxWidth}`}>
                  <Footer />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/DIVISI/Senmed"
          element={
            <div className="from-[#7088C9] via-[#20327A] via-[#20327A] via-[#6981C2] to-[#0F173C]">
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Senmed />
                </div>
              </div>
              <div
                className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}
              >
                <div className={`${styles.boxWidth}`}>
                  <Footer />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/DIVISI/Humas"
          element={
            <div className="from-[#7088C9] via-[#20327A] via-[#20327A] via-[#6981C2] to-[#0F173C]">
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Humas />
                </div>
              </div>
              <div
                className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}
              >
                <div className={`${styles.boxWidth}`}>
                  <Footer />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/DIVISI/Sosmas"
          element={
            <div className="from-[#7088C9] via-[#20327A] via-[#20327A] via-[#6981C2] to-[#0F173C]">
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <Sosmas />
                </div>
              </div>
              <div
                className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}
              >
                <div className={`${styles.boxWidth}`}>
                  <Footer />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/DIVISI/DanaUsaha"
          element={
            <div className="from-[#7088C9] via-[#20327A] via-[#20327A] via-[#6981C2] to-[#0F173C]">
              <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                  <DanaUsaha />
                </div>
              </div>
              <div
                className={`bg-white ${styles.paddingX} ${styles.flexCenter}`}
              >
                <div className={`${styles.boxWidth}`}>
                  <Footer />
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  </Router>
);

export default App;
