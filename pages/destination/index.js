import classNames from 'classnames/bind';
import style from '@/styles/destinations.module.scss';

import { BannerSlide, CategoryFilter } from '@/views';
import { banners } from '@/public/images';

import { categoryFillerAddress, tourTagsFilter } from '@/public/dataRender';

const cx = classNames.bind(style);

function Destimation() {
    return (
        <div className={cx('wrapper')}>
            <BannerSlide imgBanner={[banners.resolt]} className={cx('bannerBody')} />
            <CategoryFilter
                price
                day
                category={categoryFillerAddress}
                tourTags={tourTagsFilter}
                className={cx('boxFilter')}
            />
        </div>
    );
}

export default Destimation;
