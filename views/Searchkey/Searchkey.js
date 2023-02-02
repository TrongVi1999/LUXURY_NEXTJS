import classNames from 'classnames/bind';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import style from './style.module.scss';
import { Searchblog, Searchtour } from '@/pages/api/CallAPI';

const cx = classNames.bind(style);

const Searchkey = () => {
    const [Tour, settour] = useState();
    const [Blog, setblog] = useState();
    const [keyword, setkeyword] = useState();

    const CallTour = async () => {
        const response = await Searchtour(keyword);

        if (response.status == 200) {
            settour(response.data.Object);
            console.log(response.data.Object);
            console.log(response.data);
            console.log(keyword);
        }

    }

    useEffect(() => {
        CallTour();
    }, [keyword]);
    console.log(Tour);

    return (
        <div className={cx('searchkey-container')}>
            <input type='text' className={cx('input')} onChange={(e) => setkeyword(e.target.value)} placeholder='Type keyword here' />
            <div className={cx('result')}>
                {Tour && Tour.map((d, i) =>
                    <div className={cx('result-tour')} key={i}>
                        <img src={`https://vnxpedia.3i.com.vn${d.HightlightImg}`} alt="vnxpedia-tour-img" className={cx('img')} />
                        <p>{d.TourName}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Searchkey