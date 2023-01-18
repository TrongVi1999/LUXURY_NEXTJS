import classNames from 'classnames/bind';
import style from './item.module.scss';

import Image from 'next/image';

const cx = classNames.bind(style);

function ItemInfoHome({ data, id }) {
    const clases = cx('wrapper', { backgroundBlack: id % 2 === 0 });

    return (
        <div className={clases}>
            <div className={cx('boxTitle')}>
                <Image src={data.icon} alt="bannerError" className={cx('icon')} />
                <h2 className={cx('title')}>{data.title}</h2>
            </div>
            <p className={cx('content')}>{data.content}</p>
        </div>
    );
}

export default ItemInfoHome;
