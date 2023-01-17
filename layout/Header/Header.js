import React from 'react';

import classNames from 'classnames/bind';
import style from './header.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import Menu from './Menu';

import images from '@/styles/images';

const cx = classNames.bind(style);

const Header = () => {
    console.log(images);

    return (
        <div className={cx('wrapper')}>
            <Link href={'/'}>
                <Image src={images.LOGO} alt={'errorLogo'} width={100} height={40} priority className={cx('logo')} />
            </Link>
            <Menu />
        </div>
    );
};

export default Header;
