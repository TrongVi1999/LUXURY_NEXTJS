import React from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/blogdetail.module.scss';
import Blogcard3 from '../Blogcard/Blogcard3';
import IMG from '@/public/images/blogcard3.png'


const cx = classNames.bind(style);
const data = {
    banner: IMG,
    author: 'admin',
    type: 'Personal',
    title: 'the CLASSIC RAZOR FOR THE MODERN MAN',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus maximus vehicula. 
    Sed feugiat, tellus vel tristique posuere, diam`,
    galerry: IMG,
    hash_tag: ['Culinary', 'Da Nang', 'Couple tour'],
}

const Blogrecomment = () => {
    return (
        <div className={cx('blog-recomment')}>
            <Blogcard3 data={data} />
            <Blogcard3 data={data} />
        </div>
    )
}

export default Blogrecomment