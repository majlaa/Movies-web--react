import { Outlet } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';
import Footer from './Footer';
const Layout = () => {
  return (
    <div>
      <NavigationMenu />
      <main>
        {/* Render child routes here */}
        <Outlet /> {/* Outlet options: */}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;