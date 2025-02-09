import React from "react";
import Hashtag from "./Hashtag";
import '../styles/MovieCard.css'
import { useNavigate } from "react-router-dom";
import { useFavoritesStore } from "../store/myList"


const MovieCard = ({ movieProps }) => {
const navigate = useNavigate();
  const addToFavorites = useFavoritesStore((state) => state.addToFavorites);
  const favorites = useFavoritesStore((state) => state.favorites);
  const removeFromFavorites = useFavoritesStore((state) => state.removeFromFavorites);
  const isAlreadyFavorite = favorites.some((fav) => fav.id === movieProps.id);

  const handleClick = () => {
    navigate('/details', { state: {...movieProps} });
  };

  const handleToggleFavorite = () => {
    if (isAlreadyFavorite) {
      removeFromFavorites(movieProps.id);
    } else {
    addToFavorites(movieProps); // Update the favorite count
    }
  };


  return (
    <div className="max-w-85 rounded overflow-hidden shadow-lg h-full bg-slate-300 m-2">
      <img
        className="w-85 h-96 m-0"
        src={`http://localhost:8080/${movieProps.image}`}
        alt={movieProps.title}
      />
      <div className="px-4 py-4 overflow-hidden">
        <div className="font-bold text-xl mb-2">{movieProps.title}</div>
        <p className="text-gray-700 text-base">{movieProps.description}</p>
      </div>
      <button
        className="m-3 bg-gray-950 hover:bg-stone-900 text-white font-bold py-2 px-2 rounded-full mr-1"
        onClick={handleClick}
      >
        See movie details
      </button>
      <button 
        className="m-3 bg-purple-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded-full"
        onClick={handleToggleFavorite}
      >
        {isAlreadyFavorite ? "Remove from 'My List'" : "Add to 'My List'"}
        </button>
    </div>
  );
};

export default MovieCard;



// import React from "react";
// import logo from "../assets/like.png"
// import Hashtag from "./Hashtag";
// import { useNavigate } from "react-router-dom";

// const MovieCard = ({ movieProps }) => {
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate("/details", { state: movieProps });
//   };

//   return (
//     <div class="max-w-sm rounded overflow-hidden shadow-lg h-full bg-slate-300	">
//       <img
//         class="w-full h-40"
//         src={`http://localhost:3001/${movieProps.image}`}
//         alt="Sunset in the mountains"
//         style={{ height: "400px" }}
//       />
//       <div class="px-4 py-4 overflow-hidden">
//       <button type="button" class="text-white bg-transparent hover:bg-red-700/90 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
//       <div class="flex flex-shrink-0 items-center">
//                 <img class="h-8 w-auto" src={logo} alt="Your Company"/>
//               </div>
//               </button>
//         <div class="font-bold text-xl mb-2">{movieProps.title}</div>
//         <p class="text-gray-700 text-base"> {movieProps.description}</p>
//       </div>
//       <button
//         class="bg-cyan-950 hover:bg-stone-900 text-white font-bold py-2 px-4 rounded-full mr-2"
//         onClick={handleClick}
//       >
//         See Movie Details
//       </button>
//       <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
//         Delete
//       </button>
//       <div class="px-6 pt-4 pb-2">
//         <Hashtag tag='action'/>
//         <Hashtag tag='drama'/>
//         <Hashtag tag='winter'/>
//         {/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//           #action
//         </span>
//         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//           #drama
//         </span>
//         <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//           #winter
//         </span> */}
//       </div>
//     </div>
//   );
// };

// export default MovieCard;

