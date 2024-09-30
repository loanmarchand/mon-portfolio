import { Outlet } from 'react-router-dom';
import Header from '../containers/Header';
import Footer from '../containers/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-black to-blue-600">
      <Header />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
