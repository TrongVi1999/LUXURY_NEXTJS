import styles from '@/styles/Home.module.scss';
import BlogHome from '@/views/Home/BlogHome';
import Hottour from '@/views/Tour/Hottour';
import classNames from 'classnames/bind';
import Head from 'next/head';
import Link from 'next/link';
import Logo from '@/asset/iconlogo.png';
import { banners } from '@/public/images';
import { BannerSlide, ItemInfoHome } from '@/views';
import Country from '@/views/Country/Country';
import Feedback from '@/views/Home/Feedback';
import Introduce2 from '@/views/Home/Introduce2';


const cx = classNames.bind(styles);

export default function Home() {
    return (
        <>
            <Head>
                <title>Luxury Vietnam Travel Tailor-Made Tours,Holidays-Wellness-Adventure</title>
                <meta name="description" content="Luxury Vietravel provides tailor-made holidays & private tours for authentic experiences in Vietnam & Indochina (Laos, Cambodia). We are the leading DMC offering full travel services." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keyworks" content="Luxury ,Vietravel , tailor-made holidays , tours , travel , Vietnam and Indochina ( Laos, Cambodia)." />
                <meta name="google-site-verification" content="krE1CbLg9G4lw0eqa87jxVfBTSAlaCXGcljqLYxOsdE" />
                <meta charset="utf-8" />
                <meta property="og:title" content="Tailor-Made Tours, Holidays I Wellness I Adventure I Incentive I Luxury Vietravel" />
                <meta property="og:description" content="Luxury Vietravel specialises in tailor-made holidays & private tours for travellers seeking the real and authentic experiences in Vietnam and Indochina ( Laos, Cambodia). We are leading Vietnam Travel & DMC that offering full travel services" />
                <meta property="og:image" content={Logo.src} />
                <link rel="icon" type="image/png" sizes="20x20" href={Logo.src} />
                <link rel="canonical" href="https://www.luxuryvietravel.com/" />
                <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
                <link rel="stylesheet" href="https://unpkg.com/swiper/modules/effect-cube/effect-cube.min.css" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

            </Head>
            <div className={cx('wrapperBanner')}>
                <BannerSlide
                    className={cx('bodyBanner')}
                    titleBanner={'Adventure - Wellness - Incentive - Heritages Luxury Tours VietNam'}
                    textTop={'Luxury tailor-made'}
                    imgBanner={[banners.banner4, banners.bn00, banners.banner7, banners.bn01]}
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

