import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import profilePic from '@/images/images.jpeg'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaXmark } from "react-icons/fa6";
import MenuList from './menuList';

interface Props {
    isMenuOpen: boolean,
    toggleMenu: () => void;
}


const HamburgerMenu: React.FC<Props> = ({ toggleMenu, isMenuOpen }) => {


    return (
        <>
            <div className='flex customlg:hidden   p-2  items-center justify-start hover:cursor-pointer ' onClick={toggleMenu}>
                <GiHamburgerMenu className='text-base sm:text-3xl' />
            </div>
            {/* Menü sağ tarafındaki bosluk */}
            <div className={`absolute  customlg:hidden top-0 left-0 w-full min-h-screen h-auto bg-[#1E2434] ${isMenuOpen ? 'opacity-50  ' : 'opacity-0 -z-10'} transition-all duration-300 ease-in-out`} onClick={toggleMenu}>
            </div>
            {/* Soldan Gelen Menü */}
            <div className={`absolute customlg:hidden top-0 left-0 h-full w-full  m500:w-[300px]   bg-[#1E2434]  transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className={`'flex flex-col items-center justify-center  h-full text-white   relative `} >
                    <div className=' h-32'>logo</div>
                    <MenuList toggleMenu={toggleMenu} />







                    {/* Menü Kapatma Butonu */}
                    <button
                        className={`fixed top-4 right-4 text-white text-2xl transform  hover:rotate-180 transition-transform duration-500 ${isMenuOpen ? 'rotate-180  ' : 'rotate-0 '}`}
                        onClick={toggleMenu}
                    >
                        <FaXmark />
                    </button>
                </div>
            </div>
        </>
    );

}

export default HamburgerMenu;
