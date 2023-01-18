import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Pagination, Autoplay, Navigation } from 'swiper';

function SwiperSlideComp({ children, className, isnavigation = false }) {
    return (
        <>
            <Swiper
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                effect={'fade'}
                navigation={isnavigation}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className={className}
            >
                {children}
            </Swiper>
        </>
    );
}

export default SwiperSlideComp;
