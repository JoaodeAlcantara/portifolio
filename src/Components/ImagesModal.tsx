import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { IoClose } from "react-icons/io5";
import ek1 from '../assets/ekhytera/Captura de tela 2025-10-07 105914.png';
import ek2 from '../assets/ekhytera/Captura de tela 2025-10-07 110142.png';
// ---
import wc1 from '../assets/webcarros/Captura de tela 2025-10-09 110406.png';
import wc2 from '../assets/webcarros/Captura de tela 2025-10-09 110431.png';
import wc3 from '../assets/webcarros/Captura de tela 2025-10-09 110451.png';
import wc4 from '../assets/webcarros/Captura de tela 2025-10-09 110510.png';
import wc5 from '../assets/webcarros/Captura de tela 2025-10-09 110639.png';
import wc6 from '../assets/webcarros/Captura de tela 2025-10-09 110702.png';


//@ts-expect-error: Swiper CSS types are not available
import 'swiper/css';
//@ts-expect-error: Swiper CSS types are not available
import 'swiper/css/navigation';
//@ts-expect-error: Swiper CSS types are not available
import 'swiper/css/pagination';
//@ts-expect-error: Swiper CSS types are not available
import 'swiper/css/scrollbar';

interface ImageModalProps {
    name: string;
    isOpen: boolean;
    onClose: () => boolean;
}

const images = {
    ekhytera: [ek1, ek2],
    webcarros: [wc1, wc2, wc3, wc4, wc5, wc6],
    DevChat: [],
    "Lista de Tarefas": []
}

function ImageModal({name, isOpen, onClose}: ImageModalProps) {
    const [slidesPerView, setSlidesPerView] = useState<number>(1);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setSlidesPerView(1);
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(1);
            } else {
                setSlidesPerView(1);
            }
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!isOpen) return null;

    return (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
                <div className="relative bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
                    <div className="flex items-center justify-between p-4 border-b">
                        <h2 className="text-xl font-semibold text-gray-800">
                            {name}
                        </h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                        >
                            <IoClose size={24} />
                        </button>
                    </div>

                    <div className="p-4">
                        <Swiper
                            modules={[Navigation, Pagination]}
                            slidesPerView={slidesPerView}
                            spaceBetween={20}
                            navigation={true}
                            pagination={{ 
                                clickable: true,
                                dynamicBullets: true 
                            }}
                            className="swiper-container"
                        >
                            {images.webcarros.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex justify-center">
                                        <img 
                                            src={image} 
                                            alt={`${name} - Imagem ${index + 1}`}
                                            className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-lg object-contain"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div 
                    className="absolute inset-0 -z-10"
                    onClick={onClose}
                />
            </div>
    );
}

export default ImageModal;