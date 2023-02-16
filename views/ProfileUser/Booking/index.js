// import { useEffect, useState } from "react";
import React, { useEffect, useState } from "react";

import classNames from "classnames/bind";
import style from './booking.module.scss'

import { banners } from "@/public/images";
import ItemBookingUser from "./item";
import { Pagination } from "@/components";
import axios from "axios";
import EditBookDefault from "@/views/EditBooking/EditBookDefault";
import EditBookMice from "@/views/EditBooking/EditBookMice";
import EditBookTransfer from "@/views/EditBooking/EditBookTransfer";
import EditBookHotel from "@/views/EditBooking/EditBookHotel";
import { Getbookinglist } from "@/pages/api/QuerryAPI";

const cx = classNames.bind(style);

// useEffect(() => {
//     let VNXuser = localStorage.getItem('VNXUser') ? JSON.parse(localStorage.getItem('VNXUser')) : null;
//     if (VNXuser) {
//         setCurrentUser(VNXuser);
//         setUseredit(VNXuser);
//     } else {
//         setCurrentUser(null);
//     }
// }, []);



// const fakeBookingLists = [
//     {
//         img: banners.banner2,
//         titleTour: 'Luxury tour discover the hiden charm of DaNang',
//         id: '834502',
//         place: 'Da Nang, Viet Nam',
//         time: '26 jan - 29 jan 2023',
//         type: 'luxury tour',
//         status: 'booked',
//     },
//     {
//         img: banners.banner2,
//         titleTour: 'Luxury tour discover the hiden charm of DaNang',
//         id: '834502',
//         place: 'Da Nang, Viet Nam',
//         time: '26 jan - 29 jan 2023',
//         type: 'luxury tour',
//         status: 'booked',
//     },
//     {
//         img: banners.banner2,
//         titleTour: 'Luxury tour discover the hiden charm of DaNang',
//         id: '834502',
//         place: 'Da Nang, Viet Nam',
//         time: '26 jan - 29 jan 2023',
//         type: 'luxury tour',
//         status: 'booked',
//     },
//     {
//         img: banners.banner2,
//         titleTour: 'Luxury tour discover the hiden charm of DaNang',
//         id: '834502',
//         place: 'Da Nang, Viet Nam',
//         time: '26 jan - 29 jan 2023',
//         type: 'luxury tour',
//         status: 'booked',
//     },
//     {
//         img: banners.banner2,
//         titleTour: 'Luxury tour discover the hiden charm of DaNang',
//         id: '834502',
//         place: 'Da Nang, Viet Nam',
//         time: '26 jan - 29 jan 2023',
//         type: 'luxury tour',
//         status: 'planning',
//     },
//     {
//         img: banners.banner2,
//         titleTour: 'Luxury tour discover the hiden charm of DaNang',
//         id: '834502',
//         place: 'Da Nang, Viet Nam',
//         time: '26 jan - 29 jan 2023',
//         type: 'luxury tour',
//         status: 'cancel',
//     }, {
//         img: banners.banner2,
//         titleTour: 'Luxury tour discover the hiden charm of DaNang',
//         id: '834502',
//         place: 'Da Nang, Viet Nam',
//         time: '26 jan - 29 jan 2023',
//         type: 'luxury tour',
//         status: 'cancel',
//     }
// ]

function BookingUser({ user, reload, setreload }) {
    // const [currentUser, setCurrentUser] = useState(null);
    const [Bookdata, setBookdata] = useState([]);
    const [page, setPage] = useState(1);
    const [showEdit, setShowEdit] = useState(false);

    const [data, setData] = useState();

    const lastIndex = page * 6;
    const firstIndex = lastIndex - 6;
    const listBook = Getbookinglist(user, reload);
    // const CallApi = async () => {

    //     const response = await axios({
    //         method: 'post',
    //         url: `https://vnxpedia.3i.com.vn/TravelAPI/BookingTable?Username=${user}`,
    //         type: 'json',
    //     });

    //     if (response.status === 200) {
    //         setBookdata(response.data.Object);
    //     }

    // };
    // useEffect(() => {
    //     CallApi()
    // }, [])
    // console.log(Bookdata);


    // //get 1 tour
    // const callApi1 = async () => {
    //     const response = await axios({
    //         method: 'post',
    //         url: `https://vnxpedia.3i.com.vn/TravelAPI/TourTable?tourcode=${router.query.id}`,
    //         type: 'json',
    //     });

    //     if (response.status === 200) {
    //         setTourdata(response.data.Object[0]);
    //     }

    // };

    // useEffect(() => {
    //    {Bookdata.length > 0  && callApi1();}
    // }, [Bookdata])


    return (<div className={cx('wrapper')}>
        {listBook.data && <>
            <h1 className={cx('title')}>booking list</h1>

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