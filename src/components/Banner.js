import React, {useState, useEffect} from 'react'
import instance from '../instance'
import requests from '../request'
import './Banner.css'

function Banner() {
    const [movie, setMovies] = useState([])
    async function fetchdata(){
        const request = await instance.get(requests.fetchNetflixOriginals)
        setMovies(request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
        ])
    }

    useEffect(() =>{
        fetchdata()
    }, [])

    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1)+"..." : str;
    }

  return (
    <header className='header'
    style={{
        backgroundSize:"cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie.backdrop_path}"
        )`,
        backgroundPosition:"center center",
    }}>     
    <div className='banner_contents'>
        <h1 className='banner_title'>
            { movie.title || movie.name || movie.original_name }
        </h1>
        <h1 className='banner_description'>
            {truncate(movie?.overview,150)}
        </h1>
    </div>
    </header>
  )
}

export default Banner