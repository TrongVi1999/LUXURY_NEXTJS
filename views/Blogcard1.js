import React from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/bloghome.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const cx = classNames.bind(style);

const Blogcard1 = ({ Data }) => {
    return (
        <Link href={`/blog-detail/${Data.id}`} className={cx('blog')}>
            <img src={`https://vnxpedia.3i.com.vn${Data.gallery}`} alt="blog-vnxpedia" />
            <div className={cx('text-box')}>
                <p className={cx('title')}>{Data.title.toUpperCase()}</p>
                <p className={cx('hr')}></p>
                <p className={cx('content')}>
                    {/* {Data.content} */}
                    Ha Long Bay, in the Gulf of Tonkin, includes some 1,600 islands and islets, forming a spectacular seascape of limestone pillars. Because of their precipitous nature, most of the islands are uninhabited and unaffected by a human presence. The site's outstanding scenic beauty is complemented by its great biological interest.
                </p>
            </div>
        </Link>
    );
};

export default Blogcard1;
