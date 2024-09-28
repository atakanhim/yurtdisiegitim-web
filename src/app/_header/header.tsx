"use client";  // Sadece bu sayfanın client-side çalışması için ekleyin
import { useEffect, useRef, useState } from 'react';
import HeaderFullScreen from './headerFullScreen';
import HeaderRedBg from './headerRedBg';
import ScrollHeader from './scroolHeader';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const header1Ref = useRef<HTMLDivElement>(null);
    const header2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            // Calculate the height of the first two headers using refs
            const headerHeight = (header1Ref.current?.offsetHeight || 0) + (header2Ref.current?.offsetHeight || 0);
            if (window.scrollY > headerHeight) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {/* Fixed red header */}
            <HeaderRedBg header1Ref={header1Ref} />

            {/* Full Screen Header */}

            <HeaderFullScreen header2Ref={header2Ref} />

            {/* Scroll down header */}

            <ScrollHeader isSticky={isSticky} />

        </div>
    );
};

export default Header;
