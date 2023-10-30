import React from "react";
import { useMovieDataPopularQuery } from "../../service/get-data-movie-popular";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Link } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../../utils/cookie";

export const PopularMovie = () => {
  const cekCookie = CookieStorage.get(CookieKeys.AuthToken)
  // if (cekCookie){

  // }
  const { data } = useMovieDataPopularQuery({
    // language: "en-us",
    // page: "pageNow",
  });
  const LoadData = data ? data.data : [];

  return (
    <div className="h-full">
      <div className="flex justify-between bg-black  px-[10rem] py-[2rem]">
        <h1 className="text-2xl text-white font-medium ">Popular Movie</h1>
        <div className="flex content-center items-center gap-3 ">
          <a href="/allmovie" className="text-lg text-red-500 font-medium">
            See all movie
          </a>
          <svg
            className="fill-red-500"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </div>
      </div>
      <Swiper className="w-[100%]"
        spaceBetween={50}
        slidesPerView={3}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        >

       
        {LoadData.map((movie) => (
          <SwiperSlide  key={movie.id} >
            <Link to={`/detail/${movie.id}`}>
              <img className=" transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
