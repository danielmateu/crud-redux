import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
    return (
        <nav className='p-10 bg-green-300 flex justify-between items-center shadow-lg'>
            <Link to='/'>
                <h1 className='text-4xl capitalize text-gray-400 hover:text-gray-500 transition-colors'>crud - react, redux, rest api & axios</h1>
            </Link>
            <Link to={'/productos/nuevo'} className='text-white transition-all bg-orange-300 hover:bg-orange-400 p-2 rounded-xl hover:shadow-md'>agregar producto +
            </Link>
        </nav>
    )
}
