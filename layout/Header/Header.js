import React, { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import style from './header.module.scss';
import Image from 'next/image';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { images } from '@/public/images';
import Menu from './Menu';
import { Button } from '@/components';

import { AiOutlineUser, AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import { FiUserCheck } from 'react-icons/fi';
import { MdGTranslate } from 'react-icons/md';
import Login from '@/components/Login';
import Signup from '@/components/SignUp';
import Searchkey from '@/views/Searchkey/Searchkey';
import OutsideClickHandler from 'react-outside-click-handler';
import MenuHover from './MenuHover';

const cx = classNames.bind(style);
const menuUser = [
    {
        title: 'Profile',
        to: '/profile'
    },
    {
        title: 'Logout',
        to: '/'
    }
]

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showUser, setShowUser] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [bgheader, setbgheader] = useState('');
    const [signup, setsignup] = useState(false);
    const [login, setlogin] = useState(false)
    const [showlogin, setshowlogin] = useState(false)
    const [translate, settranslate] = useState('none');
    const [currentUser, setCurrentUser] = useState(null);

    const { asPath } = useRouter();
    const router = useRouter();
    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';

    const URL = `${origin}${asPath}`;
    console.log(asPath);

    const handelShowMenu = () => {
        setShowMenu(!showMenu);
    };
    const showLogin = () => {
        if (showlogin === 'show') {
            setshowlogin('hidden');
        } else setshowlogin('show');
    }
    const handleLogout = () => {
        localStorage.removeItem('VNXUser');
        setCurrentUser(null);
        { asPath == '/profile' && router.push('/') }


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
    useEffect(() => {
        let VNXuser = localStorage.getItem('VNXUser') ? JSON.parse(localStorage.getItem('VNXUser')) : null;
        if (VNXuser) {
            setCurrentUser(VNXuser);
        } else {
            setCurrentUser(null);
        }
    }, [URL])

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
                        <OutsideClickHandler onOutsideClick={() => {
                            setlogin(false);
                        }}>
                            {currentUser ?

                                <div className={cx('item-user')}>
                                    <FiUserCheck className={cx('icon')} />
                                    <div className={cx('menuHover')} >
                                        <Link href='/profile' className={cx('itemMenuHover')}>Profile</Link>
                                        <h4 className={cx('itemMenuHover')} onClick={() => handleLogout()}>Logout</h4>
                                    </div>

                                </div>
                                : <AiOutlineUser className={cx('icon', { active: showUser })} onClick={() => login ? setlogin(false) : setlogin(true)} />}

                            {login && <div className={cx('login')}>< Login Click={setsignup} setuser={setCurrentUser} close={setlogin} /> </div>}

                        </OutsideClickHandler>
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
