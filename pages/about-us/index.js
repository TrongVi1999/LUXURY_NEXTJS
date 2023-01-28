import React from 'react'

import classNames from 'classnames/bind';
import styles from '@/styles/aboutUs.module.scss';

import { banners } from '@/public/images';
import { ItemInfoHome, BannerSlide } from '@/views';
import { Section } from '@/components';
import { OutTeamAboutUs } from '@/views';
import AboutVideo from '@/views/Aboutus/Video';
import History from '@/views/Aboutus/History';

const cx = classNames.bind(styles)

const index = () => {
    return (
        <>
            <div className={cx('wrapperBanner')}>
                <BannerSlide
                    className={cx('bodyBanner')}
                    titleBanner={"about vnxpedia"}
                    textBottom={"The tours featured throughout our website are intended to give you ideas for whats possible when you travel with us. Treat them simply as inspiration"}
                    imgBanner={[banners.banner4]}
                    notSearch
                />
                <ItemInfoHome className={cx('boxInfo')} />
            </div>
            <History />
            <AboutVideo />
            <Section notPadding>
                <OutTeamAboutUs />
            </Section>
        </>
    )
}

export default index