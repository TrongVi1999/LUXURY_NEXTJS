import classNames from 'classnames/bind';
import styles from './item.module.scss';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';

import 'swiper/css';

import ItemInfo from './itemInfo';

import { infoHomeFake } from '@/public/dataRender';

const cx = classNames.bind(styles);

function ItemInfoHome({ className }) {

    return (<>
        <Swiper
            className={cx(className)}
            modules={[Autoplay]}
            grabCursor={true}
            autoplay={{
                delay: 8000,
                disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView="auto"
            breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            }}
        >
            {infoHomeFake.map((item, index) => (
                <SwiperSlide key={index}>
                    <ItemInfo data={item} id={index + 1} />
                </SwiperSlide>
            ))}

        </Swiper>
    </>);
}

export default ItemInfoHome;