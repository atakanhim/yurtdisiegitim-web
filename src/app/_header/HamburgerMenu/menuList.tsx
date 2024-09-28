import Link from 'next/link';
import React, { useState } from 'react'
import Image from 'next/image';
import profilePic from '@/images/images.jpeg'
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaChevronDown, FaChevronUp, FaXmark } from "react-icons/fa6";
import DropdownHamburger from './dropdownhamburger';
import { dilOkullariItems, ulkeRehberiItems, universiteItems, vizeRehberiItems, yazOkullariItems, yuksekLisansItems } from '@/data/arrays';

interface Props {
    toggleMenu: () => void;
}


const MenuList: React.FC<Props> = ({ toggleMenu }) => {
    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({
        dilOkullari: false,
        universite: false,
        yuksekLisans: false,
        yazOkullari: false,
        ulkeRehberi: false,
        vizeRehberi: false,
    });
    // Tüm menülerin kapalı olup olmadığını kontrol eden bir fonksiyon
    const areAnyMenusOpen = (newOpenMenus: Object) => {
        return Object.values(newOpenMenus).some(value => value === true);
    };

    const toggleListMenu = (menuName: string) => {
        setOpenMenus((prev) => {
            const newOpenMenus = {
                ...prev,
                [menuName]: !prev[menuName],
            };

            // Scroll yönetimi
            if (areAnyMenusOpen(newOpenMenus)) {
                document.body.style.overflow = 'auto'; // Scroll'u geri getir
            } else {
                document.body.style.overflow = 'hidden'; // Scroll'u gizle
            }

            return newOpenMenus;
        });




    };

    return (
        <>

            <div className=" bg-[#1E2434] text-white">
                <ul className='w-full'>
                    <li className="p-4  text-sm  border-b border-gray-700 cursor-pointer">ANASAYFA</li>
                    {/* Yüksek Lisans Menüsü */}
                    <DropdownHamburger
                        title="DİL OKULLARI"
                        items={dilOkullariItems}
                        isOpen={openMenus.dilOkullari}
                        toggleMenu={() => toggleListMenu('dilOkullari')}
                    />
                    <DropdownHamburger
                        title="UNİVERSİTE"
                        items={universiteItems}
                        isOpen={openMenus.universite}
                        toggleMenu={() => toggleListMenu('universite')}
                    />
                    <DropdownHamburger
                        title="YÜKSEK LİSANS"
                        items={yuksekLisansItems}
                        isOpen={openMenus.yuksekLisans}
                        toggleMenu={() => toggleListMenu('yuksekLisans')}
                    />
                    <DropdownHamburger
                        title="YAZ OKULLARI"
                        items={yazOkullariItems}
                        isOpen={openMenus.yazOkullari}
                        toggleMenu={() => toggleListMenu('yazOkullari')}
                    />
                    <DropdownHamburger
                        title="ÜLKE REHBERİ"
                        items={ulkeRehberiItems}
                        isOpen={openMenus.ulkeRehberi}
                        toggleMenu={() => toggleListMenu('ulkeRehberi')}
                    />
                    <DropdownHamburger
                        title="VİZE REHBERİ"
                        items={vizeRehberiItems}
                        isOpen={openMenus.vizeRehberi}
                        toggleMenu={() => toggleListMenu('vizeRehberi')}
                    />



                    {/* İletişim */}
                    <li className="p-4 text-sm">İLETİŞİM</li>
                </ul>
            </div>
        </>
    );

}

export default MenuList;
