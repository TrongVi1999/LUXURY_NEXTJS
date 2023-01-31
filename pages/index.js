import Head from 'next/head';
// import { Inter } from '@next/font/google';
import classNames from 'classnames/bind';
import styles from '@/styles/Home.module.scss';
import BlogHome from '@/views/BlogHome';
import Hottour from '@/views/Tour/Hottour';

import { banners } from '@/public/images';
import { ItemInfoHome, BannerSlide } from '@/views';

import Country from '@/views/Country/Country';
import Feedback from '@/views/Feedback';
import Introduce2 from '@/views/Introduce2';
import { Alltour } from './api/CallAPI';


const cx = classNames.bind(styles);

export default function Home() {


    return (
        <>
            <Head>
                <title>Vietnam DMC | Wellness | Luxury | MICE | Responsible | Packages | Indochina packages</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/images/logo.png" />
            </Head>
            <div className={cx('wrapperBanner')}>
                <BannerSlide
                    className={cx('bodyBanner')}
                    titleBanner={'south asia'}
                    textTop={'Luxury tailor-made tours to'}
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

