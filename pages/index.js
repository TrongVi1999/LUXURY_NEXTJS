import styles from '@/styles/Home.module.scss';
import BlogHome from '@/views/BlogHome';
import Hottour from '@/views/Tour/Hottour';
import classNames from 'classnames/bind';
import Head from 'next/head';

import Logo from '@/asset/iconlogo.png';
import { banners } from '@/public/images';
import { BannerSlide, ItemInfoHome } from '@/views';
import Country from '@/views/Country/Country';
import Feedback from '@/views/Feedback';
import Introduce2 from '@/views/Introduce2';


const cx = classNames.bind(styles);

export default function Home() {
    return (
        <>
            <Head>
                <title>Vietnam Luxury Tours - Incentive Tailor-made Trips</title>
                <meta name="description" content="Vietnam Luxury Tours I Wellness Vietnam I Adventure Travel & Incentive Tailor-made Trips" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/png" sizes="20x20" href={Logo.src} />
                <link rel="canonical" href="https://www.luxuryvietravel.com/" />
            </Head>
            <div className={cx('wrapperBanner')}>
                <BannerSlide
                    className={cx('bodyBanner')}
                    titleBanner={'Adventure - Wellness - Incentive - Heritages Tours VietNam'}
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

