import React from 'react';
import userIcon from '../../src/assets/user.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className=""></div>
            <div className="nav space-x-5">
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div className=''>
                    <img src={userIcon} alt="" />
                </div>
                    <button className='btn bg-black hover:bg-slate-700 text-white font-bold px-3 py-1 rounded-none'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;