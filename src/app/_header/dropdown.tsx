import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface DropdownItem {
    name: string;
    href: string;
}

interface DropdownProps {
    title: string;
    items: DropdownItem[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
    const pathname = usePathname();

    return (
        <div className="relative group">
            {/* Ana başlık */}
            <Link
                className={`link group-hover:text-red-500 font-semibold text-xs 2xl:text-base text-gray-600 transition-all duration-300 `}
                href="#"
            >
                {title}
            </Link>
            {/* Dropdown Menü */}
            <div className="absolute hidden group-hover:block bg-white shadow-lg min-w-52">
                <ul className="py-2">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 hover:text-red-300 text-gray-600"
                        >
                            <Link href={item.href} className="font-semibold text-xs 2xl:text-base  transition-all duration-300">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>


    );
};

export default Dropdown;
