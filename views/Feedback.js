import Image from 'next/image';
import React from 'react';
import feedback from '../public/feedback.png';
import style from './feedback.module.scss';
import classNames from 'classnames/bind';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const cx = classNames.bind(style);

const Feedback = () => {
    return (<>
        <div className={cx('container')}>
            <div className={cx('text')}>
                <div> &ldquo;</div>

                <p>
                    Phasellus lacinia fermentum bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    Sed ullamcorper sapien lacus, eu posuere odio luctus non. Nulla lacinia, eros vel fermentum
                    consectetur, risus p
                </p>
                <h5 className={cx('text-title')}>JOHN SMITH</h5>
            </div>
            <div className={cx('img')}>
                <Image src={feedback} alt='img-feedback' />
            </div>
        </div></>

    );
};

export default Feedback;
