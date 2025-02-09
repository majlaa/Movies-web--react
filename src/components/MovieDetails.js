import React from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/MovieDetails.css'

const MovieDetails = () => {
    const location = useLocation();

    if(!location.state){
        return <h1> No State Available</h1>
      }
  return (
    <div className='details'>
        <img
        class='max-w-sm rounded overflow-hidden shadow-lg bg-slate-300'
        src={`http://localhost:8080/${location.state.image}`}
        alt='Sunset in the mountains'
      />
      <div>
        <h1 class="text-4xl">{location.state.title} </h1>
        <p>{location.state.description} </p>
        <div className="detailsIcons">
            <i class="bi bi-star-fill"></i> 
            <p1>Stars: <br/> {location.state.stars}</p1>
            <i class="bi bi-clock-fill"></i>
            <p1>Duration: <br/> {location.state.duration}</p1>
        </div>
        </div>
    </div>
  );
};

export default MovieDetails
