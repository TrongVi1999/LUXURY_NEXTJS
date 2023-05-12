import classNames from 'classnames/bind';
import style from './style.module.scss';
import Link from 'next/link';
import bnimg from '@/public/images/bnn0.jpg';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi'

const cx = classNames.bind(style);

const BannerNew = () => {
    return (
        <div className={cx('banner-new')}>
            <div className={cx('text-new')}>
                THE LUXURY WORLD EXPERTS
            </div>
            <div className={cx('find-new')}>
                <FiSearch />
                <input className={cx('input-new')} placeholder='Where will your next journey text you?' />
                <button className={cx('button-new')}>FIND ADVENTURES</button>
            </div>

        </div>
    )
}

export default BannerNew
