import classNames from 'classnames/bind';
import style from '@/styles/destinations.module.scss';
import Tourcard2 from '@/views/Tourcard/Tourcard2';
import IMG from '@/public/images/tour1.jpg';
import { useRouter } from 'next/router';

import { BannerSlide, CategoryFilter } from '@/views';
import { banners } from '@/public/images';

import { categoryFillerAddress, tourTagsFilter } from '@/public/dataRender';

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
    const router = useRouter();
    return (
        <div className={cx('wrapper')}>
            <BannerSlide imgBanner={[banners.resolt]} className={cx('bannerBody')} titleBanner={router.query.id} classNameTitle={cx('titleBanner')} textBottom={"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content"} />
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
                <CategoryFilter
                    price
                    day
                    category={categoryFillerAddress}
                    tourTags={tourTagsFilter}
                    className={cx('boxFilter')}
                />
            </div>
        </div>
    );
}

export default Destimation;
