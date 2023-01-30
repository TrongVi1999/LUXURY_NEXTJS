import Link from 'next/link';

import classNames from 'classnames/bind';
import style from './header.module.scss';

import MenuHover from './MenuHover';

const cx = classNames.bind(style);

const menuDes = [
    {
        title: 'VietNam',
        to: '/',
    },
    {
        title: 'ThaiLand',
        to: '/',
    },
    {
        title: 'Myanmar',
        to: '/',
    },
    {
        title: 'Laos',
        to: '/',
    },
    {
        title: 'Cambodia',
        to: '/',
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
                    to: '/',
                },
                {
                    title: 'Culinary',
                    to: '/',
                },
            ],
        },
    },
    {
        title: 'luxury cruise',
        to: '/',
    },
    {
        title: 'luxury transfer',
        to: '/',
    },
    {
        title: 'luxury hotel',
        to: '/',
    },

]

function Menu({ className, showmenu }) {
    const clases = cx('menu', {
        [className]: className,
        active: showmenu,
    });

    return (
        <nav className={clases}>
            <div className={cx('item')}>
                destination
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
            </div>
        </nav>
    );
}

export default Menu;
