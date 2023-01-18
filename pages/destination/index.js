import { BannerSlide } from '@/views';
import { banners } from '@/public/images';

import classNames from 'classnames/bind';
import style from '@/styles/destinations.module.scss';

const cx = classNames.bind(style);

function Destimation() {
    return (
        <div className={cx('wrapper')}>
            <BannerSlide imgBanner={[banners.resolt]} className={cx('bannerBody')} />
        </div>
    );
}

export default Destimation;
