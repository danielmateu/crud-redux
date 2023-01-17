import React from 'react'
import { Link } from 'react-router-dom'


export const Header = () => {
    return (
        <nav className='p-10 bg-green-300 flex flex-col lg:flex-row justify-between items-center shadow-lg'>
            <Link to='/'>
                <h1 className='text-4xl capitalize text-gray-500 hover:text-gray-600 transition-colors'>crud - react, redux, rest api & axios</h1>
            </Link>
            <Link to={'/productos/nuevo'} className='text-white mt-2 lg:mt-0 transition-all bg-orange-300 hover:bg-orange-400 p-2 rounded-xl hover:shadow-md'>agregar producto
            </Link>
        </nav>
    )
}
