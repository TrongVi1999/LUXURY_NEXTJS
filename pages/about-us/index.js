import React from 'react'

import classNames from 'classnames/bind';
import styles from '@/styles/aboutUs.module.scss';

import { banners } from '@/public/images';
import { ItemInfoHome, BannerSlide } from '@/views';
import { Section } from '@/components';
import { OutTeamAboutUs } from '@/views';
import AboutVideo from '@/views/Aboutus/Video';
import History from '@/views/Aboutus/History';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import ContactUs from '@/views/Aboutus/contactUs';

const cx = classNames.bind(styles)

const index = () => {
    return (
        <>
            <div className={cx('wrapperBanner')}>
                <BannerIMG className={cx('bodyBanner')} bg='bg' title={"about vnxpedia"} descrip={"The tours featured throughout our website are intended to give you ideas for whats possible when you travel with us. Treat them simply as inspiration"} img={banners.banner4} crumb={{ title: 'About' }} crumbStyle2 />

                {/* <div style={{ width: "100%", padding: "40rem", backGroundColor: 'black' }}> */}

                <ItemInfoHome className={cx('boxContact')} />
                {/* </div> */}
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