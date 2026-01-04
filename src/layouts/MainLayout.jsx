import Navbar from '../components/navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
