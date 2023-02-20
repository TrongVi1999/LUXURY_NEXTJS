// import { useEffect, useState } from "react";
import React, { useEffect, useState } from "react";

import classNames from "classnames/bind";
import style from './booking.module.scss'

import { banners } from "@/public/images";
import ItemBookingUser from "./item";
import { Pagination } from "@/components";
import EditBookDefault from "@/views/EditBooking/EditBookDefault";
import EditBookMice from "@/views/EditBooking/EditBookMice";
import EditBookTransfer from "@/views/EditBooking/EditBookTransfer";
import EditBookHotel from "@/views/EditBooking/EditBookHotel";
import { Getbookinglist } from "@/pages/api/QuerryAPI";

const cx = classNames.bind(style);



function BookingUser({ user, reload, setreload }) {

    const [Bookdata, setBookdata] = useState([]);
    const [page, setPage] = useState(1);
    const [showEdit, setShowEdit] = useState(false);

    const [data, setData] = useState();

    const lastIndex = page * 6;
    const firstIndex = lastIndex - 6;
    const listBook = Getbookinglist(user, reload);



    return (<div className={cx('wrapper')}>
        {listBook.data && <>
            <h2 className={cx('title')}>booking list</h2>

            {listBook.data.slice(firstIndex, lastIndex).map((item, index) => (

                <ItemBookingUser key={index}
                    img={banners.banner2}
                    data={item}
                    toggle={setShowEdit}
                    setData={setData}
                />
            ))}

        </>
        }
        <Pagination totalPosts={Bookdata.length} postPerPage={6} setPage={setPage} pageIndex={page} />

        {showEdit && data.Type == "TOUR" && <EditBookDefault dataOld={data} toggle={setShowEdit} reload={reload} setreload={setreload} />}
        {showEdit && data.Type == "MICE" && <EditBookMice dataOld={data} toggle={setShowEdit} reload={reload} setreload={setreload} />}
        {showEdit && data.Type == "TRANSFER" && <EditBookTransfer dataOld={data} toggle={setShowEdit} reload={reload} setreload={setreload} />}
        {showEdit && data.Type == "HOTEL" && <EditBookHotel dataOld={data} toggle={setShowEdit} reload={reload} setreload={setreload} />}

    </div>);
}

export default BookingUser;