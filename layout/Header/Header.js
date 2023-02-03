import React, { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import style from './header.module.scss';
import Image from 'next/image';

import Link from 'next/link';
import { images } from '@/public/images';
import Menu from './Menu';
import { Button } from '@/components';

import { AiOutlineUser, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import { MdGTranslate } from 'react-icons/md';
import Login from '@/components/Login';
import Signup from '@/components/SignUp';
import Searchkey from '@/views/Searchkey/Searchkey';

const cx = classNames.bind(style);

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showUser, setShowUser] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [bgheader, setbgheader] = useState('');
    const [signup, setsignup] = useState(false);
    const [translate, settranslate] = useState('none');

    const handelShowMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const handelScroll = () => {
            if (showMenu) {
                setShowMenu(false);
            }
            if (window.scrollY > 70) {
                setbgheader('act')
            }
            if (window.scrollY == 0) {
                setbgheader('');
            }
        };

        window.addEventListener('scroll', handelScroll);

        return () => {
            window.removeEventListener('scroll', handelScroll);
        };
    }, [showMenu]);

    return (
        <div className={cx(`header`)} id={bgheader}>
            <div className={cx(`wrapper`)}>
                <Link href={'/'}>
                    <Image src={images.LOGO} alt={'errorLogo'} priority className={cx('logo')} />
                </Link>
                <Menu className={'menubody'} showmenu={showMenu} menuBgr={bgheader} />
                <div className={cx('itemRight')}>
                    <div className={cx('gg-trans')}>
                        <MdGTranslate className={cx('icon', { active: translate })} onClick={() => translate == 'none' ? settranslate('block') : settranslate('none')} />
                        <div id="google_translate_element" style={{ display: translate }}></div>
                    </div>

                    <div className={cx('user')}>
                        <AiOutlineUser className={cx('icon', { active: showUser })} />
                        <div className={cx('login')}>
                            <Login Click={setsignup} />
                        </div>
                    </div>
                    <div className={cx('search-icon')}>
                        <AiOutlineSearch className={cx('icon', { active: showSearch })} onClick={() => showSearch ? setShowSearch(false) : setShowSearch(true)} />
                    </div>

                    <AiOutlineMenu className={cx('icon', 'menuIcon', { active: showMenu })} onClick={handelShowMenu} />

                    <Button className={cx('button')}>hotline: 0338204170</Button>
                    {showSearch && <Searchkey />}
                </div>
            </div>
            {signup && <Signup Click={setsignup} />}


        </div>
    );
};

export default Header;
