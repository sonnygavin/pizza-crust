import React from 'react';
import '../NavBar/NavBar.css'

export default function NavBar() {
    return (
        <header>
            <div className='navbar'>
                <div className='container flex flex-row py-5 px-3'>
                    <div className='brand-logo basis-1/4 font-bold'>Pizza Crust</div>
                    <div className='nav-links basis-1/2 text-center'>
                        <ul>
                            <li>Why Food Bank?</li>
                            <li>Services</li>
                            <li>Pages</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='nav-buttons basis-1/4'>
                        <button>Sign In</button>
                    </div>
                </div>
            </div>
        </header>
    );
}