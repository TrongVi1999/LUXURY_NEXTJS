import React from 'react';

import classNames from 'classnames/bind';
import style from './header.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import Menu from './Menu';
import { Button } from '@/components';

import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import images from '@/styles/images';

const cx = classNames.bind(style);

const Header = () => {
    console.log(images);

    return (
        <div className={cx('header')}>
            <div className={cx('wrapper')}>
                <Link href={'/'}>
                    <Image
                        src={images.LOGO}
                        alt={'errorLogo'}
                        // width={100}
                        // height={40}
                        priority
                        className={cx('logo')}
                    />
                </Link>
                <Menu className={'menubody'} />
                <div className={cx('itemRight')}>
                    {/* <AiOul/> */}
                    <AiOutlineUser className={cx('icon')} />
                    <AiOutlineSearch className={cx('icon')} />
                    <Button className={'button'}>0338204170</Button>
                </div>
            </div>
        </div>
    );
};

export default Header;
