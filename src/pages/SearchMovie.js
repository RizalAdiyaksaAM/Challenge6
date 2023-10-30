import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Navbar } from '../assets/components/Navbar';
import { fetchDataMovieSearch } from '../service/get-data-movie-search';
import { CookieKeys, CookieStorage } from '../utils/cookie';

export const SearchMovie = () => {
    const { namemovie } = useParams();
    const [movie, setDataMovie] = useState([]);
    const navigate = useNavigate()
   
    useEffect(() => {
      const cekCookie = CookieStorage.get(CookieKeys.AuthToken)
      if (!cekCookie) {
          navigate('/')
      } 
  })

    const movieSearch = async () => {
        const data = await fetchDataMovieSearch(namemovie);
        setDataMovie(data.data);
        console.log(data.data, "data")
    };

    useEffect(()=> {
        movieSearch();
    }, [namemovie]);

    return (
    <div className='bg-black'>
        <Navbar></Navbar>
        <div className='flex flex-wrap justify-center'>
        {movie.map((search) => (
            <div key={search.id}>
                <div className='flex flex-col w-[15rem] h-[20rem] m-[7rem] text-white'>
                <Link to={`/detail/${search.id}`}>
                <img className='' src={`https://image.tmdb.org/t/p/original/${search.poster_path}`}></img>
                </Link>
                <h1 className='text-xl font-bold '>{search.title}</h1>
                <p>{search.release_date}</p>
                </div>
            </div>
        ))}
    </div>
    </div>
    
  )
}
