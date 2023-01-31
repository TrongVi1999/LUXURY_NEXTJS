import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/Tourdetail.module.scss';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import axios from 'axios';
import Crumb from '@/views/Crumb/Crumb';
import Imglist from '@/views/Tourdetail/Imglist';
import Highlight from '@/views/Tourdetail/Highlight';
import Itinerary from '@/views/Tourdetail/Itinerary';
import Tourrecomment from '@/views/Tourdetail/Tourrecomment';
import { useRouter } from "next/router";
import IMG from '@/public/images/tour1.jpg';
import Booking from '@/views/Tourdetail/Booking';

const cx = classNames.bind(style);

const data = {
    img: IMG,
    title: 'Ha long bay day cruise - paradise explore',
    rate: 4.7,
    ratecount: 100,
    book: 999,
    long: 15,
    price: 3000,
    sale: 50,
    destination: 'Sung Sot Cave -Luon Cave -Soi Sim Beach',
    highlight: ['Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam', 'Local life in Viet Nam'],
};

const index = () => {
    const router = useRouter();
    const [Tourdata, setTourdata] = useState();
    const [Book, setBook] = useState(true);
    const handleBooking = () => {
        setBook(false);
    }

    const callApi = async () => {
        const response = await axios({
            method: 'post',
            url: `https://vnxpedia.3i.com.vn/TravelAPI/TourTable?tourcode=${router.query.id}`,
            type: 'json',
        });

        if (response.status === 200) {
            setTourdata(response.data.Object[0]);
        }

    };

    useEffect(() => {
        callApi();
    }, [router.query.id])

    return (
        <div className={cx('container')}>
            {Tourdata && <div className={cx('main')}>
                {Tourdata.BannerImg ?
                    <BannerIMG img={`https://vnxpedia.3i.com.vn${Tourdata.BannerImg}`} title={Tourdata.TourName} bg='bg' /> :
                    <BannerIMG img={`https://vnxpedia.3i.com.vn${Tourdata.HightlightImg}`} title={Tourdata.TourName} bg='bg' />
                }


                {Book ?
                    <div className={cx('main-infor')}>

                        <div className={cx('crumb-cost')}>
                            <Crumb text={Tourdata.TourName} />
                            <div className={cx('cost')}>
                                <sup>From</sup>
                                <p>$1000</p>
                                <span>/PAX</span>
                            </div>
                        </div>

                        <Imglist data={`https://vnxpedia.3i.com.vn${Tourdata.HightlightImg}`} />
                        <Highlight title={Tourdata.TourName} destination={Tourdata.Destination} long={Tourdata.DETAIL.length} highlight={Tourdata.Hightlight} click={handleBooking} />
                        <Itinerary description={Tourdata.TourDescription} detail={Tourdata.DETAIL} />

                    </div> : <Booking />

                }
                <Tourrecomment data={Tourdata} />



            </div>}
        </div>
    )
}

export default index