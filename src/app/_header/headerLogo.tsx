import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import profilePic from '@/images/logoyurtdisi.png'

interface Props {

}


const HeaderLogo: React.FC<Props> = ({ }) => {

    return (

        <div className='flex items-center justify-center w-28 sm:w-52  '>
            <Image
                src={profilePic}
                alt="Picture of the author"


                blurDataURL="data:..."
                placeholder="blur"
                className='rounded-full p-2 '
            /></div>

    );

}

export default HeaderLogo;
