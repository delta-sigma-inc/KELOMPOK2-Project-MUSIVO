import React, { useEffect } from "react";
import NavigationBar from "../components/layouts/navigationBar/navigationBar";
import Sidebar from "../components/layouts/sidebar/sidebar";
import Footer from "../components/layouts/footer/footer";
import Genre from "../components/genreMusic/genre";
import MostlyPlayed from "../components/mostly played/mostPlay";
import TopPlaylist from "../components/top playlist/topPlay";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Mengatur posisi scroll ke bagian atas saat halaman dimuat
  }, []);

  return (
    <React.Fragment>
      <Sidebar />
      <div>
        <NavigationBar />
        <div className="home ps-[100px] mt-[100px] mb-20">
          <div className="ms-[30px]">
            <div className="ucapan mt-[40px]  ps-[10px]">
              <h3 className="text-[33px] font-semibold">
                Good Morning, Nanaa!
              </h3>
            </div>
            <Genre />
          </div>
          <div className="flex">
            <div className="mostPlay ms-[20px] w-[60%]">
              <h2 className="text-[27px] mt-[30px] mb-6 font-bold ms-3 border-l-8 border-deep-orange-900 ps-3">
                Mostly Played
              </h2>
              <MostlyPlayed />
            </div>
            <div className="topPlay ms-[60px] w-[30%]">
              <h2 className="text-[27px] mt-[30px] mb-6 font-semibold border-l-8 border-deep-orange-900 ps-3">
                Top Playlist
              </h2>
              <TopPlaylist />
            </div>
          </div>
          <div className="ms-[10px]">
            <div className="ucapan mt-[40px] ps-[10px]">
              <h2 className="text-[27px] mt-[30px] mb-6 font-bold ms-3 border-l-8 border-deep-orange-900 ps-3">
                Made For U
              </h2>
            </div>
          </div>
          <div className="ms-[10px]">
            <div className="ucapan mt-[40px] ps-[10px]">
              <h2 className="text-[27px] mt-[30px] mb-6 font-bold ms-3 border-l-8 border-deep-orange-900 ps-3">
                Based on Your recent Listening
              </h2>
            </div>
          </div>
          <div className="ms-[10px]">
            <div className="ucapan mt-[40px] ps-[10px]">
              <h2 className="text-[27px] mt-[30px] mb-6 font-bold ms-3 border-l-8 border-deep-orange-900 ps-3">
                Today's Biggest Hits
              </h2>
            </div>
          </div>
          <div className="ms-[10px]">
            <div className="ucapan mt-[40px] ps-[10px]">
              <h2 className="text-[27px] mt-[30px] mb-6 font-bold ms-3 border-l-8 border-deep-orange-900 ps-3">
                Recomended For Today
              </h2>
            </div>
          </div>
          <div className="ms-[10px]">
            <div className="ucapan mt-[40px] ps-[10px]">
              <h2 className="text-[27px] mt-[30px] mb-6 font-bold ms-3 border-l-8 border-deep-orange-900 ps-3">
                Suggested Artists
              </h2>
            </div>
          </div>
          <div className="ms-[10px]">
            <div className="ucapan mt-[40px] ps-[10px]">
              <h2 className="text-[27px] mt-[30px] mb-6 font-bold ms-3 border-l-8 border-deep-orange-900 ps-3">
                Popular Albums
              </h2>
            </div>
          </div>
          <div className="ms-[10px]">
            <div className="ucapan mt-[40px] ps-[10px]">
              <h2 className="text-[27px] mt-[30px] mb-6 font-bold ms-3 border-l-8 border-deep-orange-900 ps-3">
                Fresh New Music
              </h2>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
