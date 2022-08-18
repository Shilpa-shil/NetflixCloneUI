import React, { useState, useEffect } from 'react'
import instance from '../instance'
import './Row.css'

const imageUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow })
{
    const [movies, setMovies] = useState([])
    async function fetchData() {
        const request = await instance.get(fetchUrl)
        setMovies(request.data.results)
    }
    useEffect(() => {
        fetchData()
    }, [])

    console.log("our movies is ", movies);
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map((movie) =>(
                    <img className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${imageUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}
export default Row;