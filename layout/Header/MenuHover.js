import { useState } from 'react';
import Link from 'next/link';

import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { Button } from '@/components';

import classNames from 'classnames/bind';
import style from './header.module.scss';


const cx = classNames.bind(style);

function MenuHover({ className, showmenu, items }) {

    const [historyMenu, setHistoryMenu] = useState([{ data: items }])

    const current = historyMenu[historyMenu.length - 1]

    const renderItemMenu = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return (
                isParent ? (<div onClick={() => setHistoryMenu((prev) => [...prev, item.children])} className={cx('itemMenuHover')}>{item.title}</div>)
                    :
                    <Link key={index} href={item.to} className={cx('itemMenuHover')}>{item.title}</Link>
            )
        })

    }


    const clases = cx('menuHover', {
        [className]: className,
        active: showmenu,
    });

    return (
        <div className={clases}>
            {
                historyMenu.length > 1 && (<header className={cx('headerBack')}>
                    <Button className={cx('back-btn')} onClick={() => {
                        setHistoryMenu((prev) => prev.slice(0, prev.length - 1));
                    }}>
                        <MdOutlineArrowBackIosNew />
                    </Button>
                    <h4 className={cx('titleBack')}>{current.title}</h4>
                </header>)
            }
            {
                renderItemMenu()
            }


        </div>
    );
}

export default MenuHover;