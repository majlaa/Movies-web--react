import './App.css';
import { RouterProvider } from 'react-router-dom'; // Import RouterProvider
import { createRouter } from './routes/router'; // Import your createRouter function
import NavigationMenu from './components/NavigationMenu'; // Import NavigationMenu
import Footer from './components/Footer';

function App() {
  // Create the router instance
  const router = createRouter();

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;





// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Footer from './components/Footer'
// import NavigationMenu from './components/NavigationMenu';
// import MoviesList from './components/MoviesList';
// import AboutUs from './pages/AboutUs';
// import MyList from './pages/MyList';
// import MovieDetails from './components/MovieDetails'
// import AuthenticationPage, {
//   action as authAction,
// } from './pages/AuthenticationPage';
// import { Outlet } from 'react-router-dom';

// function Layout() {
//   return (
//     <>
//       <NavigationMenu />
//       <main>
//         <Outlet />
//       </main>
//       <Footer />
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Use Layout for shared components */}
//         <Route path="/" element={<Layout />}>
//           <Route index element={<MoviesList />} />
//           <Route path="mylist" element={<MyList />} />
//           <Route path="details" element={<MovieDetails />} />
//           <Route path="about.us" element={<AboutUs />} />
//           <Route path="/auth" element={<AuthenticationPage  /> action: authAction,} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;