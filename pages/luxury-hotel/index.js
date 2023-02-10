import React, { useState, useEffect } from 'react'
import classNames from 'classnames/bind';
import IMG from '@/public/images/tour1.jpg';
import { Section, Title, Pagination } from '@/components';
import { BannerSlide, CategoryFilter } from '@/views';
import { banners } from '@/public/images';
import { useRouter } from "next/router";
import Hotelcard from '@/views/HotelCard/Hotelcard';
import { categoryFillerAddress, tourTagsFilter, seasonFillter, groupSizeFillter } from '@/public/dataRender';
import style from '@/styles/luxuryhotel.module.scss';
import { ListHotel } from '../api/CallAPI';


const cx = classNames.bind(style);

const datafa = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

const index = () => {
    const router = useRouter();
    const [Data, setdata] = useState([]);
    const [page, setPage] = useState(1);

    const CallAPI = async () => {
        const response = await (ListHotel(page, router.query.id));
        if (response.status == 200) {
            setdata(response.data.Object);
        }
    }

    useEffect(() => {
        CallAPI();
    }, [page, router.query.id]);

    const lastIndex = page * 9;
    const firstIndex = lastIndex - 9;

    return (
        <div className={cx('wrapper')}>
            <BannerSlide imgBanner={[banners.resolt]} className={cx('bannerBody')} classNameTitle={cx('titleBanner')} titleBanner={"Luxury hotel"} textBottom={"Best luxury hotel in Vietnam and Asia"} />
            {/* {data.length > 0 && 
                <Tourcard2 data={data[0]} 
                />} */}
            {/* {data.length > 0 && */}
            <div className={cx('main')}>
                <div className={cx('hotel-list')}>
                    <div className={cx('sort')}>
                        <button>Sort by</button>
                    </div>
                    {
                        Data && Data.slice(firstIndex, lastIndex).map((d) => (
                            <Hotelcard data={d} key={d} to={`/hotel-detail/${d.id}`} />
                        ))
                    }
                </div>
                <CategoryFilter
                    category={categoryFillerAddress}
                    className={cx('boxFilter')}
                />
            </div>

            {/* } */}

            <Pagination totalPosts={datafa.length} postPerPage={9} setPage={setPage} pageIndex={page} />
        </div>
    )
}

export default index