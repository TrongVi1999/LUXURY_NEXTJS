import classNames from 'classnames/bind';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import { Searchtour, Searchblog } from '@/pages/api/CallAPI';

const cx = classNames.bind(style);

const Searchkey = () => {
    const [Tour, settour] = useState();
    const [Blog, setblog] = useState();
    const [keyword, setkeyword] = useState();

    const CallTour = async () => {
        const response = await Searchtour(keyword);

        if (response.status == 200) {
            settour(response.data.Object);
        }
    }
    const CallBlog = async () => {
        const response = await Searchblog(keyword);

        if (response.status == 200) {
            setblog(response.data.Object);
        }
    }

    useEffect(() => {
        CallTour();
        CallBlog();
    }, [keyword]);


    return (
        <div className={cx('searchkey-container')}>
            <input type='text' className={cx('input')} onChange={(e) => setkeyword(e.target.value)} placeholder='Type keyword here' />
            <div className={cx('result')}>
                {Tour && Tour.length > 0 &&
                    <div className={cx('result-div')}>
                        <p className={cx('p')}>Tour result</p>
                        {Tour.map((d, i) =>
                            <Link href={`/tour-detail/${d.TourCode}`} className={cx('result-tour')} key={i}>
                                <img src={`https://vnxpedia.3i.com.vn${d.HightlightImg}`} alt="vnxpedia-tour-img" className={cx('img')} layout='fill' />
                                <p>{d.TourName.toUpperCase()}</p>
                            </Link>

                        )}</div>}

                {Blog && Blog.length > 0 &&
                    <div className={cx('result-div')}>
                        <p className={cx('p')}> Blog result</p>
                        {Blog.map((d, i) =>
                            <Link href={`/tour-detail/${d.id}`} className={cx('result-tour')} key={i}>
                                <img src={`https://vnxpedia.3i.com.vn${d.gallery}`} alt="vnxpedia-tour-img" className={cx('img')} />
                                <p>{d.title.toUpperCase()}</p>
                            </Link>

                        )}</div>}
            </div>
        </div>
    )
}

export default Searchkey