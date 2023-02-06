import Link from 'next/link';

import classNames from 'classnames/bind';
import style from './header.module.scss';

import MenuHover from './MenuHover';

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


function Menu({ className, showmenu, menuBgr }) {

    const clases = cx('menu', {
        [className]: className,
        active: showmenu,
    });

    return (
        <nav className={clases}>
            <div className={cx('item')}>
                destination
                <MenuHover items={menuDes} className={cx('menuHoverBody')} isScroll={!!menuBgr.length} />
            </div>
            <div className={cx('item')}>
                way to travel
                <MenuHover items={menuWayTravel} className={cx('menuHoverBody')} />
            </div>

            <Link href={'/blog-list'} className={cx('item')}>
                Inspiration
            </Link>
            <div className={cx('item')}>
                about us
                <MenuHover items={menuAbouUs} className={cx('menuHoverBody')} />

            </div>
        </nav>
    );
}

export default Menu;
