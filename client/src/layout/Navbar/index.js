import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <header>
        <div className='container'>
            <Link to='/'>
                <h1 id='main-title'>My Workout Pal</h1>
            </Link>
        </div>
    </header>
  );
};

export default Navbar;
