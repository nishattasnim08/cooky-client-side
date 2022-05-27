import React from 'react';
import './Header.css'
import icon from '../../../images/icons/utensils-solid.png';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import { signOut } from 'firebase/auth';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <Loading />
    }
    if (user) {
        console.log(user.displayName);
    }
    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><a href='/home/#tools'>Tools</a></li>
        <li><a href='/home/#reviews'>Reviews</a></li>
        <li><a href='/home/#subscribe'>Subscribe</a></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li tabindex="0">
            <Link to='/dashboard' class="justify-between">
                Dashboard
                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </Link>
            <ul class="p-2">
                <li><Link to='/myOrders'>My Orders</Link></li>
                <li><Link to='/addReview'>Add Review</Link></li>
                <li><Link to='/manageOrders'>Manage Orders</Link></li>
                <li><Link to='/addProduct'>Add Product</Link></li>
                <li><Link to='/makeAdmin'>Make Admin</Link></li>
                <li><Link to='/manageProducts'>Manage Products</Link></li>
                <li><Link to='/myProfile'>My Profile</Link></li>
            </ul>
        </li>
    </>

    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>

                    <Link to='/' class="btn btn-ghost normal-case text-xl"><img class="w-5 m-2" src={icon} alt="" /> Cooky</Link>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div class="navbar-end space-x-5">
                    {user?
                    <>
                    <p class="">{user.displayName}</p>
                    <p onClick={()=>  signOut(auth)} class="btn">Log Out</p>
                    </>
                    :
                    <>
                    <Link to='/signUp' class="btn">Sign Up</Link>
                    <Link to='/logIn' class="btn">Log In</Link>
                    </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;