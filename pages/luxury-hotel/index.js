import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind';
import { Section, Title, Pagination } from '@/components';
import { BannerSlide, CategoryFilter } from '@/views';
import { banners } from '@/public/images';
import { useRouter } from "next/router";
import Hotelcard from '@/views/HotelCard/Hotelcard';
import { categoryFillerAddress } from '@/public/dataRender';
import style from '@/styles/luxuryhotel.module.scss';
import { ListHotel } from '../api/QuerryAPI';
import Loading from '@/components/Loading';
import Headpage from '@/components/Head/head';
import BannerIMG from '@/views/BannerSlide/BannerIMG';


const cx = classNames.bind(style);


const index = () => {
    const router = useRouter();
    const [tag, settag] = useState('')
    const [page, setPage] = useState(1);

    const hotelList = ListHotel(tag);

    const lastIndex = page * 8
    const firstIndex = lastIndex - 8;



    return (
        <div className={cx('wrapper')}>
            <Headpage />
            {/* <BannerSlide imgBanner={[banners.resolt]} className={cx('bannerBody')} classNameTitle={cx('titleBanner')} titleBanner={"Luxury hotel"} textBottom={"Best luxury hotel in Vietnam and Asia"} /> */}
            <BannerIMG img={banners.hotel} title={'LUXURY HOTEL'} descrip={'Best luxury hotel in Viet Nam and Asia'} />
            <div className={cx('main')}>
                {hotelList.isLoading && <Loading />}
                {hotelList.data &&
                    <div className={cx('hotel-list')}>
                        <div className={cx('sort')}>
                            <button>Sort by</button>
                        </div>
                        {
                            hotelList.data.Object.slice(firstIndex, lastIndex).map((d) => (
                                <Hotelcard data={d} key={d} to={`/hotel-detail/${d.id}`} />
                            ))
                        }
                    </div>
                }
                <CategoryFilter
                    category={categoryFillerAddress}
                    className={cx('boxFilter')}
                    setvldestination={settag}

                />
            </div>

            {/* } */}
            {hotelList.data &&
                <Pagination totalPosts={hotelList.data.Object.length} postPerPage={8} setPage={setPage} pageIndex={page} />}
        </div>
    )
}

export default index