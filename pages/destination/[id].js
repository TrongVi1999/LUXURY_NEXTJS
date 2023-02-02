import classNames from 'classnames/bind';
import style from '@/styles/destinations.module.scss';
import Tourcard2 from '@/views/Tourcard/Tourcard2';
import IMG from '@/public/images/tour1.jpg';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Section, Pagination } from '@/components';
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
const datafa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function Destimation() {
    const router = useRouter();

    const [page, setPage] = useState(1)

    const lastIndex = page * 4;
    const firstIndex = lastIndex - 4;
    return (
        <div className={cx('wrapper')}>
            <BannerSlide imgBanner={[banners.resolt]} className={cx('bannerBody')} titleBanner={router.query.id} classNameTitle={cx('titleBanner')} textBottom={"Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content"} />
            <Section maxWidth={1170} className={cx('container')}>
                <div className={cx('list')}>
                    <div className={cx('sort')}>
                        <div className={cx('sortContent')}>
                            <button>Sort by</button>
                            <button>Filter by</button>
                        </div>
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

                    <Pagination totalPosts={datafa.length} postPerPage={4} setPage={setPage} pageIndex={page} />

                </div>
                <CategoryFilter
                    price
                    day
                    category={categoryFillerAddress}
                    tourTags={tourTagsFilter}
                    className={cx('boxFilter')}
                />
            </Section>
        </div>
    );
}

export default Destimation;
