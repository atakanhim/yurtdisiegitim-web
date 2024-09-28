import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import Dropdown from './dropdown';
import HeaderDestekHatti from './headerDestekHatti';
import HeaderLogo from './headerLogo';
import { FaHamburger } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import HamburgerMenu from './HamburgerMenu/hamburgerMenu';
import { dilOkullariItems, ulkeRehberiItems, universiteItems, vizeRehberiItems, yazOkullariItems, yuksekLisansItems } from '@/data/arrays';

interface Props {
    header2Ref: React.RefObject<HTMLDivElement>;
}


const HeaderFullScreen: React.FC<Props> = ({ header2Ref }) => {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen((prev) => {
            if (!prev) {
                document.body.style.overflow = 'hidden'; // Scroll'u gizle
            } else {
                document.body.style.overflow = 'auto';   // Scroll'u geri getir
            }
            return !prev;
        });
    };


    // Dil okulları listesi

    return (
        <div ref={header2Ref} className='flex  flex-row  justify-between  px-2'>

            <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />



            <div className='flex flex-row gap-2  '>
                <HeaderLogo />
                <nav className='hidden  customlg:flex flex-wrap gap-5 py-6'>
                    <Link className={`link ${pathname === '/' ? 'text-red-600' : ''}  hover:text-red-500 font-semibold text-gray-600 transition-all duration-300 text-xs 2xl:text-base  flex justify-center items-center `} href="/">ANASAYFA</Link>
                    {/* Dil Okulları Dropdown */}
                    <Dropdown title="DİL OKULLARI" items={dilOkullariItems} />
                    <Dropdown title="ÜNİVERSİTE" items={universiteItems} />
                    <Dropdown title="YÜKSEK LİSANS" items={yuksekLisansItems} />
                    <Dropdown title="YAZ OKULLARI" items={yazOkullariItems} />
                    <Dropdown title="ÜLKE REHBERİ" items={ulkeRehberiItems} />
                    <Dropdown title="VİZE REHBERİ" items={vizeRehberiItems} />
                    <Link className={`link ${pathname === '/iletisim' ? 'text-red-600' : ''} transition-all duration-300 hover:text-red-500 font-semibold text-gray-600 text-xs 2xl:text-base flex justify-center items-center`} href="/iletisim">İLETİŞİM</Link>
                </nav>
            </div>
            <div className='gap-2 flex flex-row'>
                <HeaderDestekHatti />
            </div>
        </div>
    );

}

export default HeaderFullScreen
