import Image from 'next/image';
import classNames from "classnames/bind";
import styles from './outTeam.module.scss';

import IMG from '@/public/avatar_default.jpg'
const cx = classNames.bind(styles)

function Item({ avatar, name, position }) {
    return (<div className={cx('wrapperItem')}>

        <div className={cx('avatar')}>
            <Image src={avatar || IMG} alt='avatar' className={cx('img')} />
        </div>
        <h3 className={cx('name')}>{name}</h3>
        <p className={cx('position')}>{position}</p>

    </div>);
}

export default Item;