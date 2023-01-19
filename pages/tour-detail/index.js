import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import style from '@/styles/Tourdetail.module.scss';
import BannerIMG from '@/views/BannerSlide/BannerIMG';
import axios from 'axios';
import Crumb from '@/views/Crumb/Crumb';

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

                    </div>
                </div>

            </div>}
        </div>
    )
}

export default index