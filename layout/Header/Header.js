import React, { useState } from 'react';

import classNames from 'classnames/bind';
import style from './header.module.scss';
import Image from 'next/image';

import Link from 'next/link';
import { images } from '@/styles/images';
import Menu from './Menu';
import { Button } from '@/components';

import { AiOutlineUser, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';

const cx = classNames.bind(style);

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showUser, setShowUser] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const handelShowMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className={cx('header')}>
            <div className={cx('wrapper')}>
                <Link href={'/'}>
                    <Image src={images.LOGO} alt={'errorLogo'} priority className={cx('logo')} />
                </Link>
                <Menu className={'menubody'} showmenu={showMenu} />
                <div className={cx('itemRight')}>
                    <AiOutlineUser className={cx('icon', { active: showUser })} />
                    <AiOutlineSearch className={cx('icon', { active: showSearch })} />
                    <AiOutlineMenu className={cx('icon', { active: showMenu })} onClick={handelShowMenu} />
                    <Button className={cx('button')}>hotline: 0338204170</Button>
                </div>
            </div>
        </div>
    );
};

export default Header;
