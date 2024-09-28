import React from 'react';
import Link from 'next/link'; // Eğer Next.js kullanıyorsan

// Menü öğeleri için TypeScript tipi
interface NavItemProps {
    icon: React.ReactNode;
    text?: string;
    href: string;
    isEmail?: boolean;
}

const NavItemComponent: React.FC<NavItemProps> = ({ icon, text, href, isEmail }) => {
    return (
        <div className='flex flex-row items-center justify-between gap-1 border-r border-gray-100 border-opacity-20 p-2 px-4 '>
            {icon}
            {isEmail ? (
                <a href={href} className="link ">
                    {text}
                </a>
            ) : text ? (
                <Link className={`link  `} href={href}>
                    {text}
                </Link>
            ) : <></>}
        </div>
    );
};

export default NavItemComponent;
