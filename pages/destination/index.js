import { BannerSlide } from '@/views';
import { banners } from '@/public/images';

import classNames from 'classnames/bind';
import style from '@/styles/destinations.module.scss';
import Tourcard2 from '@/views/Tourcard/Tourcard2';
import IMG from '@/public/images/tour1.jpg';

const cx = classNames.bind(style);
const data = {
    img: IMG,
    title: 'Ha long bay day cruise - paradise explore',
    rate: 4.7,
    ratecount: 100,
    book: 999,
    long: 15,
    price: 3000,
    sale: 50,
    destination: 'Sung Sot Cave -Luon Cave -Soi Sim Beach',
    highlight: ['Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam'],
};

function Destimation() {
    return (
        <div className={cx('wrapper')}>
            <BannerSlide imgBanner={[banners.resolt]} className={cx('bannerBody')} />
            <div className={cx('container')}>
                <div className={cx('list')}>
                    <div className={cx('sort')}>
                        <p>Sort by . Filter by .</p>
                        <span>Showing 1 - 10 of 30 products</span>
                    </div>
                    <div className={cx('tour-list')}>
                        <Tourcard2 data={data} />
                        <Tourcard2 data={data} />
                        <Tourcard2 data={data} />
                        <Tourcard2 data={data} />
                        <Tourcard2 data={data} />
                        <Tourcard2 data={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destimation;
