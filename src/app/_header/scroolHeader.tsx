import Link from 'next/link';
import React from 'react'

interface Props {
    isSticky: boolean;
}


const ScrollHeader: React.FC<Props> = ({ isSticky }) => {

    return (
        <div id="scrollHeader" className={`transition-transform duration-500 ${isSticky ? 'translate-y-0' : '-translate-y-full'} fixed w-full top-0 bg-white hidden customlg:fixed`}>
            <nav className='flex flex-row items-center justify-end gap-3 p-2 border border-b-black'>
                <Link className={`link p-2 border rounded-full border-gray-800`} href="/">Home</Link>
                <Link className={`link p-2 border rounded-full border-gray-800`} href="/hakkimizda">hakkimizda</Link>
            </nav>
        </div>
    );

}

export default ScrollHeader;
