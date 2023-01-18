import Link from 'next/link';

import classNames from 'classnames/bind';
import style from './header.module.scss';

const cx = classNames.bind(style);

function Menu({ className, showmenu }) {
    const clases = cx('menu', {
        [className]: className,
        active: showmenu,
    });

    return (
        <nav className={clases}>
            <Link href={'/'} className={cx('item')}>
                description
            </Link>
            <Link href={'/'} className={cx('item')}>
                way to travel
            </Link>
            <Link href={'/'} className={cx('item')}>
                blog
            </Link>
            <Link href={'/'} className={cx('item')}>
                travel
            </Link>
        </nav>
    );
}

export default Menu;
