import Head from 'next/head';
import classNames from 'classnames/bind';
import styles from '@/styles/Home.module.scss';
import BlogHome from '@/views/BlogHome';
import Hottour from '@/views/Tour/Hottour';

import { banners } from '@/public/images';
import { ItemInfoHome, BannerSlide } from '@/views';
import Logo from '@/asset/images/LogoFN1.png'
import Country from '@/views/Country/Country';
import Feedback from '@/views/Feedback';
import Introduce2 from '@/views/Introduce2';
import Headpage from '@/components/Head/head';



const cx = classNames.bind(styles);

export default function Home() {
    return (
        <>
            <Head>
                <title>Vietnam Luxury Tours - Incentive Tailor-made Trips</title>
                <meta name="description" content="Vietnam Luxury Tours I Wellness Vietnam I Adventure Travel & Incentive Tailor-made Trips" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/images/LogoFN1.png" />
                <link rel="canonical" href="https://www.luxuryvietravel.com/" />
            </Head>
            <div className={cx('wrapperBanner')}>
                <BannerSlide
                    className={cx('bodyBanner')}
                    titleBanner={'& BE SPOKE TOURS TO VIETNAM & SOUTHEAST ASIA'}
                    textTop={'Luxury tailor-made'}
                    imgBanner={[banners.banner4, banners.banner6, banners.banner7, banners.banner8]}
                />
                <ItemInfoHome className={cx('boxInfo')} />
            </div>

            <Introduce2 />
            <Country />
            <Hottour />
            <BlogHome />
            <Feedback />
        </>
    );
}

