import React, { useEffect } from 'react'
import { useMovieDataQuery } from '../service/get-data-movie';
import { Navbar } from '../assets/components/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { CookieKeys, CookieStorage } from '../utils/cookie';
import { useDispatch, useSelector } from 'react-redux';
import getDataPopular from '../redux/action/getPopular';

export const AllMovie = () => {
  
  const movies = useSelector((state) => state.movie.movies);

  const dispatch = useDispatch();

  const getMoviePopular = () => {
    dispatch(getDataPopular());
  }

  useEffect(() => {
    getMoviePopular();
  }, []);


  return (
    <div className='bg-black'>
    <Navbar></Navbar>
    <h1 className='text-4xl text-white font-bold pt-[7rem] pl-[10rem]'>Popular Movie</h1>
    <div className='flex flex-wrap justify-center'>
    {movies.map((movie) => (
        <div key={movie.id}>
            <div className='flex flex-col w-[15rem] h-[20rem] m-[7rem] text-white'>
              <Link to={`/detail/${movie.id}`}>
              <img className='' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}></img>
              </Link>
            
            <h1 className='text-xl font-bold '>{movie.title}</h1>
            <p>{movie.release_date}</p>
            </div>
        </div>
    ))}
      </div>
    </div>
    
  )
}
