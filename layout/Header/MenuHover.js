import Link from 'next/link';

import classNames from 'classnames/bind';
import style from './header.module.scss';

const cx = classNames.bind(style);

function MenuHover({ className, showmenu, data }) {
    const clases = cx('menuHover', {
        [className]: className,
        active: showmenu,
    });

    return (
        <div className={cx('bodyMenuHover')}>

            <nav className={clases}>

                <Link href={'/'} className={cx('itemMenuHover')}>
                    hello
                </Link>

            </nav>
        </div>
    );
}

export default MenuHover;