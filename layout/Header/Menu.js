import Link from 'next/link';

import classNames from 'classnames/bind';
import style from './header.module.scss';

import MenuHover from './MenuHover';
import { useState } from 'react';

const cx = classNames.bind(style);

const menuDes = [
    {
        title: 'Viet Nam',
        to: '/destination/VietNam',
    },
    {
        title: 'ThaiLand',
        to: '/destination/ThaiLand',

    },
    {
        title: 'Myanmar',
        to: '/destination/Myanmar',

    },
    {
        title: 'Laos',
        to: '/destination/Laos',

    },
    {
        title: 'Cambodia',
        to: '/destination/Cambodia',

    }
]

const menuWayTravel = [
    {
        title: 'luxury tour',
        children: {
            title: 'luxury tour',
            data: [
                {
                    title: 'Classic Tour',
                    to: '/way-to-travel/TYPE_CLASSIC',
                },
                {
                    title: 'Family Tour',
                    to: '/way-to-travel/TYPE_FAMILY',
                },
                {
                    title: 'Culinary',
                    to: '/way-to-travel/TYPE_CULINARY',
                },
                {
                    title: 'Beach Break',
                    to: '/way-to-travel/TYPE_BEACH',
                },
                {
                    title: 'Adventure',
                    to: '/way-to-travel/TYPE_ADVENTURE',
                },
                {
                    title: 'Heritage',
                    to: '/way-to-travel/TYPE_HERITAGES',
                },
                {
                    title: 'Wellness',
                    to: '/way-to-travel/TYPE_WELLNESS',
                },
                {
                    title: 'MICE',
                    to: '/mice',
                },
            ],
        },
    },
    {
        title: 'luxury cruise',
        to: '/way-to-travel/TYPE_CRUISE',
    },
    {
        title: 'luxury transfer',
        to: '/luxury-transfer',
    },
    {
        title: 'luxury hotel',
        to: '/luxury-hotel',
    },
]

const menuAbouUs = [
    {
        title: 'About Us',
        to: '/about-us'
    },
    {
        title: 'Payment',
        to: '/payment/DEPOSIT & PAYMENT'
    },
    {
        title: 'Responsible',
        to: '/responsible'
    }
]


function Menu({ className, showmenu, menuBgr, close }) {

    const clases = cx('menu', {
        [className]: className,
        active: showmenu,
    });

    const [cclosed1, setclose1] = useState();
    const [cclosed2, setclose2] = useState();
    const [cclosed3, setclose3] = useState();

    return (
        <nav className={clases}>
            <div className={cx('item')} onMouseEnter={() => setclose1(true)}
                onMouseLeave={() => setclose1(false)}>
                destination
                {cclosed1 && <MenuHover items={menuDes} className={cx('menuHoverBody')} isScroll={!!menuBgr.length} close={close} close1={setclose1} />}
            </div>
            <div className={cx('item')} onMouseEnter={() => setclose2(true)}
                onMouseLeave={() => setclose2(false)}>
                way to travel
                {cclosed2 && <MenuHover items={menuWayTravel} className={cx('menuHoverBody')} close={close} close1={setclose2} />}
            </div>

            <Link href={'/blog-list'} className={cx('item')} onClick={() => close()}>Inspirations</Link>
            <div className={cx('item')} onMouseEnter={() => setclose3(true)}
                onMouseLeave={() => setclose3(false)}>
                about us
                {cclosed3 && <MenuHover items={menuAbouUs} className={cx('menuHoverBody')} close={close} close1={setclose3} />}

            </div>
        </nav>
    );
}

export default Menu;
