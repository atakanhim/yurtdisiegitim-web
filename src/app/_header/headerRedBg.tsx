import NavItemComponent from '@/components/navItemComponent';
import WhatsappButton from '@/components/whatsappButton';
import React from 'react';
import { CiMail, } from "react-icons/ci";
import { FaGoogle, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6';

interface Props {
    header1Ref: React.RefObject<HTMLDivElement>;
}

const HeaderRedBg: React.FC<Props> = ({ header1Ref }) => {
    // Menü öğeleri için TypeScript tipi
    interface LeftNavItem {
        icon: React.ReactNode;
        text: string;
        href: string;
        isEmail?: boolean;
    }
    interface RightNavItem {
        icon: React.ReactNode;
        href: string;
    }

    // Dinamik veri
    const leftNavItems: LeftNavItem[] = [
        {
            icon: <CiMail />,
            text: 'info@atakanyurtdisiegitim.com',
            href: 'mailto:info@atakanyurtdisiegitim.com',
            isEmail: true,
        },
        {
            icon: <CiMail />,
            text: 'Hakkımızda',
            href: '/hakkimizda',
        },
        {
            icon: <CiMail />,
            text: 'Blog',
            href: '/Blog',
        },
    ];
    const rightNavItem: RightNavItem[] = [
        {
            icon: <FaGoogle size={20} />,
            href: 'mailto:info@atakanyurtdisiegitim.com',
        },
        {
            icon: <FaInstagram size={20} />,
            href: '/hakkimizda',
        },
        {
            icon: <FaTwitter size={20} />,
            href: '/Blog',
        },
        {
            icon: <FaYoutube size={20} />,
            href: '/Blog',
        }
    ];
    return (
        <div ref={header1Ref} className='hidden sm:flex   justify-center customlg:justify-between  bg-red-500 border-b-black px-10 '>

            {/* sol taraf */}
            <nav className='flex gap-3 text-white py-2 '>
                {leftNavItems.map((item, index) => (
                    <NavItemComponent
                        key={index}
                        icon={item.icon}
                        text={item.text}
                        href={item.href}
                        isEmail={item.isEmail}
                    />
                ))}
            </nav>
            <nav className='hidden customlg:flex  text-white'>
                {rightNavItem.map((item, index) => (
                    <NavItemComponent

                        key={index}
                        icon={item.icon}
                        href={item.href}
                    />
                ))}
                <WhatsappButton />
            </nav>


        </div>
    );
}

export default HeaderRedBg;
