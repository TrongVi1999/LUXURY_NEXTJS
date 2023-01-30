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

function Menu({ className, showmenu }) {
    const clases = cx('menu', {
        [className]: className,
        active: showmenu,
    });

    return (
        <nav className={clases}>
            <Link href={'/destination'} className={cx('item')}>
                destination
                {/* <MenuHover data={menuDes} />/ */}
            </Link>
            <Link href={'/way-to-travel'} className={cx('item')}>
                way to travel
            </Link>
            <Link href={'/blog-list'} className={cx('item')}>
                blog
            </Link>
            <Link href={'/about-us'} className={cx('item')}>
                about us
            </Link>
        </nav>
    );
}

export default Menu;
