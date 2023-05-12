import React from 'react'
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Image from 'next/image';
import imgbn from '@/public/images/bnn1.jpg'

const cx = classNames.bind(style);

const Start = () => {
    return (
        <div className={cx('start')}>
            <Image src={imgbn} alt='beach' layout='responsive' />
            <div className={cx('text')}>
                <h4>We kwow luxury holidays</h4>
                <p>Unparalled, tailor-made luxury trips with expert service .For Us ,Every Thing ,Matter</p>
                <p>Now let's start your first step!</p>
                <div className={cx('grid-btn')}>
                    <button>Most Popular</button>
                    <button>By Destination</button>
                    <button>By Type</button>
                    <button>View All</button>
                </div>
            </div>
        </div>
    )
}

export default Start