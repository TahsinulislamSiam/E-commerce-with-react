import React from 'react'
import Logo from "../assets/Logo.png"
import { CiSearch } from "react-icons/ci";

import { FaCaretDown, FaCartShopping } from 'react-icons/fa6';

const Menu=[
    {
        id:1,
        name:"Home",
        link:"/#"

    },
    {
        id:2,
        name:"Top Rated",
        link:"/#" 
    },
    {
        id:3,
        name:"Kids wear",
        link:"/#"
    },
    {
        id:4,
        name:"Men Wear",
        link:"/#"
    },
    {
        id:5,
        name:"Electronics",
        link:"/#"
    }
]

const DropdownLinks=[

    {   
        id:1,
        name:"Trending Product",
        link:"/#",
    },
    {
        id:2,
        name:"Best selling",
        link:"/#",
    },
    {
        id:3,
        name:"Top rated",
        link:"/#",
    }
];





const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white font-serif '>
        {/* upper Navbar */}
        <div className='bg-orange-300 py-2'>
            <div className='container flex justify-between items-center '>
                <div className='px-5'>
                    <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2 '>
                        <img className='w-10 uppercase' src={Logo} alt="Logo" />
                        <h1>Srity's Cloths</h1>
                    </a>
                </div>
                {/* search bar and order button */}
                <div>
                    <div className='group relative hidden sm:block'>
                        <input type="text" placeholder='search now' className='text-black w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-500 rounded-full border border-amber-700 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-800' />
                        <CiSearch
                        className='text-gray-500 group-hover:text-red-500 absolute top-1/2 -translate-y-2 right-3'
                        />
                    </div>
                </div>
                {/* order button */}
                <button onClick={(()=>alert("Order not availble yet!"))}
                    className='bg-gradient-to-r from-orange-500 to-orange-300 transition-all duration-100 text-white py-1 px-4 rounded-full hover:text-black items-center gap-3'
                    >
                    <span className='group-hover:block hidden transition-all duration-200'>Order

                    </span>
                    <FaCartShopping/>
                </button>
            </div>
        </div>
        {/* lower Navbar */}
        <div className='bg-white text-black border-b border-rose-400'>
            <ul className='sm:flex hidden items-center gap-4 justify-between'>
                {
                    Menu.map((data)=>(
                        <li key={data.id}>
                            <a href={data.link}
                            className='inline-block px-4 hover:bg-orange-500 duration-200 hover:rounded-full'
                            >{data.name}</a>
                        </li>
                    ))
                }
               
            </ul>
        </div>
    </div>
  )
}

export default Navbar