import React from 'react'
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Image from 'next/image';
import img1 from '@/public/images/bnn4.jpg'
import img2 from '@/public/images/bnn5.jpg'
import img3 from '@/public/images/bnn6.jpg'
import img4 from '@/public/images/bnn7.jpg'
import img5 from '@/public/images/bnn8.jpg'
import img6 from '@/public/images/bnn9.jpg'
import img7 from '@/public/images/bnn13.jpg'
import img8 from '@/public/images/bnn12.jpg'

const cx = classNames.bind(style);

const listdes = [
    {
        img: img1, title: 'Ha Noi, Viet Nam'
    }, { img: img2, title: 'Ho Chi Minh City, Viet Nam' }, { img: img3, title: 'Da Nang, Viet Nam' }, { img: img4, title: 'Sapa, Viet Nam' }, { img: img5, title: 'Ninh Binh, Viet Nam' }, { img: img6, title: 'Phu Quoc, Viet Nam' }, { img: img7, title: 'Bangkok, Thailand' }, { img: img8, title: 'Phnom Penh, Cambodia' }
]

const Spotlight = () => {
    return (
        <div className={cx('spl')}>
            <h2 className={cx('more-h22')}>
                SPOTLIGHT DESTINATION
            </h2>
            <div className={cx('hr')}></div>
            <p className={cx('sl-text')}>You'll discover Asia on a journey that is completely, authentically your own, adapted from our own remarkable experiences and adventures over the years.</p>

            <div className={cx('list-des')}>
                {listdes.map((d, i) =>
                    <div className={cx('des-item')} key={i}>
                        <Image src={d.img} alt='destination' ></Image>
                        <div className={cx('des-item-text')}>
                            <p>{d.title}</p>
                            <div className={cx('hr2')} />
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Spotlight