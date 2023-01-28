import React from 'react'

import classNames from 'classnames/bind';
import styles from '@/styles/aboutUs.module.scss';

import { banners } from '@/public/images';
import { ItemInfoHome, BannerSlide } from '@/views';
import { Section } from '@/components';
import { OutTeamAboutUs } from '@/views';
const cx = classNames.bind(styles)

const index = () => {
    return (
        <>
            <div className={cx('wrapperBanner')}>
                <BannerSlide
                    className={cx('bodyBanner')}
                    imgBanner={[banners.banner4, banners.banner6, banners.banner7, banners.banner8]}
                />
                <ItemInfoHome className={cx('boxInfo')} />
            </div>
            <Section backgroundImg={banners.banner1.default.src} notPadding>
                <div className={cx('bannerAboutUs')}></div>
            </Section>
            <Section notPadding>
                <OutTeamAboutUs />
            </Section>
        </>
    )
}

export default index