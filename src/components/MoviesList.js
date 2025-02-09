import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import Header from './Header';
import { useNavigate } from 'react-router-dom';  
import '../styles/MoviesList.css';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteMovies')) || [];
    setFavoriteMovies(storedFavorites);

    // Fetch movies from API
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:8080/movies');
        setMovies(response.data);
      } catch (err) {
        console.log('Error:', err.message);
      }
    };

    fetchMovies();
  }, []);

  const addToFavorites = (movie) => {
    // Avoid duplicates in the favorites list
    if (!favoriteMovies.some((favMovie) => favMovie.id === movie.id)) {
      const updatedFavorites = [...favoriteMovies, movie];
      setFavoriteMovies(updatedFavorites);
      localStorage.setItem('favoriteMovies', JSON.stringify(updatedFavorites)); // Save to localStorage
    } else {
      alert('This movie is already in your favorites!');
    }
  };

  const handleMyListClick = () => {
    navigate('/mylist');  
  };

  return (
    <div className="p-4 overflow-y-auto">
      <Header title="Movie List" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div className="flex-none" key={movie.id}>
            <MovieCard
              movieProps={movie}
              addToFavorites={addToFavorites}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;





// import React, {useState, useEffect} from 'react';
// import axios from 'axios';
// import MovieCard from "./MovieCard"
// import Header from './Header';
// import '../styles/MoviesList.css'

// const MoviesList = () => {
//     const [movies, setMovies] = useState([]);
//     // const [loading, setLoading] = useState(true); // Track loading state
//     // const [error, setError] = useState(null); // Track error state
  
//     useEffect(() => {
//       const fetchMovies = async () => {
//         axios.get('http://localhost:3001/movies')
//         .then(response => setMovies(response.data))
//         .catch(err => console.log('Error:', err.message));
//       }      
  
//       fetchMovies();
//     }, []);

//     return (
//         <>
//         <div className="h-screen p-4 overflow-y-auto">
//             <Header title='Movie List' subtitle='Dashboard all movies'/>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                 {movies?.map((movie) => {
//                     console.log(movie)
//                     return (
//                         <div class="flex-none">
//                             <MovieCard
//                                 movieProps={movie}
//                             />
//                         </div>)
//                 })}
//             </div>
            
//             {/* <div className="flex gap-4 rounded overflow-x-auto">
//                 {movies?.map((movie) => {
//                     return (
//                         <div class="flex-none">
//                             <MovieCard
//                                movieProps={movie}
//                             />
//                         </div>)
//                 })}
//             </div> */}
//         </div>
//         </>
//     )
// }

// export default MoviesList;




// const movies = [
//     {
//       imageSrc: Movie1,
//       title: "Anyone But You",
//       description: "A mind-bending thriller where dream invasion is possible, directed by Christopher Nolan."
//     },
//     {
//       imageSrc: Movie2,
//       title: "Nowhere",
//       description: "A hacker discovers the world is a simulation and fights to free humanity, directed by the Wachowskis."
//     },
//     {
//       imageSrc: Movie3,
//       title: "Purple Hearts",
//       description: "An iconic mafia saga that follows the powerful Corleone crime family, directed by Francis Ford Coppola."
//     },
//   ];

//   const cardStyle = {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center'
// };

// function MoviesList() {
//     return (
//         <div className="movies-list" style={cardStyle}>
//           {movies.map((movies, index) => (
//         <MovieCard
//         key={index}
//         image={movies.imageSrc}
//         title={movies.title}
//         description={movies.description}
//         />
//       ))}
//         </div>
//     );
// }


// export default MoviesList;