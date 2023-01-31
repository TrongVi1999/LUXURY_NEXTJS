import classNames from 'classnames/bind';
import styles from './style.module.scss';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';

import 'swiper/css';

const contact = [{ title: 1 }, { title: 2 }, { title: 3 }]

const cx = classNames.bind(styles);

function ContactUs({ className }) {

    return (<div className={cx(className)}>
        <Swiper
            className={cx('bodyContactUs')}
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
                    slidesPerView: 3,
                },
            }}
        >
            {contact.map((item, index) => (
                <SwiperSlide key={index}>
                    {
                        <div className={cx('itemContact')}>{item.title}</div>
                    }
                </SwiperSlide>
            ))}

        </Swiper>
    </div>);
}

export default ContactUs;