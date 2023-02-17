import React from 'react'
import style from '@/styles/Hoteldetail.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import Loading from '@/components/Loading';
import { ListHotel } from '@/pages/api/QuerryAPI';

const cx = classNames.bind(style);

const HotelDetail = () => {
    const getHotelDetail = ListHotel()
    if (getHotelDetail.isLoading) {
        return <Loading />;
    }

    if (getHotelDetail.error) {
        return <p>Error: {error.message}</p>;
    }
    return (



        <div className={cx('Siminal-Hotel')}>
            {getHotelDetail.data && getHotelDetail.data.Object.slice(0, 3).map((d, i) =>
                <div className={cx('card')} key={i}>
                    <div className={cx('card-img')} >
                        <Image src={`https://vnxpedia.3i.com.vn${d.gallery}`} alt="vnxpedia-tour-img" className={cx('img')} width={200} height={200} />
                    </div>
                    <div className={cx('infor')}>
                        <h6 className={cx('title')}>{d.title.toUpperCase()}</h6>
                        <p className={cx('rate')}>
                            <span className={cx('rating')}>
                                <AiFillStar /> 4.8
                            </span>
                            <span className={cx('ratecount')}>
                                &#40; 28.091 Đánh giá &#41; |600 Đã được đặt
                            </span>
                        </p>
                        <p className={cx('price')}>
                            {/* <span className={cx('price1')}>$ {data.price}</span> */}

                        </p>
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default HotelDetail