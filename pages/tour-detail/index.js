import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/Tourdetail.module.scss';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import axios from 'axios';
import Crumb from '@/views/Crumb/Crumb';
import Imglist from '@/views/Tourdetail/Imglist';
import Highlight from '@/views/Tourdetail/Highlight';
import Itinerary from '@/views/Tourdetail/Itinerary';

const cx = classNames.bind(style);

const index = () => {
    const [Tourdata, setTourdata] = useState();

    const callApi = async () => {
        const response = await axios({
            method: 'post',
            url: `https://vnxpedia.3i.com.vn/TravelAPI/TourTable?tourcode=VNCLASSIC04`,
            type: 'json',
        });

        if (response.status === 200) {
            setTourdata(response.data.Object[0]);
            // setTourtype(response.data.Object[0].TourType);
            // setdatalink([
            //     'Home',
            //     `${response.data.Object[0].Country}`,
            //     `${response.data.Object[0].TourType.replace('TYPE_', '')}`,
            //     `${response.data.Object[0].TourName}`,
            // ]);
        }
        // setIsLoading(false);
    };

    useEffect(() => {
        callApi();
    }, [])
    console.log(Tourdata)

    return (
        <div className={cx('container')}>
            {Tourdata && <div className={cx('main')}>
                <BannerIMG img={`https://vnxpedia.3i.com.vn${Tourdata.BannerImg}`} title={Tourdata.TourName} />
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
                    <Highlight title={Tourdata.TourName} destination={Tourdata.Destination} long={Tourdata.DETAIL.length} highlight={Tourdata.Hightlight} />
                    <Itinerary description={Tourdata.TourDescription} detail={Tourdata.DETAIL} />
                </div>


            </div>}
        </div>
    )
}

export default index