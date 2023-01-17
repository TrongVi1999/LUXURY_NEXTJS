import React from 'react';

import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';
import style from '@/styles/header.module.scss';

import images from '@/styles/images';

const cx = classNames.bind(style);

const Header = () => {
    console.log(images);

    return (
        <div className={cx('wrapper')}>
            <Link href={'/'}>
                <Image src={images.LOGO} alt={'errorLogo'} width={100} height={40} priority className={cx('logo')} />
            </Link>
        </div>
    );
};

export default Header;
