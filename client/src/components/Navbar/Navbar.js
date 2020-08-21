import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='bg-green-700 w-full'>
            <div className='flex justify-center content-center py-2'>
                <p className='ml-3 mr-auto text-white text-xl'>
                    <Link to='/'>
                        LOGO
                    </Link>
                </p>
                <button className='mr-3 ml-auto text-white text-xl focus:outline-none hover:text-gray-400'
                        onClick={() => setIsOpen(!isOpen)}>
                    { isOpen ? <AiOutlineCloseCircle/> : <GiHamburgerMenu/> }
                </button>
            </div>
            {
                isOpen && (
                    <div className='flex flex-wrap bg-green-800 p-2'>
                        <div className='text-white text-center my-1 hover:bg-green-700 w-full rounded'>
                            <Link to='/nosotros'>
                                Nosotros
                            </Link>
                        </div>
                        <div className='text-white text-center my-1 hover:bg-green-700 w-full rounded'>
                            <Link to='/contacto'>
                                Contacto
                            </Link>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar;
