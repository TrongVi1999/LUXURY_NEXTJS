import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '@/public/images/bnn14.jpg';
import img2 from '@/public/images/bnn15.jpg';
import img3 from '@/public/images/bnn16.jpg';

const cx = classNames.bind(style);

const listblog = [
    {
        img: img1,
        title: 'The Most Expensive "Banh Mi" In Ho Chi Minh City That Is Worth A Try',
        day: 'Mar 14 ,2023'
    },
    {
        img: img2,
        title: 'Hanoi Egg Coffee - A Must-Try Specialty In The Capital City',
        day: 'Apr 19 ,2023'
    },
    {
        img: img3,
        title: 'The Top 6 Foods You Must Try in Hue City',
        day: 'Mar 24 ,2023'
    }

]

const Blog = () => {
    return (
        <div className={cx('spl')}>
            <h2 className={cx('more-h22')}>
                FROM THE BLOG
            </h2>
            <div className={cx('hr')}></div>
            <p className={cx('sl-text')}>We provide you with stories, interesting things, experiences that you can learn during your trip.</p>
            <div className={cx('list-blog')}>
                {listblog.map((d, i) =>
                    <div className={cx('blog-item')} key={i}>
                        <Image src={d.img} alt='blog' />
                        <p>{d.title}</p>
                        <div className={cx('hr2')} />
                        <h4>{d.day}</h4>
                        <Link href='/' alt=''>READ MORE</Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Blog
