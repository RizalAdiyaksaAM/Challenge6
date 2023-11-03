import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Navbar } from '../assets/components/Navbar';
import { fetchDataMovieSearch } from '../service/get-data-movie-search';
import { CookieKeys, CookieStorage } from '../utils/cookie';
import { useDispatch, useSelector } from 'react-redux';
import getDataSearch from '../redux/action/getSearch';

export const SearchMovie = () => {
    const  {namemovie} = useParams();
    const [search, setDataSearch] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const movie = useSelector((state) => state.movieSearch.search);

    useEffect(() => {
    setLoading (true)
    dispatch(getDataSearch(namemovie))
    .then((result) => {
        setLoading (false)
    }).catch((err) => {
        setLoading (false)
    });
    }, [namemovie, dispatch])

    useEffect(() => {
     if (!loading) {
        setDataSearch(movie)
     }
    }, [movie, loading])
    
    console.log (movie, "movieSearch")
    
//     useEffect(() => {
//       const cekCookie = CookieStorage.get(CookieKeys.AuthToken)
//       if (!cekCookie) {
//           navigate('/')
//       } 
//   })

//     const movieSearch = async () => {
//         const data = await fetchDataMovieSearch(namemovie);
//         setDataMovie(data.data);
//         console.log(data.data, "data")
//     };

//     useEffect(()=> {
//         movieSearch();
//     }, [namemovie]);



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
