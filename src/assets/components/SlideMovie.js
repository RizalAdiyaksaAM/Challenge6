import React, { useState } from "react";
import { useMovieDataQuery } from "../../service/get-data-movie";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

export const SlideMovie = () => {
  const { data } = useMovieDataQuery({
    // languange: "en-us",
    // page: "pageNow",
  });
  const LoadData = data ? data.data : [];
  // console.log (LoadData)

  return (
    <div className=" ">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper ">
        {LoadData.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="w-full h-[50rem] relative">
              <img
                className="w-full h-full bg-cover brightness-50  "
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}></img>
              <div className="absolute flex flex-col justify-center top-0 w-[50%] h-full gap-[1rem] pl-10 text-white">
                <h1 className="text-4xl font-bold ">{movie.title}</h1>
                <p className="text-lg">{movie.overview}</p>
                <button className="bg-red-600 rounded-md block w-1/4 py-2 font-bold flex justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>Watch Trailer</p>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
