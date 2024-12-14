import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar';
import Footer from '../pages/Shared/Footer';

const MainLayout = () => {
    return (
        <div className='container w-11/12 mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;