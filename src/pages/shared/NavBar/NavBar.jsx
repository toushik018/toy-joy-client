import { Link, NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import logo from '../../../assets/nav_logo.png'

const NavBar = () => {
    const location = useLocation();

    const getNavLinkClass = (path) => {
        return classNames('mr-4', {
            'header-btn': location.pathname === path,
            'header-btn-2': location.pathname !== path,
        });
    };

    return (
        <div className="navbar bg-base-100 w-full lg:w-4/5 mx-auto mt-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink exact={true} to='/' className={getNavLinkClass('/')}>Home</NavLink>
                        <NavLink to='/blog' className={getNavLinkClass('/blog')}>Blog</NavLink>
                        <NavLink to='/register' className={getNavLinkClass('/register')}>Register</NavLink>
                    </div>
                </div>
                <Link to="/" className="flex items-center text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <img src={logo} alt="Logo" className="h-24 w-52 mr-2 p-1" />
                </Link>


            </div>
            <div className="navbar-center hidden lg:flex">
                <NavLink exact={true} to='/' className={getNavLinkClass('/')}>Home</NavLink>
                <NavLink to='/blog' className={getNavLinkClass('/blog')}>Blog</NavLink>
                <NavLink to='/register' className={getNavLinkClass('/register')}>Register</NavLink>
            </div>
            <div className="navbar-end">
                <NavLink to='/login' className={getNavLinkClass('/login')}>Login</NavLink>
            </div>
        </div>
    );
};

export default NavBar;
