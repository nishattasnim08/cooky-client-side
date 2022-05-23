import React from 'react';
import './Header.css'
import icon from '../../../images/icons/utensils-solid.png';

const Header = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Tools</a></li>
                            <li><a>Business Summary</a></li>
                            <li><a>Reviews</a></li>
                            <li><a>Best Seller</a></li>
                            <li><a>Subscribe</a></li>
                            <li tabindex="0">
                                <a class="justify-between">
                                    Dashboard
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul class="p-2">
                                    <li><a>My Orders</a></li>
                                    <li><a>Add Review</a></li>
                                    <li><a>My Profile</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <img class="w-5 white" src={icon} alt="" />
                    <a class="btn btn-ghost normal-case text-xl">Cooky</a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        <li><a>Home</a></li>
                        <li><a>Tools</a></li>
                        <li><a>Business Summary</a></li>
                        <li><a>Reviews</a></li>
                        <li><a>Best Seller</a></li>
                        <li><a>Subscribe</a></li>
                        <li tabindex="0">
                            <a>
                                Dashboard
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul class="p-2">
                                <li><a>My Orders</a></li>
                                <li><a>Add Review</a></li>
                                <li><a>My Profile</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div class="navbar-end space-x-5">
                    <a class="btn">Sign Up</a>
                    <a class="btn">Log In</a>
                </div>
            </div>
        </div>
    );
};

export default Header;