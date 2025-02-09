import { createBrowserRouter } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import AboutUs from '../pages/AboutUs';
import MyList from '../pages/MyList';
import MovieDetails from '../components/MovieDetails'
import AuthenticationPage, {
  action as authAction,
} from '../pages/AuthenticationPage';
import Layout from '../components/Layout'
import { tokenLoader } from '../util/auth';
import { action as logoutAction } from '../pages/LogOut';
import User from '../pages/User'
import UserProfile from '../pages/UserProfile';


export const createRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      id: 'root',
      loader: tokenLoader,
      children: [
        { 
          index: true, 
          element: <MoviesList /> 
        },
        {
          path: 'auth',
          element: <AuthenticationPage />,
          action: authAction,
        },
        {
          path: '/details',
          element: <MovieDetails />,
        },
        {
          path: '/about.us',
          element: <AboutUs />,
        },
        {
          path: '/mylist',
          element: <MyList />,
        },
        {
          path: 'logout',
          action: logoutAction,
        },
        {
          path: '/user',
          element: <User />,
        },
        {
          path: '/editUser',
          element: <UserProfile />,
        }
      ],
    },
  ]);