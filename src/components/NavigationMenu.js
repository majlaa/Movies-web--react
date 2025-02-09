import logo from '../assets/logo.jpg';
import { Form, Link, useLocation, useRouteLoaderData } from 'react-router-dom';
import { useFavoritesStore } from '../store/myList';
import { useState } from 'react';
import { useEffect} from 'react';
import { CgProfile } from "react-icons/cg";
import '../styles/NavigationMenu.css'


const NavigationMenu = () => {
  const token = useRouteLoaderData('root');
  const favoriteCount = useFavoritesStore((state) => state.favoriteCount);
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.pathname);

  useEffect(() => {
    // Update active button whenever the location changes
    setActiveButton(location.pathname);
  }, [location.pathname]);
  const isActive = (path) => activeButton === path;
  return (
    <nav className='bg-gray-800'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-18 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            <button
              type='button'
              className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='absolute -inset-0.5'></span>
              <span className='sr-only'>Open main menu</span>
              <svg
                className='block h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
              <svg
                className='hidden h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='nav flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='flex flex-shrink-0 items-center'>
              <img className='logo h-8 w-auto' src={logo} alt='Logo' />
            </div>
            <div className='hidden sm:ml-6 sm:block'>
              <div className='flex space-x-4'>
                <Link
                  to='/'
                  onClick={() => setActiveButton('/')}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive('/')
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  Home
                </Link>
                {token && (
                  <Link
                    to='/myList'
                    onClick={() => setActiveButton('/myList')}
                    className={`rounded-md px-3 py-2 text-sm font-medium ${
                      isActive('/myList')
                        ? 'bg-gray-700 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                  >
                    My List ({favoriteCount})
                  </Link>
                )}
                <Link
                  to='/editUser'
                  onClick={() => setActiveButton('/editUser')}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive('/editUser')
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  Add a user
                </Link>
                <Link
                  to='/about.us'
                  onClick={() => setActiveButton('/about.us')}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive('/about.us')
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  About Us
                </Link>
                <Link
                  to='/auth?mode=login'
                  onClick={() => setActiveButton('/auth')}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    isActive('/auth')
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  Sign Up
                </Link>
                {token && (
                  <Form action='/logout' method='post'>
                    <button  className='bg-yellow-500 rounded-md px-3 py-2 text-md text-black font-medium  hover:bg-yellow-700 hover:text-black'>
                      Logout
                    </button>
                  </Form>
                )}
                <Link
                  to='/user'
                  onClick={() => setActiveButton('/user')}
                  className={`user rounded-md px-3 py-2 text-sm font-medium ${
                    isActive('/user')
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <CgProfile />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sm:hidden' id='mobile-menu'>
        <div className='space-y-1 px-2 pb-3 pt-2'>
          <Link
            to='/'
            onClick={() => setActiveButton('/')}
            className={`block rounded-md px-3 py-2 text-base font-medium ${
              isActive('/')
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            to='/about'
            onClick={() => setActiveButton('/about')}
            className={`block rounded-md px-3 py-2 text-base font-medium ${
              isActive('/about')
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            About Us
          </Link>
          <Link
            to='/favorite-list'
            onClick={() => setActiveButton('/favorite-list')}
            className={`block rounded-md px-3 py-2 text-base font-medium ${
              isActive('/favorite-list')
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Favorite
          </Link>
          <Link
            to='/help Center'
            onClick={() => setActiveButton('/help Center')}
            className={`block rounded-md px-3 py-2 text-base font-medium ${
              isActive('/help Center')
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            Help Center
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default NavigationMenu;




// import logo from "../assets/logo.jpg"
// import '../styles/NavigationMenu.css'
// import { Form, Link, useLocation, useRouteLoaderData } from 'react-router-dom';
// import { useFavoritesStore } from "../store/myList";
// import { useState } from 'react';

// const NavigationMenu = () => {
//   const token = useRouteLoaderData('root');
//   const favoriteCount = useFavoritesStore((state) => state.favoriteCount);
//   const location = useLocation();
//   const [activeButton, setActiveButton] = useState(location.pathname);

//   const isActive = (path) => activeButton === path;


//   return (
//     <nav className="bg-gray-800">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <button
//               type="button"
//               className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//             >
//               <span className="absolute -inset-0.5"></span>
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="block h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                 />
//               </svg>
//               <svg
//                 className="hidden h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex flex-shrink-0 items-center">
//               <img className="logo h-8 w-auto" src={logo} alt="Your Company" />
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 <Link
//                   to="/"
//                   onClick={() => setActiveButton('/')}
//                   className={`rounded-md px-3 py-2 text-sm font-medium ${
//                     isActive('/') ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                   }`}
//                 >
//                   Home
//                 </Link>
                
//                 <Link
//                   to="/about.us"
//                   onClick={() => setActiveButton('/about')}
//                   className={`rounded-md px-3 py-2 text-sm font-medium ${
//                     isActive('/about') ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                   }`}
//                 >
//                   About Us
//                 </Link>
//                 {token && (
//                   <Link
//                     to='/favorite-list'
//                     onClick={() => setActiveButton('/favorite-list')}
//                     className={`rounded-md px-3 py-2 text-sm font-medium ${
//                       isActive('/favorite-list')
//                         ? 'bg-gray-700 text-white'
//                         : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                     }`}
//                   >
//                     Favorite ({favoriteCount})
//                   </Link>
//                 )}
//                 <Link
//                   to="/contact"
//                   onClick={() => setActiveButton('/contact')}
//                   className={`rounded-md px-3 py-2 text-sm font-medium ${
//                     isActive('/contact') ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                   }`}
//                 >
//                   Contact
//                 </Link>
//                 <Link
//                   to='/auth?mode=login'
//                   onClick={() => setActiveButton('/auth')}
//                   className={`rounded-md px-3 py-2 text-sm font-medium ${
//                     isActive('/auth')
//                       ? 'bg-gray-700 text-white'
//                       : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//                   }`}
//                 >
//                   Sign Up
//                 </Link>
//                 {token && (
//                   <Form action='/logout' method='post'>
//                     <button className='bg-yellow-500 rounded-md px-3 py-2 text-md text-black font-medium  hover:bg-yellow-700 hover:text-black'>
//                       Logout
//                     </button>
//                   </Form>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="sm:hidden" id="mobile-menu">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           <Link
//             to="/"
//             onClick={() => setActiveButton('/')}
//             className={`block rounded-md px-3 py-2 text-base font-medium ${
//               isActive('/') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//             }`}
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             onClick={() => setActiveButton('/about')}
//             className={`block rounded-md px-3 py-2 text-base font-medium ${
//               isActive('/about') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//             }`}
//           >
//             About Us
//           </Link>
//           <Link
//             to="/favorite-list"
//             onClick={() => setActiveButton('/favorite-list')}
//             className={`block rounded-md px-3 py-2 text-base font-medium ${
//               isActive('/favorite-list') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//             }`}
//           >
//             Favorite
//           </Link>
//           <Link
//             to="/contact"
//             onClick={() => setActiveButton('/contact')}
//             className={`block rounded-md px-3 py-2 text-base font-medium ${
//               isActive('/contact') ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
//             }`}
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavigationMenu;





// import logo from "../assets/logo.jpg"
// import '../styles/NavigationMenu.css'
// import { Link, useLocation } from 'react-router-dom';
// import { useFavoritesStore } from "../store/myList";
// import { useState } from 'react';

// const NavigationMenu =  () => {
//   const favoriteCount = useFavoritesStore((state) => state.favoriteCount);
//   const location = useLocation();
//   const [activeButton, setActiveButton] = useState(location.pathname);

//   const isActive = (path) => activeButton === path;

//     return(
//         <nav class="bg-gray-950">
//         <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//           <div class="relative flex h-16 items-center justify-between">
//             <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
//               <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
//                 <span class="absolute -inset-0.5"></span>
//                 <span class="sr-only">Open main menu</span>
//                 <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//                   <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                 </svg>
//                 <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//                   <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>
//             </div>
//             <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//               <div class="flex flex-shrink-0 items-center">
//                 <img class="logo h-10 w-auto" src={logo} alt="Your Company"/>
//               </div>
//               <div class="hidden sm:ml-6 sm:block">
//                 <div class="flex space-x-4">
//                   <Link 
//                   to="/" 
//                   onClick={() => setActiveButton('/')} 
//                   className={`rounded-md px-3 py-2 text-sm font-medium ${
//                     isActive('/')
//                       ? 'bg-red-700 text-white'
//                       : 'bg-gray-950 text-gray-300 hover:bg-gray-700 hover:text-white'
//                   }`}
//                 > Home </Link>
//                   <Link to="#" onClick={() => setActiveButton('/')}  
//                   className={`rounded-md px-3 py-2 text-sm font-medium ${
//                     isActive('#')
//                       ? 'bg-red-700 text-white'
//                       : 'bg-gray-950 text-gray-300 hover:bg-gray-700 hover:text-white'
//                   }`}
//                 >Team</Link>
//                   <Link to="/mylist" onClick={() => setActiveButton('/mylist')}  
//                   className={`rounded-md px-3 py-2 text-sm font-medium ${
//                     isActive('/mylist')
//                       ? 'bg-red-700 text-white'
//                       : 'bg-gray-950 text-gray-300 hover:bg-gray-700 hover:text-white'
//                   }`}
//                   >My list ({favoriteCount})</Link>
//                   <Link to="/about.us" onClick={() => setActiveButton('/about.us')}  
//                   className={`rounded-md px-3 py-2 text-sm font-medium ${
//                     isActive('/about.us')
//                       ? 'bg-red-700 text-white'
//                       : 'bg-gray-950 text-gray-300 hover:bg-gray-700 hover:text-white'
//                   }`}
//                   >About us</Link>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//         <div class="sm:hidden" id="mobile-menu">
//           <div class="space-y-1 px-2 pb-3 pt-2">
//             <Link to="/" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</Link>
//             <Link to="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-stone-900 hover:text-white">Team</Link>
//             <Link to="/mylist" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-stone-900 hover:text-white">My list</Link>
//             <Link to="/about.us" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-stone-900 hover:text-white">About us</Link>          
//           </div>
//         </div>
//       </nav>
//     )
// }

// export default NavigationMenu







