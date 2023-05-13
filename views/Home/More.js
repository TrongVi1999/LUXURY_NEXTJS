import React from 'react'
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Image from 'next/image';
import img1 from '@/public/images/bnn2.jpg';
import img2 from '@/public/images/bnn3.jpg';

const cx = classNames.bind(style);

const More = () => {
    return (

        <div className={cx('more')}>
            <h2 className={cx('more-h2')}>MORE ABOUT US</h2>
            <div className={cx('hr')}></div>
            <div className={cx('more-list')}>
                <div className={cx('item1')}>

                    <div className={cx('text-more')}>
                        <h2>#4</h2>
                        <h3>REASONS TO BOOK WITH US</h3>
                        <p>Tailor-made trips, local guides, 24/7 accessibility? Don’t worry, we’ve got your back.</p>
                        <button>Show more</button>
                    </div>

                </div>
                <div className={cx('item2')}>

                    <div className={cx('text-more')}>
                        <h2>SHOW YOU</h2>
                        <h3>HOW IT ALL WORKS</h3>
                        <p>From crafting your trip to your journey home, we’ve got you covered.</p>
                        <button>Show more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default More