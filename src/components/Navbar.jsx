import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='m-4 min-h-20 bg-gradient-to-r from-violet-700 to-violet-900 flex justify-between items-center'>

            <img className='w-20' src="./src/assets/logo.webp" alt="Logo" />

            <ul className='w-1/2 mx-10 flex flex-row justify-between'>

                <Link to={'/'}>
                    <li className='text-white hover:text-violet-200'>Home</li>
                </Link>

                <Link to={'/about'}>
                    <li className='text-white hover:text-violet-200'>About</li>
                </Link>
                <Link to={'/contact'}>
                    <li className='text-white hover:text-violet-200'>Contact</li>
                </Link>

            </ul>
        
        </nav>
    )
}
