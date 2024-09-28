import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface DropdownProps {
    title: string;
    items: { name: string, href: string }[];
    isOpen: boolean;
    toggleMenu: () => void;
}



const DropdownHamburger: React.FC<DropdownProps> = ({ title, items, isOpen, toggleMenu }) => {
    const pathname = usePathname();

    return (
        <>
            {/* Başlık */}
            <li className="p-4  border-b border-gray-700 cursor-pointer flex justify-between items-center font-light text-sm" onClick={toggleMenu}>
                {title}
                <FaChevronDown className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all ease-in-out duration-500`} />
            </li>

            {/* Alt Menü - Dinamik Liste */}
            {isOpen && (
                <ul className="ml-4">
                    {items.map((item, index) => (
                        <li key={index} className="p-2">
                            <Link href={item.href} className="font-extralight text-xs transition-all duration-300">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>


    );
};

export default DropdownHamburger;
