import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import profilePic from '@/images/images.jpeg'

interface Props {

}


const HeaderDestekHatti: React.FC<Props> = ({ }) => {

    return (
        <>
            <div className='flex items-center justify-center  '>
                <Image
                    src={profilePic}
                    alt="Picture of the author"
                    width={60}

                    blurDataURL="data:..."
                    placeholder="blur"
                    className='rounded-full p-2 '
                /></div>
            <div className='flex flex-col justify-center items-start w-32'>

                <p className='text-red-500 font-semibold text-xs sm:text-sm'>DESTEK HATTI</p>
                <p className='font-semibold text-xs sm:text-sm'>0850 302 1767</p>
            </div>

        </>
    );

}

export default HeaderDestekHatti;
