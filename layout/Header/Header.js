import { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import Image from 'next/image';
import style from './header.module.scss';

import { Button } from '@/components';
import { images } from '@/public/images';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Menu from './Menu';

import Login from '@/components/Login';
import Signup from '@/components/SignUp';
import Searchkey from '@/views/Searchkey/Searchkey';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';
import { FiUserCheck } from 'react-icons/fi';
import { MdGTranslate } from 'react-icons/md';
import OutsideClickHandler from 'react-outside-click-handler';
import { ToastContainer } from 'react-toastify';
import Img1 from '@/public/icon/Layer15.png'


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
    const [translate, settranslate] = useState('none');
    const [currentUser, setCurrentUser] = useState(null);
    const { asPath } = useRouter();
    const router = useRouter();
    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';

    const URL = `${origin}${asPath}`;

    const handelShowMenu = () => {
        setShowMenu(!showMenu);

    };
    const closeMenuMobile = () => {
        setShowMenu(false);
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
                <Menu className={'menubody'} showmenu={showMenu} menuBgr={bgheader} close={closeMenuMobile} />
                <div className={cx('itemRight')}>
                    <OutsideClickHandler onOutsideClick={() => settranslate('none')}>
                        <div className={cx('gg-trans')}>
                            <Image src={Img1} className={cx('icon', { active: translate })} onClick={() => translate == 'none' ? settranslate('block') : settranslate('none')} alt='icon-language' />
                            {/* <MdGTranslate className={cx('icon', { active: translate })} onClick={() => translate == 'none' ? settranslate('block') : settranslate('none')} /> */}
                            <div className={cx('sl-trans')} style={{ display: translate }}>
                                <div id="google_translate_element" ></div>
                            </div>
                        </div>
                    </OutsideClickHandler>
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
                    <OutsideClickHandler onOutsideClick={() => { setShowSearch(false) }}>
                        <div className={cx('search-icon')}>
                            <AiOutlineSearch className={cx('icon', { active: showSearch })} onClick={() => showSearch ? setShowSearch(false) : setShowSearch(true)} />
                        </div>
                        {showSearch && <Searchkey />}
                    </OutsideClickHandler>
                    <AiOutlineMenu className={cx('icon', 'menuIcon', { active: showMenu })} onClick={handelShowMenu} />

                    <div className={cx('button-call')} >
                        <Button className={cx('button')}>Call US +84-90-159-1111</Button>
                        <span>OR</span>
                        <Button className={cx('button')}>Request a quote</Button>
                    </div>

                </div>
            </div>
            {signup && <Signup Click={setsignup} openlogin={setlogin} />}
            <ToastContainer />


        </div>
    );
};

export default Header;

//how to center div