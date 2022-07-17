import React from 'react';
import '../NavBar/NavBar.css'
import BrandLogo from '../NavBar/assets/pizza-crust-logo-1.svg'

export default function NavBar() {
    return (
        <nav className='bg-white shadow-lg'>
            <div className='navbar'>
                <div className='container flex flex-row py-5 px-3'>
                    <div className='brand-logo basis-1/4 flex flex-row'>
                        <div className="brand-img">
                            <img className='brand-logo-img' src={BrandLogo} alt="Pizza Crust Logo" width='34' height='34' />
                        </div>
                        <div className="brand-text">
                            <h1 className='brand-logo-text font-black align-middle'>Pizza Crust</h1>
                        </div>
                    </div>
                    <div className='nav-links basis-1/2 text-center align-middle'>
                        <ul className='flex flex-row'>
                            <li className='mx-5'>Why Pizza Crust?<span className='drop-down-icon'></span></li>
                            <li className='mx-5'>Menu<span className='drop-down-icon'></span></li>
                            <li className='mx-5'>Deals<span className='drop-down-icon'></span></li>
                            <li className='mx-5'>Contact<span className='drop-down-icon'></span></li>
                        </ul>
                    </div>
                    <div className='nav-buttons basis-1/4'>
                        <button className='rounded-md border border-red p-1'>Sign In</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}