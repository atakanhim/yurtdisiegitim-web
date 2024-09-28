import { FaArrowRight } from 'react-icons/fa';

const WhatsappButton: React.FC = () => {
    return (
        <div className='bg-green-500 flex font-bold w-[300px] justify-center items-center relative group'>
            <button className='px-2 relative z-10 group-hover:text-black transition-colors duration-300'>
                WHATSAPP CANLI DESTEK
            </button>
            <FaArrowRight className='relative z-10 transition-colors duration-300 group-hover:text-black' />
            {/* Arka plan animasyonu */}
            <div className='absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0' />
        </div>
    );
};

export default WhatsappButton;
