import React, { useState, useEffect } from 'react';
import instance from '../instance';
import requests from '../request';
import './Banner.css';

function Banner() {

  const [movies, setMovies] = useState([])

  async function fetchMovies() {
    const request = await instance.get(requests.fetchNetflixOriginals)
    setMovies(request.data.results[
      Math.floor(Math.random() * request.data.results.length - 1)
    ]);
  }


  console.log(movies);

  useEffect(() => {
    fetchMovies()
  }, [])


 function truncate(str,n){
  return str?.length>n ? str?.substr(0,n-1)+"..." :str
 }



  return (
    <div className='banner'
    style={{
      backgroundSize:"cover",
      backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
      backgroundPosition :"center"
    }}
    >
    <div className='banner-contents'>
      <h1 className='banner-title'>
        {movies.name}
      </h1>
      <h1 className='banner-description'>
        {truncate(movies?.overview,150)}
      </h1>
    </div>
    </div>

  )
}

export default Banner
