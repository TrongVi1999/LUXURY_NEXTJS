import { useState } from "react";

import classNames from "classnames/bind";
import style from './booking.module.scss'

import { banners } from "@/public/images";
import ItemBookingUser from "./item";
import { Pagination } from "@/components";

const cx = classNames.bind(style);

const fakeBookingLists = [
    {
        img: banners.banner2,
        titleTour: 'Luxury tour discover the hiden charm of DaNang',
        id: '834502',
        place: 'Da Nang, Viet Nam',
        time: '26 jan - 29 jan 2023',
        type: 'luxury tour',
        status: 'booked',
    },
    {
        img: banners.banner2,
        titleTour: 'Luxury tour discover the hiden charm of DaNang',
        id: '834502',
        place: 'Da Nang, Viet Nam',
        time: '26 jan - 29 jan 2023',
        type: 'luxury tour',
        status: 'booked',
    },
    {
        img: banners.banner2,
        titleTour: 'Luxury tour discover the hiden charm of DaNang',
        id: '834502',
        place: 'Da Nang, Viet Nam',
        time: '26 jan - 29 jan 2023',
        type: 'luxury tour',
        status: 'booked',
    },
    {
        img: banners.banner2,
        titleTour: 'Luxury tour discover the hiden charm of DaNang',
        id: '834502',
        place: 'Da Nang, Viet Nam',
        time: '26 jan - 29 jan 2023',
        type: 'luxury tour',
        status: 'booked',
    },
    {
        img: banners.banner2,
        titleTour: 'Luxury tour discover the hiden charm of DaNang',
        id: '834502',
        place: 'Da Nang, Viet Nam',
        time: '26 jan - 29 jan 2023',
        type: 'luxury tour',
        status: 'planning',
    },
    {
        img: banners.banner2,
        titleTour: 'Luxury tour discover the hiden charm of DaNang',
        id: '834502',
        place: 'Da Nang, Viet Nam',
        time: '26 jan - 29 jan 2023',
        type: 'luxury tour',
        status: 'cancel',
    }, {
        img: banners.banner2,
        titleTour: 'Luxury tour discover the hiden charm of DaNang',
        id: '834502',
        place: 'Da Nang, Viet Nam',
        time: '26 jan - 29 jan 2023',
        type: 'luxury tour',
        status: 'cancel',
    }
]

function BookingUser() {

    const [page, setPage] = useState(1)

    const lastIndex = page * 6;
    const firstIndex = lastIndex - 6;
    return (<div className={cx('wrapper')}>
        <h1 className={cx('title')}>booking list</h1>
        {
            fakeBookingLists.slice(firstIndex, lastIndex).map((item, index) => (
                <ItemBookingUser key={index} img={item.img}
                    titleTour={item.titleTour}
                    id={item.id}
                    place={item.place}
                    time={item.time}
                    type={item.type}
                    status={item.status} />
            ))
        }

        <Pagination totalPosts={fakeBookingLists.length} postPerPage={6} setPage={setPage} pageIndex={page} />

    </div>);
}

export default BookingUser;