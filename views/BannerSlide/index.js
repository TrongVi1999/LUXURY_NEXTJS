import classNames from 'classnames/bind';
import style from './bannerSlide.module.scss';

import { SwiperSlide, Swiper } from 'swiper/react';

import { EffectFade, Autoplay } from 'swiper';

import Banner from './Banner';
import { Input, Button } from '@/components';
import { CiStar } from 'react-icons/ci';
import { MdOutlinePlace } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const cx = classNames.bind(style);

function BannerSlide({ imgBanner, className }) {
    return (
        <>
            <Swiper
                modules={[EffectFade, Autoplay]}
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                className={cx('wrapper', { [className]: className })}
            >
                {imgBanner?.map((img, index) => (
                    <SwiperSlide key={index}>
                        <Banner className={cx('bannerMain')} image={img} />
                    </SwiperSlide>
                ))}
                <div className={cx('sheaderBox')}>
                    <p className={cx('text')}>Luxury tailor-made tours to</p>
                    <h1 className={cx('titleHome')}>south asian</h1>
                    <div className={cx('boxSearch')}>
                        <Input
                            type="text"
                            className={cx('input1', 'input')}
                            leftIcon={<MdOutlinePlace />}
                            placeholder="Place"
                        />
                        <Input
                            type="text"
                            className={cx('input2', 'input')}
                            leftIcon={<CiStar />}
                            placeholder="Travel Style"
                        />
                        <Button className={cx('button')}>Search Tour</Button>
                    </div>
                </div>
            </Swiper>
        </>
    );
}

export default BannerSlide;
